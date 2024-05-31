import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signOut, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const axiosPublic = UseAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Function to reauthenticate the user
    const reauthenticateUser = (currentPassword) => {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        return reauthenticateWithCredential(user, credential);
    };

    const deletedUser = async (currentPassword) => {
        setLoading(true);
        try {
            // Re-authenticate the user before deletion
            await reauthenticateUser(currentPassword);
            // Proceed to delete the user
            await deleteUser(auth.currentUser);
        } catch (error) {
            console.error("Error deleting user: ", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    console.log(res.data);
                    if (res.data.token) {
                        localStorage.setItem('access_token', res.data.token);
                    }
                });
            } else {
                localStorage.removeItem('access_token');
            }
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);
    
    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOutUser,
        deletedUser
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

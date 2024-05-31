import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import UseAuth from "../../../Hooks/UseAuth";

const Users = () => {
    const { deletedUser } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleDeleteUser = async (id) => {
        console.log(id);

        // Prompt the user for their current password
        const currentPassword = prompt("Please enter your current password for verification:");

        if (!currentPassword) {
            alert("Password is required for verification.");
            return;
        }

        try {
            // Delete from the backend
            const res = await axiosSecure.delete(`/users/${id}`);
            console.log(res.data);

            // Delete from Firebase
            await deletedUser(currentPassword);
            console.log('deleted user from Firebase');

            // Refetch users list after deletion
            refetch();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleMakeAdmin = (user) => {
        console.log(user);
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                refetch();
            });
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ?
                                            <button className="btn btn-accent" >Admin</button>
                                            :
                                            <button className="btn btn-secondary" onClick={() => handleMakeAdmin(user)}>Make Admin</button>
                                    }
                                </td>
                                <td><button
                                    onClick={() => handleDeleteUser(user._id)}
                                    className="btn btn-accent"><FaTrash></FaTrash> Trash</button></td>
                            </tr>)
                        }

                        {/* row 2 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;

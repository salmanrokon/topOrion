import { useNavigate } from "react-router-dom";


const PriceTable = () => {
    const navigate=useNavigate();
    
const handlePrice=(cardData)=>{
console.log(cardData)
navigate('/price', { state: { cardData} });

}
    return (
        <div className="border-2 p-8  flex flex-col lg:flex-row gap-8 mx-auto justify-center">
            <div className="p-8 bg-gradient-to-r from-cyan-500 to-red-500 w-96 h-96 drop-shadow-2xl bg-red-500 shadow-lg shadow-black-500/50">
                <p className="text-4xl font-bold">Basic-$500</p>
                <h2 className="text-1xl font-bold ">Website Development</h2>
                <p className="text-lg">Features</p>
                <p>*Responsive design</p>
                <p>*User-friendly interface</p>
                <p>*Cross-browser compatibility</p>
                <p>*Customizable layouts</p>
                <p>*Customizable Functions</p>
                <button onClick={()=>handlePrice(
                    {
                        name:"Website Development",
                        price:"$500",
                        features:["Responsive design","User-friendly interface","Cross-browser compatibility","Customizable layouts","Customizable Functions"]
                    }
                )} className="btn btn-secondary mt-12">Make Request</button>
            </div>
            <div className="p-8 bg-gradient-to-r from-pink-400 to-yellow-500 w-96 h-96 drop-shadow-2xl bg-red-500 shadow-lg shadow-black-500/50">
                <p className="text-4xl font-bold">Basic-$2000</p>
                <p></p>
                <h2 className="text-1xl font-bold ">E-commerce Development</h2>
                <p className="text-lg">Features</p>
                <p>*Responsive design</p>
                <p>*User-friendly interface</p>
                <p>*SEO-friendly architecture</p>
                <p>*Shopping cart integration</p>
                <p>*Product management system</p>
                <button onClick={()=>handlePrice(
                    {
                        name:"E-commerce Development",
                        price:"$2000",
                        features:["Responsive design","User-friendly interface","SEO-friendly architecture","Shopping cart integration","Product management system"]
                    }
                )} className="btn btn-secondary mt-12">Make Request</button>
            </div>
            <div className="p-8 bg-gradient-to-r from-teal-500 to-indigo-600 w-96 h-96 drop-shadow-2xl bg-red-500 shadow-lg shadow-black-500/50">
                <p className="text-4xl font-bold">Basic-$500</p>
                <h2 className="text-2xl font-bold ">Search Engine Optimization </h2>
                <p className="text-lg">Features</p>
                <p>*Keyword research</p>
                <p>*On-page optimization</p>
                <p>*Link building</p>
                <p>*Performance tracking</p>
                <p>*Details Report</p>
                <button onClick={()=>handlePrice(
                    {
                        name:"Search Engine Optimization",
                        price:"$500/Monthly",
                        features:["Keyword research","On-page optimization","Link building","Performance tracking","Details Report"]
                    }
                )} className="btn btn-secondary mt-12">Make Request</button>
            </div>
            
        </div>
    );
};

export default PriceTable;
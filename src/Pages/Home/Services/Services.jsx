import { useEffect } from "react";
import { useState } from "react";
import './style.css'

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto justify-center items-center gap-8 p-8">
            {
                services.map(service => <div key={service._id} className="mx-auto hover-gradient">
                    <h1 className="text-2xl font-semibold ">{service.serviceName}</h1><br />
                    <p className="">{service.description}</p>
                    <hr className="mt-4 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
                    </div>)
            }
        </div>
    );
};

export default Services;
import { useEffect, useState, } from "react";
// import './service.css';

const ServiceArt = () => {
    const [services, setServices] = useState([]);
 

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));

 
    }, []);

    return (
        <div>
            <div className="flex p-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-1/3 mx-auto">
                    {services.map(service => (
                        <div key={service._id}>
                            <h1 className="text-2xl font-semibold">{service.serviceName}</h1><br />
                            <p>{service.description}</p>
                            <hr className="mt-4 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
                        </div>
                    ))}
                </div>
                <div className="w-1/2">
                    <img src="https://i.ibb.co/Tw1yhJ7/feature-img3.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceArt;

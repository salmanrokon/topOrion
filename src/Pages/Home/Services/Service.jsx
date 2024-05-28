import { useEffect, useState } from "react";
// import Banner from "../Banner/Banner";
import PriceTable from "../../PriceTable/PriceTable";
import { Helmet } from "react-helmet-async";


const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div><img className="w-full h-[500px]" src="https://i.ibb.co/TqK77FS/Always-ready-to-give-best-service-1.png" alt="" /></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto justify-center items-center gap-8 p-8">
                {
                    services.map(service => <div key={service._id} className="mx-auto hover-gradient">
                        <h1 className="text-2xl font-semibold ">{service.serviceName}</h1><br />
                        <p className="">{service.description}</p>
                        <hr className="mt-4 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
                    </div>)
                }
            </div>
            <PriceTable></PriceTable>
        </div>
    );
};

export default Service;
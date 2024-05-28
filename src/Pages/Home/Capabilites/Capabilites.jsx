import { FaBusinessTime, FaCode } from "react-icons/fa";
import { GiCobweb } from "react-icons/gi";
import { SiCodesignal } from "react-icons/si";


const Capabilites = () => {
    return (
        <div>
            <div className="text-center mt-12 mb-8">
                <h1 className="text-6xl font-semibold">OUR CAPATIBILITIES</h1>
                <p className="mt-4">I am an expert in web development, proficient in both front-end and back-end technologies, ensuring responsive and high-performing websites. I specialize in e-commerce solutions, integrating secure payment gateways and customizing platforms like Shopify and WooCommerce. My SEO skills enhance site visibility through effective on-page, off-page, and technical strategies. Additionally, I excel in web design, creating user-centric and visually appealing interfaces that align with brand identity.</p>
                <div className="flex-1 lg:flex gap-32 mx-auto justify-center mt-8">
                <div>
                <div className="radial-progress items-center" style={{ "--value": "100", "--size": "12rem", "--thickness": "1rem" }} role="progressbar"><FaCode className="text-4xl"/> </div>
                <p>Web Development</p>
                </div>
                <div>
                <div className="radial-progress items-center" style={{ "--value": "75", "--size": "12rem", "--thickness": "1rem" }} role="progressbar"><FaBusinessTime className="text-4xl"/> </div>
                <p>E-commerce</p>
                </div>
               <div>
               <div className="radial-progress items-center" style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" }} role="progressbar"><GiCobweb className="text-4xl"/> </div>
               <p>SEO</p>
               </div>
                <div>
                <div className="radial-progress items-center" style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" }} role="progressbar"><SiCodesignal className="text-4xl"/> </div>
                <p>Web Design</p>
                </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Capabilites;
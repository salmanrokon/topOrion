import { FaCode } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { IoIosLeaf } from "react-icons/io";
import { MdSecurity } from "react-icons/md";


const UxDesign = () => {
    return (
        <div>
            <div className="flex mx-auto justify-center mt-8">
               <div className="w-1/3">
               <div className="mb-2">
                <div className="flex items-center gap-2"><FaCode  className="text-3xl"/>
                <p className="text-2xl font-semibold">	Web Development</p>
                </div>
                <p className="p-2">I offer comprehensive web development services, including responsive design, backend development, and SEO optimization, to create custom, user-friendly websites tailored to your business needs</p>
                </div>
                <div>
                <div className="flex items-center gap-2"><FcCustomerSupport   className="text-3xl"/>
                <p className="text-2xl font-semibold">Fast Support</p>
                </div>
                <p className="p-2">I offer prompt and responsive support services, addressing client inquiries, troubleshooting technical issues, and providing timely solutions to ensure minimal downtime and uninterrupted website performance</p>
                </div>
                <div>
                <div className="flex items-center gap-2"><MdSecurity   className="text-3xl"/>
                <p className="text-2xl font-semibold">Super security</p>
                </div>
                <p className="p-2">I prioritize the implementation of robust security measures, including encryption, firewalls, regular updates, and vulnerability assessments, to safeguard your website and data against cyber threats, malware, and unauthorized access</p>
                </div>
               </div>
                <div className="w-/12">
                    <img src="https://i.ibb.co/X4SrMrd/ux-ui.webp" alt="" />
                </div>
            </div>


        </div>
    );
};

export default UxDesign;
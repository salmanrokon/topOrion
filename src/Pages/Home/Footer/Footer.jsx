import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <img className="w-16" src="https://i.ibb.co/zR6dVFq/Top-orion-psd-logo.png" alt="" />
                    <p>Copyright © Top Orion 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="https://twitter.com" target="_blank">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="https://youtube.com" target="_blank">
                        <FaYoutube className="text-2xl" />
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <FaFacebook className="text-2xl" />
                    </a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
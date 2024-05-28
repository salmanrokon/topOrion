
import { Helmet } from "react-helmet-async";
import Portfolio from "../../Portfolio/Portfolio";
import Post from "../../Posts/Post";
import Banner from "../Banner/Banner";
import Capabilites from "../Capabilites/Capabilites";
import ChooseUs from "../ChooseUs/ChooseUs";
import Paralax from "../Paralax/Paralax";
import ServiceArt from "../ServiceArt/ServiceArt";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import UxDesign from "../Uxdesign/UxDesign";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Slider></Slider>
            <ServiceArt></ServiceArt>
            <Capabilites></Capabilites>
            <ChooseUs></ChooseUs>
            <UxDesign></UxDesign>
            <Paralax></Paralax>
            <Portfolio></Portfolio>
            <Post></Post>
            
        </div>
    );
};

export default Home;
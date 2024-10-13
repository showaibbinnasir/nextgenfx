import { useLocation } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import { CarouselComponent } from "../CarouselComponent/CarouselComponent";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import HomeTutorial from "../HomeTutorial/HomeTutorial";
import NewsAndUpdated from "../NewsAndUpdates/NewsAndUpdated";
import OurPortfolio from "../OurPortfolio/OurPortfolio";
import OurServices from "../OurServices/OurServices";
import Overview from "../Overview/Overview";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../utility/PageVariant";

const HomePage = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    document.title = "Nextgenfx | Home"
    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>

            <Overview></Overview>
            <WhoWeAre></WhoWeAre>
            <CarouselComponent></CarouselComponent>
            <OurServices></OurServices>
            <OurPortfolio></OurPortfolio>
            <NewsAndUpdated></NewsAndUpdated>
            <HomeTutorial></HomeTutorial>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </motion.div>
    );
};

export default HomePage;
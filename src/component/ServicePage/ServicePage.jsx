import { useEffect } from "react";
import OurServices from "../OurServices/OurServices";
import ServiceDetails from "./ServiceDetails";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../utility/PageVariant";
const ServicePage = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    document.title = "NextgenFx | Services"
    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
            
            <OurServices></OurServices>
            <ServiceDetails></ServiceDetails>
            

        </motion.div>
    );
};

export default ServicePage;
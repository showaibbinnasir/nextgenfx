import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PortfolioList from "./PortfolioList";
import { motion } from "framer-motion";
import { pageVariants } from "../utility/PageVariant";
const PortfolioPage = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    document.title = "Nextgenfx | Projects"
    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
            <PortfolioList></PortfolioList>
            
        </motion.div>
    );
};

export default PortfolioPage;
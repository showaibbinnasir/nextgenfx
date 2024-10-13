import { Outlet } from "react-router-dom";
import NavigationBar from "../../component/NavigationBar/NavigationBar";
import { AnimatePresence } from "framer-motion";
import Footer from "../../component/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <AnimatePresence mode="wait">
                <Outlet></Outlet>
            </AnimatePresence>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
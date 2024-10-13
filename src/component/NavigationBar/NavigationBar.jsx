import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
const NavigationBar = () => {
    const navigate = useNavigate()
    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        const toggler = document.getElementById('navbar-toggler');

        // Toggle the active class on the navbar
        navbar.classList.toggle('active');

        // Change the icon based on whether the menu is active or not
        if (navbar.classList.contains('active')) {
            toggler.innerHTML = '&#10005;';  // Close icon (X)
        } else {
            toggler.innerHTML = '&#9776;';  // Hamburger icon
        }
    }
    return (
        <div className="sticky top-[-80px] lg:top-[-115px] z-50">
            <div className="bg-[#FFFFFF] flex justify-center z-50">
                <div className=" cursor-pointer" onClick={() => navigate('/')}>
                    <img className="w-[100px] md:w-[150px] lg:w-[150px]" src={logo} alt="" />
                </div>
            </div>
            <div>
                <div className="bg-[#1B1A1A] p-3 text-[14px] flex justify-center">
                    <nav>
                        <div className="navbar">
                            <ul className="navbar-menu">
                                <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#70CBDD]" : "text-white  hover:text-[#70CBDD]"}>HOME</NavLink></li>
                                <li><NavLink to="service" className={({ isActive }) => isActive ? "text-[#70CBDD]" : "text-white hover:text-[#70CBDD]"}>Services</NavLink></li>
                                <li><NavLink to="project" className={({ isActive }) => isActive ? "text-[#70CBDD]" : "text-white  hover:text-[#70CBDD]"}>Projects</NavLink></li>
                                <li><NavLink to="news" className={({ isActive }) => isActive ? "text-[#70CBDD]" : "text-white  hover:text-[#70CBDD]"}>News</NavLink></li>
                                <li><NavLink to="tutorial" className={({ isActive }) => isActive ? "text-[#70CBDD]" : "text-white  hover:text-[#70CBDD]"}>Tutorial</NavLink></li>
                                <li><NavLink to="contact" className={({ isActive }) => isActive ? "text-[#70CBDD]" : "text-white  hover:text-[#70CBDD]"}>Contact</NavLink></li>
                                <li><NavLink to="about" className={({ isActive }) => isActive ? "text-[#70CBDD]" : "text-white  hover:text-[#70CBDD]"}>About</NavLink></li>
                            </ul>
                            <button className="navbar-toggler" id="navbar-toggler" onClick={toggleMenu}>&#9776;</button>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
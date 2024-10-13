import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout/Layout";
import HomePage from "../component/HomePage/HomePage";
import ServicePage from "../component/ServicePage/ServicePage";
import PortfolioPage from "../component/PortfolioPage/PortfolioPage";
import ProjectPost from "../component/ProjectPost/ProjectPost";
import TutorialPost from "../component/TutorialPost/TutorialPost";
import TutorialPage from "../component/TutorialPage/TutorialPage";
import AdminDashboard from "../component/AdminDashboard/AdminDashboard";
import NewsPage from "../component/NewsPage/NewsPage";
import ContactPage from "../component/ContactPage/ContactPage";
import AboutPage from "../component/AboutPage/AboutPage";
import PostNews from "../component/PostNews/PostNews";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },

            {
                path: '/service',
                element: <ServicePage></ServicePage>
            }, {
                path: '/project',
                element: <PortfolioPage></PortfolioPage>
            }, {
                path: "/news",
                element: <NewsPage></NewsPage>
            },
            {
                path: "/tutorial",
                element: <TutorialPage></TutorialPage>
            },
            {
                path: "/contact",
                element: <ContactPage></ContactPage>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            },
            {
                path : "/postproject",
                element : <ProjectPost></ProjectPost>
            },
            {
                path : "/postnews",
                element : <PostNews></PostNews>
            },
            {
                path : '/posttutorial',
                element : <TutorialPost></TutorialPost>
            },
            {
                path : '/helloadmindashboard',
                element : <AdminDashboard></AdminDashboard>
            }
        ]
    }
])

export default router
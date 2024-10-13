import { FileCloud, VideoCamera } from "phosphor-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    document.title = "NextgenFx | Dashboard"
    return (
        <div className="text-white">
            <h1 className="text-4xl text-center py-5">Admin Dashboard</h1>
            <div className="flex justify-center my-5">
                <Link to="/posttutorial">
                    <div className="flex items-center w-[350px] gap-5 border border-white justify-center py-5 px-10 rounded-lg">
                        <VideoCamera size={64} color="#ffffff" />
                        <h1 className="text-2xl">Post Tutorials</h1>
                    </div>
                </Link>
            </div>
            <div className="flex justify-center my-5">
                <Link to="/postproject">
                    <div className="flex w-[350px] items-center gap-5 border border-white justify-center py-5 px-10 rounded-lg">
                        <FileCloud size={64} color="#ffffff" />
                        <h1 className="text-2xl">Post Projects</h1>
                    </div>
                </Link>
            </div>
            <div className="flex justify-center my-5">
                <Link to="/postnews">
                    <div className="flex w-[350px] items-center gap-5 border border-white justify-center py-5 px-10 rounded-lg">
                        <FileCloud size={64} color="#ffffff" />
                        <h1 className="text-2xl">Post News</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
import { LogOutIcon, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            Swal.fire({
                title: "Logged Out",
                text: "You have been logged out successfully.",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                navigate("/");
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: error || "Logout failed.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <header className="w-full bg-gray-900 px-6 py-4 shadow-lg">
            <div className="flex justify-between items-center">
                {/* Logo or Dashboard Title on the left */}
                <div className="flex items-center gap-2">
                    <LayoutDashboard className="w-5 h-5 text-indigo-400" />
                    <div className="text-white font-bold text-lg">Dashboard</div>
                </div>

                {/* Admin Profile in the center */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full">
                        <User size={25} className="text-indigo-500" />
                    </div>
                    <span className="text-gray-300 font-semibold">Wildan</span>
                </div>

                {/* Logout Button on the right */}
                <div className="ml-6">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md"
                    >
                        <LogOutIcon size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;

import { IoAddOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { FaMap } from "react-icons/fa";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";


const Sidebar = () => {
    const { state, dispatch } = useContext(GlobalContext);

    return (
        <div className={`h-screen  w-[20%] flex flex-col ${state.theme === "dark" ? "bg-[#2C2C2C]" : "bg-[#FBFDFC]"} hover:text-[#35793729] px-4 py-6`}>
            {/* User Info */}
            <div className="flex flex-col items-center mb-8">
                <img
                    src="https://images.pexels.com/photos/30180208/pexels-photo-30180208/free-photo-of-woman-stands-by-serene-glacier-lake-in-winter.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt="User Profile"
                    className="rounded-full w-32 h-32 object-cover"
                />
                <h1 className={`text-lg font-bold mt-2 ${state.theme === "dark" ? "text-green-600" : "text-green-600"}`}> Golu Kumar</h1>
            </div>

            {/* Navigation Links */}
            <div className={`${state.theme === "dark" ? "text-white" : "text-black"}`}>
                <ul className=" text-left">
                    <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#35793729] hover:text-[#357937] cursor-pointer">
                        <span><CiViewList />
                        </span> All Tasks
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#35793729] hover:text-[#357937] cursor-pointer">
                        <span><MdOutlineCalendarToday />
                        </span> Today
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#35793729] hover:text-[#357937] cursor-pointer">
                        <span><FaRegStar />
                        </span> Important
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#35793729] hover:text-[#357937] cursor-pointer">
                        <span><FaMap />
                        </span> Planned
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md hover:bg-[#35793729] hover:text-[#357937] cursor-pointer">
                        <span><MdOutlineAssignmentInd />
                        </span> Assigned to me
                    </li>
                </ul>
            </div>

            {/* Add List Section */}
            <div className={`flex rounded-md justify-center items-center gap-6 mt-4 h-20 cursor-pointer hover:text-[#357937] ${state.theme === "dark" ? "bg-[#242424] text-white" : "bg-[#FBFDFC] text-black"}`}>
                <IoAddOutline className="text-xl" />
                <p className="font-semibold">Add List</p>
            </div>

            {/* Today Tasks Section */}
            <div className="mt-4 ">
                <h2 className={`font-semibold mb-4 ${state.theme === "dark" ? "text-white" : "text-black"}`}>Today Tasks</h2>
                <div className="flex justify-center">
                    <img
                        src={state.theme === "dark" ? "./darkdonegraph.png" : "./donegraph.png"}
                        alt="Pie chart representing task completion"
                        className="w-52 h-52 rounded-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;


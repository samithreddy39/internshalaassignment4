// src/Pages/Home.jsx
import React, { useState, useContext } from "react";
import Navbar from "../Components/Navbar.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import Todos from "../Components/Todos.jsx";
import TodoDetails from "../Components/TodoDetails.jsx";
import { GlobalContext } from "../Context/GlobalState.jsx";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const isLoggedIn = state.isAuthenticated;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // State to manage the selected todo
  const [selectedTodo, setSelectedTodo] = useState(null);

  // Function to handle selecting a todo
  const handleSelectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  // Function to handle closing the TodoDetails
  const handleCloseDetails = () => {
    setSelectedTodo(null);
  };

  // Function to toggle sidebar (optional, based on your UI needs)
  const handleToggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <div
      className={`${
        state.theme === "dark" ? "bg-[#242424] text-white" : "bg-[#FBFDFC] text-black"
      } w-full min-h-screen overflow-y-visible pointer-events-auto`}
    >
      <Navbar />
      <div className="flex">
        {state.isSidebarVisible && <Sidebar className="px-10" />}
        <div className="flex-1 relative">
          <Todos onSelectTodo={handleSelectTodo} />
          {/* Conditionally render TodoDetails */}
          {selectedTodo && (
            <TodoDetails todo={selectedTodo} onClose={handleCloseDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

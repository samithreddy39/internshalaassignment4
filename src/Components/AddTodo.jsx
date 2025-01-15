import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddToDo = () => {
    const [task, setTask] = useState("");
    const { dispatch } = useContext(GlobalContext);

    const handleAddTask = () => {
        if (task.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            task,
            completed: false,
        };
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setTask(""); // Clear input field after adding
    };

    return (
        <div className="p-4 flex flex-col gap-4 bg-[#F9FAFB] rounded-md shadow-md">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add A Task"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#357937]"
            />
            <button
                onClick={handleAddTask}
                className="bg-[#357937] text-white px-4 py-2 rounded-md hover:bg-[#285928] transition"
            >
                Add Task
            </button>
        </div>
    );
};

export default AddToDo;

// src/Components/TodoDetails.jsx
import React, { useState, useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdAdd, MdAlarm, MdCalendarToday, MdRepeat, MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { GlobalContext } from "../Context/GlobalState";

const TodoDetails = ({ todo, onClose }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [important, setImportant] = useState(todo.important || false);
  const [dueDate, setDueDate] = useState(todo.date !== "No Date" ? todo.date : null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event) => {
    const selected = event.target.value;
    setDueDate(selected);
    setShowDatePicker(false);
    // Optionally, update the todo in the global state
    dispatch({ type: "UPDATE_TODO_DUE_DATE", payload: { id: todo.id, dueDate: selected } });
  };

  const handleToggleImportant = () => {
    setImportant(!important);
    dispatch({ type: "TOGGLE_IMPORTANT", payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: "REMOVE_TODO", payload: todo.id });
    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full p-6 ${
        state.theme === "dark" ? "bg-gray-800 text-white" : "bg-[#EEF6EF]"
      } border-l ${
        state.theme === "dark" ? "border-gray-700" : "border-gray-200"
      } rounded-lg shadow-lg z-50 overflow-y-auto transition-colors duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">{todo.task}</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Close Task Details"
        >
          <AiOutlineClose size={24} />
        </button>
      </div>

      {/* Task Actions */}
      <ul className="space-y-6">
        {/* Add Step */}
        <li className="flex items-center">
          <MdAdd className={`text-gray-500 w-6 h-6 mr-4 ${state.theme === "dark" ? "text-gray-300" : ""}`} />
          <span className="text-base font-medium cursor-pointer hover:text-gray-900">
            Add Step
          </span>
        </li>

        {/* Set Reminder */}
        <li className="flex items-center">
          <MdAlarm className={`text-gray-500 w-6 h-6 mr-4 ${state.theme === "dark" ? "text-gray-300" : ""}`} />
          <span className="text-base font-medium cursor-pointer hover:text-gray-900">
            Set Reminder
          </span>
        </li>

        {/* Add Due Date */}
        <li>
          <div
            className="flex items-center cursor-pointer hover:text-gray-900"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            <MdCalendarToday className={`text-gray-500 w-6 h-6 mr-4 ${state.theme === "dark" ? "text-gray-300" : ""}`} />
            <span className="text-base font-medium">Add Due Date</span>
          </div>
          {showDatePicker && (
            <div
              className={`mt-4 p-4 rounded-lg shadow-md ${
                state.theme === "dark" ? "bg-gray-700" : "bg-white"
              }`}
            >
              <input
                type="date"
                className={`text-sm border rounded-md p-2 w-full ${
                  state.theme === "dark"
                    ? "bg-gray-600 text-white border-gray-500"
                    : "bg-transparent text-gray-700 border-gray-300"
                }`}
                onChange={handleDateChange}
                value={dueDate || ""}
              />
              <div className="flex justify-end mt-2 space-x-4">
                <button
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                  onClick={() => setShowDatePicker(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-green-600 hover:text-green-800 text-sm font-medium"
                  onClick={() => {
                    // Optionally handle OK action
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </li>

        {/* Repeat */}
        <li className="flex items-center">
          <MdRepeat className={`text-gray-500 w-6 h-6 mr-4 ${state.theme === "dark" ? "text-gray-300" : ""}`} />
          <span className="text-base font-medium cursor-pointer hover:text-gray-900">
            Repeat
          </span>
        </li>

        {/* Add Notes */}
        <li className="flex items-center">
          <MdAdd className={`text-gray-500 w-6 h-6 mr-4 ${state.theme === "dark" ? "text-gray-300" : ""}`} />
          <span className="text-base font-medium cursor-pointer hover:text-gray-900">
            Add Notes
          </span>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-12 flex justify-between items-center text-sm border-t pt-4">
        <span className="text-gray-500">
          {new Date().toLocaleDateString(undefined, { month: "long", day: "numeric" })}
        </span>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleToggleImportant}
            className="text-gray-400 hover:text-yellow-500 focus:outline-none"
            aria-label={important ? "Mark as not important" : "Mark as important"}
          >
            {important ? <FaStar className="text-yellow-500" size={20} /> : <FaRegStar size={20} />}
          </button>
          <button
            onClick={handleDelete}
            className="text-gray-400 hover:text-red-500 focus:outline-none"
            aria-label="Delete Task"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;

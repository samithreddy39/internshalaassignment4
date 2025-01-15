import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const DisplayTodo = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const handleToggleComplete = (id) => {
        dispatch({ type: "TOGGLE_COMPLETE", payload: id });
    };

    return (
        <div className="p-4 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">To-Do</h2>
            <ul className="flex flex-col gap-3">
                {state.todos
                    .filter((todo) => !todo.completed)
                    .map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between bg-[#F9FAFB] p-2 border rounded-md"
                        >
                            <span>{todo.task}</span>
                            <input
                                type="checkbox"
                                onChange={() => handleToggleComplete(todo.id)}
                                className="cursor-pointer"
                            />
                        </li>
                    ))}
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-4">Completed</h2>
            <ul className="flex flex-col gap-3">
                {state.todos
                    .filter((todo) => todo.completed)
                    .map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between bg-[#E9F7EF] p-2 border rounded-md"
                        >
                            <span className="line-through">{todo.task}</span>
                            <button
                                onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default DisplayTodo;

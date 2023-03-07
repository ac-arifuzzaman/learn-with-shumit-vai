import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

const numberOfTodos = (no_of_task) => {
  switch (no_of_task) {
    case 0:
      return "No task";
    case 1:
      return "1 task left";

    default:
      return `${no_of_task} tasks left`;
  }
};

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const remainingTask = todos.filter((todo) => !todo.completed).length;
  const { status, colors } = filter;

  const handleStatusChanged = (statas) => {
    dispatch(statusChanged(statas));
  };

  const handleColorSelected = (rong) => {
    if (colors.includes(rong)) {
      dispatch(colorChanged(rong, "removed"));
    } else {
      dispatch(colorChanged(rong, "added"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(remainingTask)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatusChanged("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatusChanged("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChanged("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorSelected("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorSelected("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer bg-yellow-500 ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorSelected("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;

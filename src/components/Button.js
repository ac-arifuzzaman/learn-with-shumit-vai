import React from "react";

const Button = ({ children, handler }) => {
  return (
    <div
      onClick={handler}
      class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
    >
      {children}
    </div>
  );
};

export default Button;

import React from "react";

const EmptyTodo = ({ onEmpty, text }) => {
  return (
    <button className="todo-remove-btn" onClick={onEmpty}>
      {text}
    </button>
  );
};

export default EmptyTodo;

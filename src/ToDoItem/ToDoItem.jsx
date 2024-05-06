import React from "react";

const ToDoItem = ({ item, completeTheTodo, status }) => {
  return (
    <li onClick={completeTheTodo} className={status ? "completed" : ""}>
      {item}
    </li>
  );
};

export default ToDoItem;

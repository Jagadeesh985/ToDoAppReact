import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = () => {
  const toDoItems = [
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower",
  ];
  return (
    <ol className="todo-list">
      {toDoItems.length > 0 ? (
        toDoItems.map((item, index) => {
          return <ToDoItem item={item} />;
        })
      ) : (
        <>Nothing to do buddy. Sleep!!</>
      )}
    </ol>
  );
};

export default ToDoList;

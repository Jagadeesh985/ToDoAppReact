import React, { useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import EmptyTodo from "../EmptyTodo/EmptyTodo";

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower",
  ]);
  const emptyToDo = () => {
    setToDoItems([]);
  };
  return (
    <>
      {toDoItems.length > 0 ? (
        <>
          <ol className="todo-list">
            {toDoItems.map((item, index) => {
              return <ToDoItem item={item} />;
            })}
          </ol>
          <EmptyTodo onEmpty={emptyToDo} />
        </>
      ) : (
        <i>Nothing to do buddy. Sleep!</i>
      )}
    </>
  );
};

export default ToDoList;

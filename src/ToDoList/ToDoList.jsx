import React, { useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import EmptyTodo from "../EmptyTodo/EmptyTodo";
import "./todolist.css";

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([
    { id: 0, taskDescription: "Read SpringBoot", completed: false },
    { id: 1, taskDescription: "Complete Assignments", completed: false },
    { id: 2, taskDescription: "Prepare breakfast", completed: false },
    { id: 3, taskDescription: "Sleep for 2 hours", completed: false },
    { id: 4, taskDescription: "Take a shower", completed: false },
  ]);
  const [someTasksCompleted, setSomeTasksCompleted] = useState(false);
  const removeCompletedTaks = () => {
    const newToDoList = toDoItems.filter((item) => {
      if (!item.completed) return item;
    });
    const checkSomeTasksCompleted = newToDoList.some((item) => item.completed);
    setSomeTasksCompleted(checkSomeTasksCompleted);

    setToDoItems(newToDoList);
  };

  const completeTheTodo = (id) => {
    const newToDoList = toDoItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    const checkSomeTasksCompleted = newToDoList.some((item) => item.completed);
    setToDoItems(newToDoList);
    setSomeTasksCompleted(checkSomeTasksCompleted);
  };

  const getToDoItems = () => {
    return toDoItems.map((item) => {
      return (
        <ToDoItem
          item={item.taskDescription}
          key={item.id}
          completeTheTodo={() => completeTheTodo(item.id)}
          status={item.completed}
        />
      );
    });
  };
  const emptyToDo = () => {
    setToDoItems([]);
  };

  return (
    <div className="todo-list">
      {toDoItems.length > 0 ? (
        <>
          <ol>{getToDoItems()}</ol>
          <EmptyTodo
            onEmpty={someTasksCompleted ? removeCompletedTaks : emptyToDo}
            text={someTasksCompleted ? "Remove Completed" : "Empty"}
          />
        </>
      ) : (
        <i>Nothing to do buddy. Sleep!</i>
      )}
    </div>
  );
};

export default ToDoList;

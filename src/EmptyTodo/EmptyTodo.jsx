import React from "react";

const EmptyTodo = ({ onEmpty }) => {
  return <button onClick={onEmpty}>Empty</button>;
};

export default EmptyTodo;

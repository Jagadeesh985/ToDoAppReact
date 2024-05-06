import Header from "./Header/Header";
import ToDoList from "./ToDoList/ToDoList";
import "./styles.css";

export default function App() {
  return (
    <div className="Application">
      <Header />
      <ToDoList />
    </div>
  );
}

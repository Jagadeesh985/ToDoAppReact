import SubHeader from "./SubHeader/SubHeader";
import "./header.css";

export default function Header() {
  return (
    <header className="Header">
      <h1>ToDo App</h1>
      <SubHeader />
    </header>
  );
}

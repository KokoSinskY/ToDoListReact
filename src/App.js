import "./App.css";
import Header from "./components/Header/Header";
import TasksContainer from "./components/tasksContainer/TasksContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <TasksContainer />
    </div>
  );
}

export default App;

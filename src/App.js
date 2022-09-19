import "./App.css";
import Header from "./components/Header/Header";
import Grid from "@mui/material/Grid";
import TasksContainer from "./components/tasksContainer/TasksContainer";
import "@fontsource/roboto/400.css";
import TasksContainerTest from "./components/tasksContainer/TasksContainerTest";

function App() {
  return (
    <div className="App">
      <Grid>
        <Header />
        <Grid spacing={5} alignItems="center" justify="center" container>
          <TasksContainer />
          <TasksContainerTest />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

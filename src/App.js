import "./App.css";
import Header from "./components/Header/Header";
import Grid from "@mui/material/Grid";
import TasksContainer from "./components/tasksContainer/TasksContainer";
import "@fontsource/roboto/500.css";
import TasksContainerTest from "./components/tasksContainer/TasksContainerTest";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Grid>
        <Header />
        <Grid container>
          <Grid xs={12} md={6} lg={6}>
            <TasksContainer />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <TasksContainerTest />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

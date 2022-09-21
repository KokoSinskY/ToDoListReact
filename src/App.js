import "./App.css";
import Header from "./components/Header/Header";
import Grid from "@mui/material/Grid";
import PaperContainer from "./components/PaperContainer/PaperContainer";
import "@fontsource/roboto/700.css";
import TasksContainerTest from "./components/PaperContainer/TasksContainerTest";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <PaperContainer>
        <TasksContainerTest />
      </PaperContainer>
    </div>
  );
}

export default App;

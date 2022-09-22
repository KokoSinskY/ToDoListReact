import "./App.css";
import Header from "./components/Header/Header";
import Grid from "@mui/material/Grid";
import PaperContainer from "./components/MainContainer/MainContainer";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <PaperContainer />
    </div>
  );
}

export default App;

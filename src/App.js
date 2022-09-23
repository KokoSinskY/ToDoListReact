import "./App.css";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;

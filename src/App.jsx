import Intro from "./components/Intro";
//import GitHubChart from "./components/GitHubChart";
import GitHubChart from "./components/GitHubChart"
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Intro />
      <GitHubChart />
      <Projects />
    </div>
  );
}

export default App;

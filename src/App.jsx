import Intro from "./components/Intro";
import GitHubChart from "./components/GitHubChart";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Intro />

      <div className="content">
        <GitHubChart />
        <Projects />
      </div>
    </div>
  );
}

export default App;

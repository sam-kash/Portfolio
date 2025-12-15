import Intro from "./components/Intro";
import GitHubChart from "./components/GitHubChart";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Intro />

      <div className="content">
        <GitHubChart />
        <Projects />
        <WorkExperience />
      </div>

      <Footer /> {/* 👈 social links live here */}
    </div>
  );
}

export default App;

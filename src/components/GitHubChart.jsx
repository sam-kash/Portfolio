import { GitHubCalendar } from "react-github-calendar";

export default function GitHubChart() {
  return (
    <div className="github-chart">
      <h2>GitHub Activity</h2>

      <GitHubCalendar
        username="sam-kash"
        blockSize={14}
        blockMargin={4}
        fontSize={14}
        colorScheme="dark"
      />

      <p className="proof-text">Proof of work</p>
    </div>
  );
}

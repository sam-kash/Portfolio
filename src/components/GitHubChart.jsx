export default function GitHubChart() {
  return (
    <div className="github-chart">
      <h2>GitHub Activity</h2>

      <div className="chart-wrapper">
        <img
          src="https://ghchart.rshah.org/39d353/sam-kash"
          alt="GitHub contribution chart"
        />

        <div className="chart-footer">
          <span>Contributions in the last year</span>

          <div className="legend">
            <span>Less</span>
            <div className="boxes">
              <span className="l0" />
              <span className="l1" />
              <span className="l2" />
              <span className="l3" />
              <span className="l4" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      <p className="proof-text">Proof of work</p>
    </div>
  );
}

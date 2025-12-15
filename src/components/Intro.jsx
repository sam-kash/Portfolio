export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-text">
        <h1>Sankalpa Kashyap</h1>
        <p>Full Stack Developer | DevOps | Cloud Services</p>
        <p>I add value to systems via code and ideas</p>

        {/* Resume link */}
<a
  href={`${import.meta.env.BASE_URL}Resume_main.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="resume-link"
>
  Resume →
</a>

      </div>

      <div className="pfp-wrapper">
       <img
          src={`${import.meta.env.BASE_URL}board.jpg`}
          alt="profile"
           className="pfp"
/>
      </div>
    </div>
  );
}

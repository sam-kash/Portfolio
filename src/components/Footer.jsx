export default function Footer() {
  return (
    <footer className="footer">
      {/* GitHub */}
      <a
        href="https://github.com/sam-kash"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            fill="currentColor"
            d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8-.7 2.2-1.1.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.1-3.2-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.1-.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.9 1.1 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z"
          />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sankalpakashyap"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            fill="currentColor"
            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4zM8.5 8h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.7 2.6 4.7 6v10h-4v-9c0-2.1 0-4.8-3-4.8-3 0-3.5 2.3-3.5 4.6v9.2h-4z"
          />
        </svg>
      </a>

      {/* X / Twitter */}
      <a
        href="https://x.com/Sankalpa_dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
      >
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            fill="currentColor"
            d="M18.3 2H21l-6.6 7.6L22 22h-6.5l-5-6.5L4.9 22H2l7.1-8.2L2 2h6.6l4.5 5.9L18.3 2z"
          />
        </svg>
      </a>

      {/* Email */}
      <a href="sankalpanhce@gmail.com" aria-label="Email">
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            fill="currentColor"
            d="M2 4h20v16H2zM4 6l8 5 8-5"
          />
        </svg>
      </a>
    </footer>
  );
}

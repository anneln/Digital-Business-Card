import githubicon from "../assets/GitHubIcon.png";
import instaicon from "../assets/instaIcon.png";

export default function Footer() {
  return (
    <footer>
      <ul className="social-list">
        <li>
          <a
            href="https://github.com/anneln"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github" src={githubicon} alt="github icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ahbricet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="insta" src={instaicon} alt="Instagram icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

import ahbpict from "../assets/ahb-square.jpg";

export default function Header() {
  return (
    <header>
      <img
        src={ahbpict}
        alt="Anne-Hélène Bricet picture"
        className="img-profile"
      />
      <div className="infos">
        <h1 className="name">Anne-Hélène Bricet</h1>
        <h4 className="role">Frontend Developer</h4>
        <a
          className="website"
          href="https://portfolio-anne-helene.netlify.app/"
          target="_blank"
        >
          Portfolio
        </a>
        <a
          className="linkedin-btn"
          href="https://www.linkedin.com/in/annehelenebricet"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </header>
  );
}

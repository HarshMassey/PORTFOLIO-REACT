import logo from "../assets/lg.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="m-2 w-10" src={logo} alt="logo" width="60" height="50" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/harshmassey/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/HarshMassey" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/harsh_massey_/" target="_blank">
        <FaInstagram />
      </a>
      
      <a href="mailto:harshmassey84@gmail.com" target="_blank" rel="noopener noreferrer">
        <TfiEmail />
      </a>
    </div>
  </nav>
}

export default Navbar;
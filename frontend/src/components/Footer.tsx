import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-6 md:px-12 xl:px-20 2xl:px-32">
        <div className="text-left">
          <p className="font-semibold text-xs">Kevin Truong</p>
          <p className="font-semibold text-xs">Built with React and Django</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/SignatureKT" className="icon-social">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/kevintruong97/" className="icon-social">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:kevin@visualraindrop.com" className="icon-social">
            <IoIosMail size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
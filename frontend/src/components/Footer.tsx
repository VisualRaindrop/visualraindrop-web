import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer () {
    return (
        <footer>
            <div className={'flex m-2'}>
                <div className={'flex-col text-left flex-1'}>
                    <p className={'font-semibold text-xs'}>Kevin Truong</p>
                    <p className={'font-semibold text-xs'}>Built with React and Django</p>
                </div>
                <div className={'flex gap-2 w-1/4'}>
                    <a href={'https://github.com/SignatureKT'} className={'icon-social'}>
                        <FaGithub size={30}/>
                    </a>
                    <a href={'https://www.linkedin.com/in/kevintruong97/'} className={'icon-social'}>
                        <FaLinkedin size={30}/>
                    </a>
                    <a href={'mailto:kevin@visualraindrop.com'} className={'icon-social'}>
                        <IoIosMail size={30}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
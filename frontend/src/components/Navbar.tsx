import ThemeToggle from "./Theme_Switch";
import {useState} from "react";
import {NavLink} from "react-router";
import {HashLink} from 'react-router-hash-link';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);

    return (
        <nav className={'w-full fixed z-50 top-0 px-6 backdrop-blur-lg md:px-12 xl:px-20 2xl:px-32 pt-6 pb-6 border-b'}>
            <div className={'flex items-center justify-between'}>
                <NavLink to={'/'}>
                    <div className={'-ml-2 md:-ml-8 xl:-ml-16 2xl:-ml-28 text-3xl tracking-tight'}>VisualRaindrop</div>
                </NavLink>
                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    <NavLink to={"/"} className={"text-lg font-semibold hover:text-purple-500"}>Home</NavLink>
                    <div className="relative group">
                        <NavLink to={'/project'}
                                 className="flex items-center text-lg font-semibold gap-2 cursor-pointer bg-transparent py-2">
                            Projects
                            <svg className="transition-transform group-hover:rotate-180" width="10" height="6"
                                 viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m1 1 4 4 4-4" stroke="#71717b" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </NavLink>
                        <div
                            className="absolute top-full left-0 mt-1 w-44 bg-purple-900 border-2 border-purple-500 rounded-xl shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <HashLink
                                smooth
                                to="/project#JPL_Introduction"
                                className="block px-4 py-2 text-sm hover:text-white hover:bg-purple-500"
                            >Lunar Detection Pipeline
                            </HashLink>
                            <HashLink
                                smooth
                                to="/project#Web_Introduction"
                                className="block px-4 py-2 text-sm hover:text-white hover:bg-purple-500"
                            >Full Stack Website
                            </HashLink>
                        </div>
                    </div>
                    <NavLink to="/contact" className="text-lg font-semibold hover:text-purple-500">Contact</NavLink>
                    <ThemeToggle/>
                </div>
                {/* Mobile Nav */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={'md:hidden text-2xl text-(--text-h)'}
                    aria-label={'Toggle Menu'}>
                    {menuOpen ? '×' : '☰'}
                </button>
            </div>
            {menuOpen && (
                <div className={'md:hidden mt-4 flex flex-col gap-4'}>
                    <NavLink to="/" className="text-lg font-semibold hover:text-purple-500">Home</NavLink>
                    <div className={'flex flex-col gap-2'}>
                        <button
                            type="button"
                            onClick={() => setProjectsOpen(!projectsOpen)}
                            className={'flex items-center gap-2 py-2 text-lg font-semibold hover:text-purple-500'}
                            aria-expanded={projectsOpen}
                        >
                            Projects
                            <svg
                                className={`mt-0.5 transition-transform ${projectsOpen ? 'rotate-180' : ''}`}
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m1 1 4 4 4-4" stroke="#71717b" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </button>

                        {projectsOpen && (
                            <div className="flex flex-col">
                                <HashLink
                                    smooth
                                    to="/project#JPL_Introduction"
                                    className="block px-4 py-2 text-sm hover:text-white hover:bg-purple-500"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Lunar Detection Pipeline
                                </HashLink>
                                <HashLink
                                    smooth
                                    to="/project#Web_Introduction"
                                    className="block px-4 py-2 text-sm hover:text-white hover:bg-purple-500"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Full Stack Website
                                </HashLink>
                            </div>
                        )}
                    </div>
                    <NavLink to="/contact" className="text-lg font-semibold hover:text-purple-500">Contact</NavLink>
                    <ThemeToggle/>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
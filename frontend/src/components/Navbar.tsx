import ThemeToggle from "./Theme_Switch";
import { useState } from "react";
import { NavLink } from "react-router";

function Navbar () {
    const [isOpened, setIsOpened] = useState(false);

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Project', href: '/Project' },
    ]
    return (
        <nav className={'w-full fixed z-50 top-0 px-6 backdrop-blur-lg md:px-12 xl:px-20 2xl:px-32 pt-6 pb-6 border-b'}>
            <div className={'flex items-center justify-between'}>
                <NavLink to={'/'}>
                    <div className={'-ml-2 md:-ml-8 xl:-ml-16 2xl:-ml-28 text-3xl tracking-tight'}>VisualRaindrop</div>
                </NavLink>
                {/* Desktop Nav */}
                <div className={'hidden md:flex gap-8 items-center'}>
                    {links.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className={'text-lg font-semibold hover:text-purple-500'}>
                            {link.label}
                        </NavLink>
                        ))}
                    <ThemeToggle/>
                </div>
                {/* Mobile Nav */}
                <button
                    onClick={() => setIsOpened(!isOpened)}
                    className={'md:hidden text-2xl text-(--text-h)'}
                    aria-label={'Toggle Menu'}>
                    {isOpened ? '×' : '☰'}
                </button>
            </div>

            {isOpened && (
                <div className={'md:hidden mt-4 flex flex-col gap-4'}>
                    {links.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className={'block py-2 text-lg font-semibold hover:text-purple-500'}
                            onClick={() => setIsOpened(false)}>
                            {link.label}
                        </NavLink>
                    ))}
                    <ThemeToggle />
                </div>
            )}
        </nav>
    )
}

export default Navbar;
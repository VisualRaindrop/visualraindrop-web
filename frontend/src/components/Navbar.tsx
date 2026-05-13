import {NavLink} from "react-router"

function Navbar () {
    return (
        <nav className={'w-full px-6 md:px-12 xl:px-20 2xl:px-32 pt-6 pb-6 border-b'}>
            <div className={'flex items-center justify-between'}>
                <div className={'-ml-2 md:-ml-8 xl:-ml-16 2xl:-ml-28 text-3xl font-bold tracking-tight'}>VisualRaindrop</div>
                    <div className={'flex items-center gap-10 text-sm font-semibold tracking-tight'}>
                        <NavLink to={'/'} className={'hover:text-purple-500'}>Home</NavLink>
                        <NavLink to={'/projects'} className={'hover:text-purple-500'}>Projects</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
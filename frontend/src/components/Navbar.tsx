import {NavLink} from "react-router"

function Navbar () {
    return (
        <nav className={'border-b'}>
            <div className={'mx-auto flex max-w-7xl items-center justify-between px-8 py-4'}>
            <div className={'text-3xl font-bold tracking-tight'}>VisualRaindrop</div>
                <div className={'flex items-center gap-10 text-sm font-semibold tracking-tight'}>
                    <NavLink to={'#home'} className={'hover:text-purple-500'}>Home</NavLink>
                    <NavLink to={'#about'} className={'hover:text-purple-500'}>About</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
import Introduction from "../sections/Introduction";
import About from "../sections/About";
import Resume from "../sections/Resume";

function Home() {
    return (
        <main className={'mx-auto max-w-7xl px-16 py-4'}>
            <div className={'flex flex-col text-left'}>
                <Introduction />
                <About />
                <Resume />
            </div>
        </main>
    )
}

export default Home;
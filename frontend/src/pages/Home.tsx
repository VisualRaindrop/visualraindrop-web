import Introduction from "../sections/Introduction";
import About from "../sections/About";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";

function Home() {
    return (
        <main id={'Home'} className={'w-full px-6 md:px-12 xl:px-20 2xl:px-32 py-4'}>
            <div className={'flex flex-col text-left'}>
                <Introduction />
                <About />
                <Resume />
                <Contact />
            </div>
        </main>
    )
}

export default Home;
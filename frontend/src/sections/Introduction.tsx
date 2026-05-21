import '../styles/Introduction.css'

function Introduction() {
    return (
        <section id='introduction' className={'min-h-screen flex flex-col justify-center'}>
            <h1 className={'font-light text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'}>Kevin Truong</h1>
            <p className={'mt-4 text-sm md:text-base xl:text-lg 2xl:text-xl text-black/60 dark:text-white/60'}>Full Stack Developer</p>
        </section>
    )
}

export default Introduction;
function Web_Architecture() {
    return (
        <section id={'Web_Architecture'} className={'scroll-mt-28 py-20 md:py-28'}>
            <h2 className={'text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center pb-8'}>Web Architecture</h2>
            <div className={'flex flex-row justify-evenly items-left gap-4 w-full'}>
                <img src={'/website-architecture.png'} alt={'website architecture'} className={'w-1/4 md:w-1/5'}/>
                <div className={'flex flex-col justify-start items-left gap-4 w-1/2 md:w-1/3'}>
                    <p>
                        The website is built using React and Django, with a PostgresSQL database for persistent storage.
                        The frontend is styled using Tailwind CSS, and the backend is powered by RestAPI. The website is
                        deployed on a Docker container, and Nginx serves as a reverse proxy with Cloudflare.
                    </p>
                    <p>
                        The website repository is hosted on GitHub, and the CI/CD pipeline is managed by GitHub Actions.
                        A quick check is performed on every push on feature branches. An integration test is run on
                        every pull requests to the main branch. After merging, the integration test runs again, and deployment
                        is triggered if the test passes where docker compose builds and deploy the website.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Web_Architecture;
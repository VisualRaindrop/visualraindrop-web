function Web_Architecture() {
    return (
        <section id={'Web_Architecture'} className={'scroll-mt-28 py-20 md:py-28'}>
            <h2 className={'text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center pb-8'}>Web Architecture</h2>
            <div className={'flex flex-row justify-evenly items-start gap-4 w-full'}>
                <img src={'/website-architecture.png'} alt={'website architecture'} className={'w-1/4 md:w-1/5'}/>
                <div className={'flex flex-col justify-start items-start gap-4 w-1/2 md:w-1/3'}>
                    <p>
                        The website is built using React/TypeScript for the frontend, Django REST API backend,
                        and PostgresSQL database for persistent storage. The frontend is styled using Tailwind CSS.
                        Everything is ran inside a Dockerized development environment.
                    </p>
                    <p>
                        The website repository is hosted on GitHub, and the CI/CD pipeline is managed by GitHub Actions.
                        A quick check is performed on every push on feature branches. An integration test is run on
                        every pull requests to the main branch. After merging, the integration test runs again, and deployment
                        is triggered if the test passes where docker compose builds and deploy the website.
                    </p>
                    <h3 className={'text-xl md:text-lg'}>Challenges</h3>
                    <p>
                        One of the main challenges creating the website is making sure that all cases were covered.
                        It was important to testing the website with different sizes of screens and on mobile devices.
                        Light and dark modes were also tested to make sure the website is functional properly.
                        The Navigation was overcrowding on smaller devices, so a hamburger menu was implemented.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Web_Architecture;
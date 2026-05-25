function Project_Cards() {

    return (
        <section id={'Project_Cards'} className={'flex flex-col justify-center scroll-mt-28 py-20 md:py-28'}>
            <h2 className={'text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center gap-4'}>Projects</h2>
            <div className={'flex flex-row justify-evenly items-center w-full gap-4 pt-4'}>
                <div className="basis-1/2 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <h4 className="text-xl font-semibold text-[var(--text-h)]">
                        Lunar Detector Pipeline
                    </h4>
                    <p className="mt-3 text-[var(--text)] leading-relaxed">
                        A pipeline for detecting lunar surface features using lunar images with geolocation.
                    </p>
                </div>
                <div className="basis-1/2 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <h4 className="text-xl font-semibold text-[var(--text-h)]">
                        Full Stack Website
                    </h4>
                    <p className="mt-3 text-[var(--text)] leading-relaxed">
                        A Full Stack Website using React, Django, and PostgresSQL.
                        Deployed on Docker and Nginx.
                        CI/CD pipeline using GitHub Actions.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Project_Cards;
function JPL_Goals() {
    return (
        <section className={'scroll-mt-28'}>
            <div className={'flex flex-row justify-center w-full gap-4'}>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    <div
                        className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <h4 className="text-xl font-semibold text-[var(--text-h)]">
                            Image Processing
                        </h4>
                        <p className="mt-3 text-[var(--text)] leading-relaxed">
                            Split LROC lunar images into usable tiles while preserving geospatial context
                            such as coordinates, raster data, and image metadata
                        </p>
                    </div>
                    <div
                        className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <h4 className="text-xl font-semibold text-[var(--text-h)]">
                            Feature Detection
                        </h4>

                        <p className="mt-3 text-[var(--text)] leading-relaxed">
                            Identify and classify lunar surface features such as craters, pits, and rocks using trained
                            computer vision models
                        </p>
                    </div>

                    <div
                        className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <h4 className="text-xl font-semibold text-[var(--text-h)]">
                            Geolocation
                        </h4>
                        <p className="mt-3 text-[var(--text)] leading-relaxed">
                            Convert detections from bounding boxes to lunar latitude/longitude coordinates

                        </p>
                    </div>
                </div>
            </div>
            <img src={'/lunar-surface-images.png'} alt={'lunar surface features'} className={'w-1/2 md:w-1/3 mx-auto mt-10 md:mt-20'}/>
        </section>
    )
}

export default JPL_Goals;
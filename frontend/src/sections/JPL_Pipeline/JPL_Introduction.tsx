function JPL_Introduction() {
    return (
        <section id={'JPL_Introduction'} className={'min-h-screen flex flex-col justify-center scroll-mt-28 font-bold'}>
            <div className={'flex flex-col justify-center items-center w-full gap-4'}>
                <h2 className={'text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl'}>Lunar Detection Pipeline</h2>
                <p>Vision models for lunar surface feature detection using lunar images with geolocation</p>
                <img src={'/craters-detection.png'} alt={'craters detected'} className={'w-1/2 md:w-1/3'}/>
            </div>
        </section>
    )
}

export default JPL_Introduction;
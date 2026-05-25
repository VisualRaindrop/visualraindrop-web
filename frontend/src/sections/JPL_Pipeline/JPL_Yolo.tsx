function JPL_Yolo() {
    return (
        <section id={'JPL_Yolo'} className={'min-h-screen scroll-mt-28 w-full py-20 md:py-28'}>
            <h3 className={'text-xl md:text-2xl xl:text-3xl 2xl:text-4xl pb-4 text-center'}>YOLOv11x Training Performance</h3>
            <div className={'flex flex-col lg:flex-col items-center gap-10'}>
                <div className={'flex flex-col gap-2'}>
                    <p>Craters and pits detection are strong in YOLO11x reaching 63.0% test mAP@50 overall</p>
                </div>
                <div className={'flex flex-col gap-2 w-full md:flex-row justify-center items-center'}>
                    <img src={'/yolo-detect-image.png'} alt={'yolo detecting lunar craters'} className={'w-1/2 md:w-1/3'}/>
                    <div className="bg-[var(--card)]">
                        <img src={'/yolo-results.svg'} alt={'yolo results'} className={'w-1/2 md:w-full'}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JPL_Yolo;
function JPL_Pipeline() {
    return (
        <section id={'JPL_Pipeline'} className={'scroll-mt-28'}>
            <h3 className={'text-xl md:text-2xl xl:text-3xl 2xl:text-4xl'}>Architecture Pipeline</h3>
            <p className={'max-w-3xl w-full text-left pt-4'}>
                Raw LROC images are converted into tiles, annotated, trained,
                and mapped back into lunar coordinates.
            </p>
            <img src={'/architecture-pipeline.svg'} alt={'architecture'} className={'w-full h-auto'}/>
        </section>
    );
}


export default JPL_Pipeline;
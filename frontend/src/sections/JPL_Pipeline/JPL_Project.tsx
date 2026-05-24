function JPL_Project() {
    return (
        <section id={'JPL_Project'} className={'scroll-mt-28 w-full'}>
            <div className={'flex flex-col justify-center items-left w-full gap-4'}>
                <ul className={'flex flex-col gap-2 text-left w-full list-disc list-inside text-sm md:text-base xl:text-lg 2xl:text-xl'}>
                    <li>Tiling and process lunar images and built inference pipeline</li>
                    <li>Analyze model performance and dataset limitations</li>
                    <li>Evaluate YOLO and Detectron2 detection performance</li>
                    <li>Investigate class imbalance, annotation ambiguity, and feature separability</li>
                </ul>
            </div>
        </section>
    )
}

export default JPL_Project;
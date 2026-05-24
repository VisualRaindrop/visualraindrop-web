import Section_Test from "../sections/Section_Test";
import JPL_Pipeline from "../sections/JPL_Pipeline";
import Full_Stack_Website from "../sections/Full_Stack_Website";

function Project() {
    return (
        <main id={'Project'} className={'w-full px-6 md:px-12 xl:px-20 2xl:px-32 py-4'}>
            <div className={'flex flex-col text-left'}>
                <Section_Test/>
                <JPL_Pipeline/>
                <Full_Stack_Website/>
            </div>
        </main>
    )
}

export default Project;
import Lunar_Pipeline from "../sections/Lunar_Pipeline";
import Project_Introduction from "../sections/Project_Introduction";
import Full_Stack_Website from "../sections/Full_Stack_Website";

function Projects() {
    return (
        <main className={'w-full px-6 md:px-12 xl:px-20 2xl:px-32 py-4'}>
            <div className={'flex flex-col'}>
                <Project_Introduction />
                <Lunar_Pipeline />
                <Full_Stack_Website />
            </div>
        </main>
    )
}

export default Projects;
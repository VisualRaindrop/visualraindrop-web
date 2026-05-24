import JPL_Introduction from "../sections/JPL_Pipeline/JPL_Introduction";
import Full_Stack_Website from "../sections/Full_Stack_Website";
import JPL_Goals from "../sections/JPL_Pipeline/JPL_Goals";
import JPL_Pipeline from "../sections/JPL_Pipeline/JPL_Pipeline";
import JPL_Project from "../sections/JPL_Pipeline/JPL_Project";
import JPL_Yolo from "../sections/JPL_Pipeline/JPL_Yolo";

function Project() {
    return (
        <main id={'Project'} className={'w-full px-6 md:px-12 xl:px-20 2xl:px-32 py-4'}>
            <div className={'flex flex-col text-left'}>
                <JPL_Introduction />
                <JPL_Goals/>
                <JPL_Pipeline/>
                <JPL_Project/>
                <JPL_Yolo/>
                <Full_Stack_Website/>
            </div>
        </main>
    )
}

export default Project;
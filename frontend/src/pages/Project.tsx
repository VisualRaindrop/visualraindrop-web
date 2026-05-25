import JPL_Introduction from "../sections/JPL_Pipeline/JPL_Introduction";
import Web_Introduction from "../sections/Full_Stack_Website/Web_Introduction";
import JPL_Goals from "../sections/JPL_Pipeline/JPL_Goals";
import JPL_Pipeline from "../sections/JPL_Pipeline/JPL_Pipeline";
import JPL_Project from "../sections/JPL_Pipeline/JPL_Project";
import JPL_Yolo from "../sections/JPL_Pipeline/JPL_Yolo";
import Web_Architecture from "../sections/Full_Stack_Website/Web_Architecture";

function Project() {
    return (
        <main id={'Project'} className={'w-full px-6 md:px-12 xl:px-20 2xl:px-32 py-4'}>
            <div className={'flex flex-col text-left'}>
                <JPL_Introduction />
                <JPL_Goals/>
                <JPL_Pipeline/>
                <JPL_Project/>
                <JPL_Yolo/>
                <Web_Introduction/>
                <Web_Architecture/>
            </div>
        </main>
    )
}

export default Project;
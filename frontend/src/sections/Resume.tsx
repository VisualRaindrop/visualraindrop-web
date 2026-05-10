import { useEffect, useState } from "react";
import { getSkills, getTimeline  } from "../api/resume_api";

interface Timeline {
    type: 'experience' | 'education';
    title: string;
    organization: string;
    start_date: string;
    end_date: string | null;
    display_date: string;
    description: string;
}

interface Skill {
    name: string;
    category: string;
}

function Resume() {
    const [ skill, setSkill ] = useState<Skill[]>([]);
    const [timeline, setTimeLine] = useState<Timeline[]>([]);

    useEffect(() => {
        getSkills().then(skill => setSkill(skill));
        getTimeline().then(timeline => setTimeLine(timeline));
    }, []);
    return(
        <section className={'min-h-screen'}>
            {timeline.map((occupation, index) => (
                <div key={index}>
                    <h3 className={'text-xl mt-4 font-bold'}>{occupation.title}</h3>
                    <h4 className={'text-base font-bold'}>{occupation.organization}</h4>
                    <p className={'mt-1text-white/50 text-xs'}>{occupation.display_date}</p>
                    <ul className={'mt-4 list-disc list-inside pl-5'}>
                        {occupation.description.split('\n').map((item) => (
                            <li className={'mt-4 pl-5'}>{item}</li>
                            ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default Resume;
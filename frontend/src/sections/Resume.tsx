import { useEffect, useState } from "react";
import { getTimeline  } from "../api/resume_api";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface Timeline {
    type: 'experience' | 'education';
    title: string;
    organization: string;
    start_date: string;
    end_date: string | null;
    display_date: string;
    description: string;
}

function Resume() {
    const [timeline, setTimeLine] = useState<Timeline[]>([]);

    useEffect(() => {
        getTimeline().then(timeline => setTimeLine(timeline));
    }, []);
    return(
        <section className={'min-h-screen'}>
            <h3 className={'text-4xl pb-8 font-bold text-center'}>Timeline</h3>
            <VerticalTimeline>
                {timeline.map((occupation, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)'}}
                        iconStyle={{ background: 'transparent', boxShadow: 'none'}}
                        icon = { <div className={'flex h-full w-full items-center justify-center'}>
                                <div className={`h-8 w-8 rounded-full ${occupation.type === 'experience' ? 'bg-purple-500' : 'bg-blue-500'} border-4 border-white`}/>
                            </div>}>
                        <div key={index}>
                            <h4 className={'text-xl mt-4 font-bold'}>{occupation.title}</h4>
                            <p className={'text-base font-bold'}>{occupation.organization}</p>
                            <p className={'mt-1 text-gray-400 text-xs!'}>{occupation.display_date}</p>
                            <ul className={'mt-4 list-disc list-inside pl-5'}>
                                {occupation.description.split('\n').map((item) => (
                                    <li className={'mt-4 pl-5'}>{item}</li>
                                    ))}
                            </ul>
                        </div>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    )
}

export default Resume;
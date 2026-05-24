import { useEffect, useState } from "react";
import { get_timeline  } from "../api/Resume_Api";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Resume.css'

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
    const [timeline, set_timeline] = useState<Timeline[]>([]);
    const repeat_animation = {
        triggerOnce: false,
    }

    useEffect(() => {
        get_timeline().then(timeline => set_timeline(timeline));
    }, []);
    return(
        <section id={'Resume'} className={'min-h-screen scroll-mt-28'}>
            <h2 className={'text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl pb-4 font-bold text-center'}>Timeline</h2>
            <p className={'flex justify-center text-(--text)'}>Education and professional experience</p>
            <div className="mt-6 flex justify-center gap-4">
                <button onClick={() => window.open('/Kevin_Truong_Resume.pdf', '_blank')}
                        className={'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'}>
                    View Resume
                </button>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Kevin_Truong_Resume.pdf';
                    link.download = 'Kevin_Truong_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }}
                    className={'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'}>
                    Download Resume
                </button>
            </div>
            <div className="mx-auto max-w-7xl">
                <VerticalTimeline className="custom-line">
                    {timeline.map((occupation, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: occupation.type === 'experience' ? '#a855f7' : '#3b82f6',
                                boxShadow: '0 0 0 4px var(--timeline-border-color, #000000)',}}
                            intersectionObserverProps={repeat_animation}>
                            <h3 className='text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-left m-0 p-0 leading-tight'>
                                    {occupation.title}
                            </h3>
                            <p className='text-base font-bold text-left mt-2 text-purple-600 dark:text-purple-400'>
                                {occupation.organization}
                            </p>
                            <p className='mt-1 text-slate-500 dark:text-slate-400 text-xs font-medium text-left'>
                                {occupation.display_date}
                            </p>
                            <ul className='mt-4 list-disc list-outside pl-5 text-left text-slate-700 dark:text-slate-300 space-y-2'>
                                {occupation.description.split('\n').map((item, i) => (
                                <li key={i} className='text-sm md:text-base leading-relaxed pl-1'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                      </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Resume;
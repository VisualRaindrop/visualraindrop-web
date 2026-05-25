import { send_contact_form } from "../api/Contact_Form";
import {type ChangeEvent, useRef, useState} from "react";

function Contact() {
    const [contact_form_data, set_contact_form_data] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        set_contact_form_data({ ...contact_form_data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await send_contact_form(contact_form_data);
            alert("Form Submitted");
            set_contact_form_data({name: '', email: '', message: '',});
        } catch (error) {
            console.error('Error submitting form: ', error);
            alert('Error submitting form. Please try again later.');
        }
    };

    const text_area_Ref = useRef<HTMLTextAreaElement>(null);
    const handle_input = () => {
        const text_area = text_area_Ref.current;
        if(!text_area) return;
        text_area.style.height = 'auto';
        text_area.style.height = text_area.scrollHeight + 'px';
    }

    return (
        <section id={'Contact'} className={'scroll-mt-28'}>
            <div className='flex flex-col min-h-[80svh] items-center justify-center px-6 py-20'>
                <div className={'text-center mb-8'}>
                    <h2 className={'text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black dark:text-white'}>Send me a Message!</h2>
                </div>
                <form onSubmit={handleSubmit} className={'w-1/2 flex flex-col gap-2 text-black dark:text-black rounded-lg'}>
                    <input
                        type='text'
                        name='name'
                        value={contact_form_data.name}
                        onChange={handleChange}
                        placeholder='Name'
                        className={'w-full border border-black bg-white dark:border-white dark:bg-gray-100 rounded p-2'}
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        value={contact_form_data.email}
                        onChange={handleChange}
                        placeholder='Email'
                        className={'w-full border border-black bg-white dark:border-white dark:bg-gray-100 rounded p-2'}
                        required
                    />
                    <textarea
                        ref={text_area_Ref}
                        name='message'
                        value={contact_form_data.message}
                        onChange={(e) => {
                            handleChange(e);
                            handle_input();
                        }}
                        rows={4}
                        placeholder='Message'
                        className={
                            'w-full resize-none overflow-hidden border border-black bg-white dark:border-white dark:bg-gray-100 rounded p-2'
                        }
                        required
                    />
                    <div className='flex justify-center pt-4'>
                        <button type="submit" className={'px-8 py-3 text-white bg-black dark:text-black dark:bg-white hover:bg-gray-700 hover:dark:bg-gray-300 rounded-xl'}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
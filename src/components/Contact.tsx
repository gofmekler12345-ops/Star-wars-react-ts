import {base_url, period_month} from "../utils/constants.ts";
import { useEffect, useState} from "react";

import ErrorPage from "./ErrorPage.tsx";
import {useValidHero} from "../hooks/customhooks.ts";
import * as React from "react";

const URL = 'gate_away_url';

const Contact = () => {
    const [planets, setPlanets] = useState<string[]>(() => {
        const planets = JSON.parse(localStorage.getItem('planets') || 'null') as {
            payload: string[],
            time: number
        } | null;
        if (planets && ((Date.now() - planets.time) < period_month)) {
            return planets.payload;
        } else {
            return ['wait...']
        }
    });
 const isHeroValid=useValidHero();
    useEffect(() => {
        const getPlanets = async () => {
            const res = await fetch(`${base_url}/v1/planets`);
            const data = await res.json();
            const planets: string[] = data.map((item: { name: string }) => item.name);
            setPlanets(planets);
            localStorage.setItem('planets', JSON.stringify({
                payload: planets,
                time: Date.now()
            }));
        }

        if (planets.length === 1) {
            getPlanets().then(() => console.log('Planets were loaded'));
        }
    }, [planets.length])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const firstname = (form.elements.namedItem('firstname') as HTMLInputElement).value;
        const lastname = (form.elements.namedItem('lastname') as HTMLInputElement).value;
        const planet = (form.elements.namedItem('planet') as HTMLSelectElement).value;
        const subject = (form.elements.namedItem('subject') as HTMLTextAreaElement).value;
        const currentHero = localStorage.getItem('hero') || 'hero';
        const bodyData = {
            name: `${firstname} ${lastname}`.trim(),
            email: `gofmekler12345+${currentHero}@gmail.com`,
            message: `Planet: ${planet}\n\n${subject}`,
        }
        try {
            const res = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            });
            const data = await res.json();
            console.log(data);
            if(res.ok){
                alert('Message sent successfully');
                form.reset();
            } else {
                alert('Message failed to send');
            }
        }
        catch (error) {
            console.log(error);
            alert('Error sending message');
        }
    }

    return isHeroValid ? (
        <div className="container mx-auto my-10 max-w-2xl bg-[#f2f2f2] p-[20px] rounded-[5px]">
            <form onSubmit={handleSubmit}>
                <div className='w-full mb-[16px]'>
                    <label className='block w-full text-[#cc032380] mb-[6px] text-2xl'>First Name
                        <input className='w-full border border-[#ccc] rounded-[4px] box-border mt-[6px]' type="text"
                               name="firstname" placeholder="Your name.."/>
                    </label>
                </div>
                <div className='w-full mb-[16px]'>
                    <label className='block w-full text-[#cc032380] mb-[6px] text-2xl'>Last Name
                        <input className='w-full border border-[#ccc] rounded-[4px] box-border mt-[6px]' type="text"
                               name="lastname" placeholder="Your last name.."/>
                    </label>
                </div>
                <div className='w-full mb-[16px]'>
                    <label className='block w-full text-[#cc032380] mb-[6px] text-2xl'>Planet
                        <select className='w-full border border-[#ccc] rounded-[4px] box-border mt-[6px]' name="planet">
                            {planets.map(item => <option value={item} key={item}>{item}</option>)}
                        </select>
                    </label>
                </div>
                <label className='block w-full text-[#cc032380] mb-[6px] text-2xl'>Subject
                    <textarea
                        className='w-full p-[12 px] border border-[#ccc] rounded-[4px] box-border mt-[6px] h-[200px] resize-y'
                        name="subject"
                        placeholder="Write something.."></textarea>
                </label>
                <button
                    className='bg-[#04AA6D] hover:bg-[#45a049] text-white border border-none rounded-[4px] px-[20px] py-[12px]'
                    type="submit">Submit
                </button>
            </form>
        </div>
    ) : <ErrorPage/>
}

export default Contact;
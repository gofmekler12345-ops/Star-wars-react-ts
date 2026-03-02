
import {base_url, period_month} from "../utils/constants.ts";
import {useEffect, useState} from "react";

const Contact = () => {
    const [planets, setPlanets] = useState<string[]>(() => {
        const planets = JSON.parse(localStorage.getItem('planets')||'null') as {payload: string[], time: number}|null;
        if (planets && ((Date.now() - planets.time) < period_month)) {
            return planets.payload;
        } else {
            return ['wait...']
        }
    });

    useEffect(() => {
        const getPlanets = async () => {
            const res = await fetch(`${base_url}/v1/planets`);
            const data = await res.json();
            const planets: string[] = data.map((item: {name:string}) => item.name);
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

    return (
        <div className="container mx-auto my-10 max-w-2xl bg-[#f2f2f2] p-[20px] rounded-[5px]">
            <form onSubmit={e => {
                e.preventDefault();
            }}>
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
                    <textarea className='w-full p-[12 px] border border-[#ccc] rounded-[4px] box-border mt-[6px] h-[200px] resize-y' name="subject"
                              placeholder="Write something.."></textarea>
                </label>
                <button className='bg-[#04AA6D] hover:bg-[#45a049] text-white border border-none rounded-[4px] px-[20px] py-[12px]'
                        type="submit">Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;
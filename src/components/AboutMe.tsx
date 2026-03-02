import { base_url } from "../utils/constants.ts";
import { useEffect, useState } from "react";
import type {DataInfo} from "../utils/type.ts";

const AboutMe = () => {
    const [hero, setHero] = useState<DataInfo>();

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => {
                const info:DataInfo= {
                    name: data.name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    height: data.height,
                    mass: data.mass,
                    hair_color: data.hair_color,
                    skin_color: data.skin_color,
                    eye_color: data.eye_color
                };
                setHero(info);
            });
    }, []);

    return (
        <div className="mx-auto my-10 max-w-2xl">
            {hero && (
                <div className="overflow-hidden rounded-lg border border-red-800/50 bg-gray-100">
                    {Object.keys(hero).map((key, index) => (
                        <div key={key} className={`flex justify-between px-6 py-4 text-2xl ${index !== Object.keys(hero).length - 1 ? 'border-bottom border-red-800/20' : ''} border-b last:border-b-0`}
                        >
                            <span className="font-bold text-[#cc032380] capitalize">
                                {key.replace('_', ' ')}:
                            </span>

                            <span className="text-[#cc032380]">
                                {hero[key as keyof DataInfo]}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AboutMe;
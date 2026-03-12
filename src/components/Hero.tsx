import {characters, Context} from "../utils/constants.ts";
import {useContext} from "react";

const Hero = () => {

    const {hero}=useContext(Context);
    return (
        <section className="float-left w-1/4 mt-2 mr-4">
            <img className="w-full shadow-hero" src={characters[hero].img} alt={characters[hero].name} />
        </section>
    )
}

export default Hero;
import Navigation from "./Navigation.tsx";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";


const Header = () => {

    const {heroId}= useParams();
    const currentHero= (heroId||defaultHero) as keyof typeof characters;
    const heroData=characters[currentHero];

    return (
        <header className="rounded-t-3xl bg-gray">
            <Navigation />
            <h1 className="text-center text-4xl py-6">{heroData.name}</h1>
        </header>
    )
}

export default Header;
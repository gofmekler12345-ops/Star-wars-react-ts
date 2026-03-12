import OpeningCrawl from "./OpeningCrawl.tsx";
import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import {useParams} from "react-router";
import {characters, Context, defaultHero} from "../utils/constants.ts";
import {useContext, useEffect} from "react";
import ErrorPage from "./ErrorPage.tsx";

const Home = () => {

    const {changeHero} = useContext(Context);
    const {heroId = defaultHero} = useParams();

    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);},[]);

    return (heroId in characters)?(
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ):<ErrorPage/>
}

export default Home;
import {useContext, useEffect} from "react";
import {characters, Context, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";

export const useValidHero = () => {
    const {changeHero} = useContext(Context);
    const {heroId = defaultHero} = useParams();

    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);
    }, [heroId, changeHero]);
    return {
        heroId,
        isHeroValid: heroId in characters
    }
}
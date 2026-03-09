import {starWarsInfo} from "../utils/constants.ts";
import Text from "../ui/Text.tsx";

const StarWars = () => {
    return (
        <Text info={starWarsInfo}/>
    )
}

export default StarWars;
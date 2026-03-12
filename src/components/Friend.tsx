import {characters} from "../utils/constants.ts";
import {NavLink} from "react-router";


interface Props {
    friend: string,
    pos: number

}


const Friend = ({friend, pos}: Props) => {
    let styles = "w-full";
    if (pos === 9) {
        styles += " rounded-br-3xl";
    }
    if (pos === 7) {
        styles += " rounded-bl-3xl";
    }
    return (
        <NavLink to={`/about me/${friend}`}>
            <img className={styles} src={characters[friend].img} alt={characters[friend].name}/>
        </NavLink>
    )
}

export default Friend;
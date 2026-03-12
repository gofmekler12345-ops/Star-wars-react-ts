import Button from "../ui/Button.tsx";
import {NavLink} from "react-router";
import {useContext} from "react";
import {Context} from "../utils/constants.ts";


interface Props {
    itemTitle: string
}

const NavItem = ({itemTitle}: Props) => {

    const {hero}= useContext(Context);

    return (
        <NavLink to={`/${itemTitle.toLowerCase()}/${hero}`}>
            <Button title={itemTitle}>{itemTitle}</Button>
        </NavLink>
    )
}

export default NavItem;
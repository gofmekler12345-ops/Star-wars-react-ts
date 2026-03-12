import Button from "../ui/Button.tsx";
import {NavLink} from "react-router";

interface Props {
    itemTitle: string
}

const NavItem = ({itemTitle}: Props) => {

    return (
        <NavLink to={`/${itemTitle.toLowerCase()}`}>
            <Button title={itemTitle}>{itemTitle}</Button>
        </NavLink>
    )
}

export default NavItem;
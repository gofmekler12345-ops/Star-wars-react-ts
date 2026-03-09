import {Context} from "../utils/constants.ts";
import {useContext} from "react";
import Button from "../ui/Button.tsx";

interface Props {
    itemTitle: string
}

const NavItem = ({itemTitle}:Props) => {
    const {changePage } = useContext(Context);
    return (
        <Button title={itemTitle} onClick={() => changePage(itemTitle)} >{itemTitle}</Button>
    )
}

export default NavItem;
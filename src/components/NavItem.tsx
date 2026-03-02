import {Context} from "../utils/constants.ts";
import {useContext} from "react";

interface Props {
    itemTitle: string
}

const NavItem = ({itemTitle}:Props) => {
    const {changePage } = useContext(Context);
    return (
        <div onClick={() => changePage(itemTitle)} className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white`}>{itemTitle}</div>
    )
}

export default NavItem;
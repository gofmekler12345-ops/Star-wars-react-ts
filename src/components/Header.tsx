import Navigation from "./Navigation.tsx";
import {characters, Context, } from "../utils/constants.ts";
import {useContext} from "react";


const Header = () => {

    const {hero}=useContext(Context);

    return (
        <header className="rounded-t-3xl bg-gray">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">{characters[hero as keyof typeof characters].name}</h1>
        </header>
    )
}

export default Header;
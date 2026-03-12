import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import Contact from "./Contact.tsx";
import StarWars from "./StarWars.tsx";
import {navItems} from "../utils/constants.ts";
import {Route, Routes} from "react-router";
import ErrorPage from "./ErrorPage.tsx";

const Main = () => {

    return (
        <Routes>
            {[`/`, `/${navItems[0]}`,`/${navItems[0]}/:heroId`].map(path => <Route key={path} path={path} element={<Home/>}/>)}
            {[`/${navItems[1]}`, `/${navItems[1]}/:heroId/`].map(path => <Route key={path} path={path} element={<AboutMe/>}/>)}
            <Route path={`/${navItems[2]}/:heroId`} element={<StarWars/>}/>
            <Route path={`/${navItems[3]}/:heroId`} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
}

export default Main;
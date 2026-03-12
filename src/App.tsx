import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {Context, defaultHero} from "./utils/constants.js";

function App() {
    const [hero, setHero] = useState(defaultHero);
    // const changePage = (itemTitle: string) => setPage(itemTitle);

    return (
        <div className={'mx-2'}>
            <Context value={{
                hero, changeHero: setHero
            }}>
                <Header/>
                <Main/>
                <Footer/>
            </Context>
        </div>
    )
}

export default App
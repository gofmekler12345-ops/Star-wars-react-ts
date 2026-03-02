import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {Context, navItems} from "./utils/constants.js";

function App() {
    const [page, setPage] = useState(navItems[0]);
    const changePage = (itemTitle: string) => setPage(itemTitle);

    return (
        <div className={'mx-2'}>
            <Context value={{
                page, changePage
            }}>
                <Header/>
                <Main/>
                <Footer/>
            </Context>
        </div>
    )
}

export default App
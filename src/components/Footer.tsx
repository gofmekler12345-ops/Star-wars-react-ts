import Button from "../ui/Button.tsx";

const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl bg-gray h-20 grid grid-cols-10 items-center">
            <Button title={"Send me email"}/>
        </footer>
    )
}

export default Footer;
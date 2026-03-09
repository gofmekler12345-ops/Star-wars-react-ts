import * as React from "react";

interface Props {
    title: string,
    onClick?: () => void,
    children?: React.ReactNode
}

const Button = ({title, onClick, children}:Props) => {
    return (
        <div onClick={onClick} className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white text-center col-start-3`}>{title||children}</div>

    );
};

export default Button;
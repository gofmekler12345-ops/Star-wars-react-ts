const Text = ({children}: { children: string }) => {
    return (
        <p className="text-3xl text-justify leading-normal tracking-widest">
            {children}
        </p>
    )
}

export default Text;
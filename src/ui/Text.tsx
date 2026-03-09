const Text = ({info}:{info:string}) => {
    return (
        <div className='"text-3xl text-justify leading-normal tracking-widest"'>
            {info}
        </div>
    );
};

export default Text;

//'w-full overflow-hidden rounded-lg border border-red-800/50 bg-gray-100 text-[#cc032380] p-[20px] text-xl'
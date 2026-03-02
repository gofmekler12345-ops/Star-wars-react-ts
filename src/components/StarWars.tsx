import {starWarsInfo} from "../utils/constants.ts";

const StarWars = () => {
    return (
        <div className='w-full overflow-hidden rounded-lg border border-red-800/50 bg-gray-100 text-[#cc032380] p-[20px] text-xl'>
            {starWarsInfo}
        </div>
    )
}

export default StarWars;
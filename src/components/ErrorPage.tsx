import Text from "../ui/Text.tsx";
import {useContext, useEffect} from "react";
import {Context} from "../utils/constants.ts";

const ErrorPage = () => {
    const {setHeaderTitle} = useContext(Context);

    useEffect(() => {
        setHeaderTitle("Error");
        return () => {setHeaderTitle("")}
    }, [setHeaderTitle]);

    return (
        <Text>
            O-o-ops! Something went wrong
        </Text>
    )
}

export default ErrorPage;
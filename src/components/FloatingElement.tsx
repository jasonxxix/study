import { useUserContext } from "../hooks/context";
import { withLogProps } from "./logger";

export function FloatingElement({...props}) {
    const currentUser = useUserContext();

    return <div {...props}>Floating - {currentUser?.name}</div>
}


export default withLogProps(FloatingElement);
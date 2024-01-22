import { createContext, useContext } from "react";
import { User } from "../App";

export const UserContext = createContext<User|undefined>(undefined);

export function useUserContext() {
    const user = useContext(UserContext);

    // if(user === undefined) {
    //     throw new Error("Implementation Error");
    // }

    return user;
}
import { createContext, useContext } from "react";
import UserStores from "./userStores";

export const store={
    userStores: new UserStores(),
}

export const StoreContext=createContext(store);

export function useStore(){
    return useContext(StoreContext);
}
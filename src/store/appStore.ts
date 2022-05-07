import { useContext } from "react";
import { createContext } from "vm"

interface IAppStore{

}


export const store: IAppStore= {

}

export const StoreContext = createContext(store);


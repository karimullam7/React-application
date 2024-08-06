import { createContext } from "react";

export const AppContext = createContext()

const ContextProvider = (props) =>{

    const phone= "9030915121"
    const name ="karim"
    return (
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default  ContextProvider;
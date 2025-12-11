import { useState,createContext,useContext, Children } from "react";
//这是一个hook,用来给别的组件传递状态


const Context = createContext()

export function StatesProvider({children}){
    //const [,] = useState()
    const[,]= useState()
    const valueToShare ={
    }
    return (
        <Context.Provider value={valueToShare}>
            {children}
        </Context.Provider>
    )
}

export function MyStates(){
    return useContext(Context)
}
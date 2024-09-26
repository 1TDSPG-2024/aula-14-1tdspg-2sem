import { Children, ReactNode, useContext, useState } from "react";
import { useFormState } from "react-dom";
import { createContext } from "vm";

interface ThemeContextTipo{
    tema: string;
    mudartTema: () => void;
}

const ThemeContext = createContext<ThemeContextTipo | undefined>(undefined)

export const usaTema = () =>{
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error(" O usa tema está sendo utilizado por Themeprovider")
    }
}


export default function Themeprovider({children}:{children:ReactNode}){

    const[tema, setTema] = useState("light");

    const toggleTema =()=>{
        setTema((prevTema)=> (prevTema === "light" ? "dark" : "light"));
    
    };

    return (
        <ThemeContext.Provider value={{tema, toggleTema}}>
            {Children}
        </ThemeContext.Provider>
    )
}
import { createContext, ReactNode, useContext, useState } from "react";

// Declarar uma interface
interface ThemeContextTipo{
    tema: string;
    mudarTema: ()=> void;
}
// Declarar o valor inicial do contexto
const ThemeContext = createContext<ThemeContextTipo | undefined>(undefined)

export const usaTema = () =>{
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("O UsaTema está sendo utilizado por ThemeProvider!")
    }
}

export default function ThemeProvider({children}:{children:ReactNode}) {

    const [tema, setTema] = useState('light');

    const mudarTema = () =>{
        setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{tema, mudarTema() {

        },}}>
            {children}
        </ThemeContext.Provider>
    )
}

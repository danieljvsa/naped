import { createContext } from "react";


interface NewsContextType{

}




export const NewsContext = createContext({} as NewsContextType)

export function NewsProvider({children}: any) {




    return (
        <NewsContext.Provider value={{  }}>
            {children}
        </NewsContext.Provider>
    )
}
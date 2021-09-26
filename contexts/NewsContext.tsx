
import { createContext, useEffect, useState } from "react";

interface News{
    id: number,
    image: string,
    title: string,
    miniDescription: string,
    description: string,
    date: string,
    tag: string
}

interface NewsContextType{
    newsHeader: News[] | null,
    newsDay: News[] | null,
    newsRecent: News[] | null,
    newsWeek: News[] | null,
    newsAnimes: News[] | null,    
}






export const NewsContext = createContext({} as NewsContextType)

export function NewsProvider({children}: any) {
    const [newsHeader, setNewsHeader] = useState<News[] | null>(null)
    const [newsDay, setNewsDay] = useState<News[] | null>(null)
    const [newsRecent, setNewsRecent] = useState<News[] | null>(null)
    const [newsWeek, setNewsWeek] = useState<News[] | null>(null)
    const [newsAnimes, setNewsAnimes] = useState<News[] | null>(null)
    const [currentNews, setCurrentNews] = useState<News | null>(null)

    useEffect(() => {
        try {
            fetch('/api/news-header').then((res) => {
                return res.json()
            }).then( (data) => {
                console.log(data.news)
                setNewsHeader(data.news)
            })
            fetch('/api/news-day').then((res) => {
                return res.json()
            }).then( (data) => {
                console.log(data)
                setNewsDay(data)
            })
            fetch('/api/news-recent').then((res) => {
                return res.json()
            }).then( (data) => {
                console.log(data)
                setNewsRecent(data)
            })
            fetch('/api/news-week').then((res) => {
                return res.json()
            }).then( (data) => {
                console.log(data)
                setNewsWeek(data)
            })
            fetch('/api/news-animes').then((res) => {
                return res.json()
            }).then( (data) => {
                console.log(data)
                setNewsAnimes(data)
            })
        } catch (error) {
            console.log(error)
        }
        
    }, [])


    return (
        <NewsContext.Provider value={{ newsHeader, newsAnimes, newsDay, newsRecent, newsWeek}}>
            {children}
        </NewsContext.Provider>
    )
}
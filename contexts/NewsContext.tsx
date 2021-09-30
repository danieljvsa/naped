
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
    currentNews: News | null,
    newsBody: String[] | undefined,
    paragraphFirst: string | null,
    paragraphSecond: string | null,
    paragraphThird: string | null,
    activeCurrentNews: (news: News) => void,  
}






export const NewsContext = createContext({} as NewsContextType)

export function NewsProvider({children}: any) {
    const [newsHeader, setNewsHeader] = useState<News[] | null>(null)
    const [newsDay, setNewsDay] = useState<News[] | null>(null)
    const [newsRecent, setNewsRecent] = useState<News[] | null>(null)
    const [newsWeek, setNewsWeek] = useState<News[] | null>(null)
    const [newsAnimes, setNewsAnimes] = useState<News[] | null>(null)
    const [currentNews, setCurrentNews] = useState<News | null>(null)
    const [newsBody, setNewsBody] = useState<String[] | undefined>([])
    const [paragraphFirst, setParahraphFirst] = useState<string | null>('')
    const [paragraphSecond, setParahraphSecond] = useState<string | null>('')
    const [paragraphThird, setParahraphThird] = useState<string | null>('')

    useEffect(() => {
        try {
            fetch('/api/news-header').then((res) => {
                return res.json()
            }).then( (data) => {
                setNewsHeader(data.news)
            })
            fetch('/api/news-day').then((res) => {
                return res.json()
            }).then( (data) => {
                setNewsDay(data)
            })
            fetch('/api/news-recent').then((res) => {
                return res.json()
            }).then( (data) => {
                setNewsRecent(data)
            })
            fetch('/api/news-week').then((res) => {
                return res.json()
            }).then( (data) => {
                setNewsWeek(data)
            })
            fetch('/api/news-animes').then((res) => {
                return res.json()
            }).then( (data) => {
                setNewsAnimes(data)
            })
        } catch (error) {
            console.log(error)
        }
        
    }, [])

    async function activeCurrentNews(news: News){
        setCurrentNews(news)
        setNewsBody(news.description.split("."))
        paragraph1(news.description.split("."))
        paragraph2(news.description.split("."))
        paragraph3(news.description.split("."))
        
        
    }

    function paragraph1(newsPost: any){
        let paragraphSliced = newsPost?.slice(0,9)
        let paragraph = paragraphSliced?.join('.')
        if(paragraph){
            setParahraphFirst(paragraph + ".")
            console.log(paragraphFirst)
        }
        console.log(paragraph)
    }

    function paragraph2(newsPost: any){
        let paragraphSliced = newsPost?.slice(10,18)
        let paragraph = paragraphSliced?.join('.')
        if(paragraph){
            setParahraphSecond(paragraph + ".")
            console.log(paragraphSecond)
        }
        console.log(paragraph)
    }

    function paragraph3(newsPost: any){
        let paragraphSliced = newsPost?.slice(18,27)
        let paragraph = paragraphSliced?.join('.')
        if(paragraph){
            setParahraphThird(paragraph + ".")
            console.log(paragraphThird)
        }
        console.log(paragraph)
    }

    return (
        <NewsContext.Provider value={{  paragraphThird, paragraphSecond, paragraphFirst, newsBody, currentNews, activeCurrentNews, newsHeader, newsAnimes, newsDay, newsRecent, newsWeek}}>
            {children}
        </NewsContext.Provider>
    )
}
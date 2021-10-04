import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/components/NewsAnimes.module.scss'
import Link from 'next/link'
import { NewsContext } from '../contexts/NewsContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export function NewsAnimes(){
    const { newsAnimes, activeCurrentNews, value, newsTitle } = useContext(NewsContext)
    const [newsPerPage, setNewsPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(1)
    const pageNumbers: number[] = []

    const indexOfLastNews = currentPage * newsPerPage
    const indexOfFirstNews = indexOfLastNews - newsPerPage
    const currentPosts = newsAnimes?.slice(indexOfFirstNews, indexOfLastNews)

    if (newsAnimes) {
        for (let index = 1; index <= Math.ceil( newsAnimes.length / newsPerPage); index++) {
            pageNumbers.push(index)
        }
    }

    function paginate(pageNumber: number) {
        setCurrentPage(pageNumber)
    }
    
    function paginateForward() {
        setCurrentPage(currentPage + 1)
    }

    function paginateBack() {
        setCurrentPage(currentPage - 1)
    }

    return(
        <div className={styles.container}>
            <div className={styles.news}>
                {(value === false) ? (
                    currentPosts?.map((news) => (
                        (Array.isArray(news.image)) ? (
                            <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + news.image[0] + ")"}} key={news.id}>  
                                <p className={styles.tag}>{news.tag}</p>
                                <p onClick={() => (activeCurrentNews(news))}>
                                    <Link href={`/news/${news.id}`}>{news.title}</Link>
                                </p>
                            </div>
                        ) : (
                            <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + news.image + ")"}} key={news.id}>  
                                <p className={styles.tag}>{news.tag}</p>
                                <p onClick={() => (activeCurrentNews(news))}>
                                    <Link href={`/news/${news.id}`}>{news.title}</Link>
                                </p>
                            </div>
                        )
                    ))
                ) : (
                    newsAnimes?.map((news) => (
                        (news.title.toLowerCase().includes(newsTitle.toLowerCase())) ? (
                            (Array.isArray(news.image)) ? (
                                <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + news.image[0] + ")"}} key={news.id}>  
                                    <p className={styles.tag}>{news.tag}</p>
                                    <p onClick={() => (activeCurrentNews(news))}>
                                        <Link href={`/news/${news.id}`}>{news.title}</Link>
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + news.image + ")"}} key={news.id}>  
                                    <p className={styles.tag}>{news.tag}</p>
                                    <p onClick={() => (activeCurrentNews(news))}>
                                        <Link href={`/news/${news.id}`}>{news.title}</Link>
                                    </p>
                                </div>
                            )
                        ) : (
                            ""
                        )
                    ))
                )}
            </div>
            <nav className={styles.nav}>
                <ul className={styles.pagination}>
                    <li onClick={() => paginateBack()}>
                        <i><FontAwesomeIcon icon={faChevronLeft} /></i>         
                    </li>
                    
                    <li onClick={() => paginate(pageNumbers[0])} key={pageNumbers[0]}>
                        {pageNumbers[0]}
                    </li> 
                    <li onClick={() => paginate(pageNumbers[1])} key={pageNumbers[1]}>
                        {pageNumbers[1]}
                    </li> 

                    <li onClick={() => paginate(pageNumbers[2])} key={pageNumbers[3]}>
                        ...
                    </li>

                    <li onClick={() => paginate(pageNumbers[8])} key={pageNumbers[8]}>
                        {pageNumbers[8]}
                    </li>
                    
                    <li onClick={() => paginate(pageNumbers[9])} key={pageNumbers[9]}>
                        {pageNumbers[9]}
                    </li>

                    <li onClick={() => paginateForward()}>
                        <i><FontAwesomeIcon icon={faChevronRight} /></i>
                    </li>
                </ul>
            </nav>                 
        </div>
        
    )
}
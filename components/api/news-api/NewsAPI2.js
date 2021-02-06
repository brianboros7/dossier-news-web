import {useEffect, useState} from 'react'
import {Card} from "react-bootstrap";
import styles from './NewsApi.module.css';

function NewsAPI2() {
    const [articles, setArticles] = useState([]);

    const url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=8b46af06015e43ba92196852f89974be';


    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles))
    }, [url]);

    const newsArticles = articles.map((article) => (
        <Card className={styles["news-card"]} style={{ width: '20rem'}}>
            <Card.Body className={styles["pnews-card-body"]}>
                <Card.Img className={styles["news-card-img"]}></Card.Img>
                <Card.Text className={["text-padding"]}>{article.publishedAt}</Card.Text>
                <Card.Text className={["text-padding"]}>{article.author}</Card.Text>

                <Card.Title  className={["text-padding"]}>{article.title}</Card.Title>
            </Card.Body>
        </Card>
    ))

    return ( 
        <div className={styles["news-card-container"]}>
            {newsArticles}
        </div>
    );
}

export default NewsAPI2;
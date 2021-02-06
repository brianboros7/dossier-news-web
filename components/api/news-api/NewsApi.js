import {useState} from 'react'

export default function NewsAPI() {
    const [data, setData] = useState([])

    const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=8b46af06015e43ba92196852f89974be';
    const req = new Request(url);
    
    fetch(req)
    .then(response => response.json())
    .then(data => setData(data.articles))

    const newsArticles = articles.map((article, index) => ( 
        <h1 key={index}>{article.title}</h1>
    ))

    return(
        <div>
            {newsArticles}
        </div>
    )
}
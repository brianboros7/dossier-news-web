import {useState} from 'react'

export default function NewsAPI() {
    const [data, setData] = useState([''])

    const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=8b46af06015e43ba92196852f89974be';
    const req = new Request(url);
    fetch(req)
        .then(function(response) {
            console.log(response.json());
        })
        .then(data => setData(data))

    const newsArticles = data.articles.map((article) => {
        return(
            <h1 key={article.id}>{article.author}</h1>
        )
    })

    return(
        <div>
            {newsArticles}
        </div>
    )
}
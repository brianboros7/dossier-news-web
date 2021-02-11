import {useEffect, useState} from 'react'

function NYTimesApi() {
    const [results, setNews] = useState([])

    const url = "https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=irsGJwPj6mA7c6Hkbs3o2jejFAJBjNzf"
    const loadDate = () => {
        fetch(url)
        .then((response) => response.json)
        .then((data) => setNews(data.results))
    }

    useEffect(() => {
        loadData()
    })

    const newsArticles = results.map((result, index) => (
        <Card key={index} className={styles["news-card"]} style={{ width: '20rem'}}>
            <Card.Body>
                <Card.Img src={result.thumbnail_standard}></Card.Img>
                <Card.Text>{result.abstract}</Card.Text>
                <Card.Title>{result.title}</Card.Title>

                <Card.Text>{result.published_date}</Card.Text>
            </Card.Body>
        </Card>
    ))

    return(
        <div>
            {newsArticles}
        </div>
    )
}

export default NYTimesApi  
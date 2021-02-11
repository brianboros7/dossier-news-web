import {useState, useEffect} from 'react'

function NYTimesApi() {
    const [results, setNews] = useState([])

    const url = "https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=irsGJwPj6mA7c6Hkbs3o2jejFAJBjNzf"
    const loadData = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setNews(data.results)
        })
    }

    useEffect(() => {
        loadData()
    }, []) 

    let newsArticles = results.map((result, index) => (
        <div>{result.abstract}</div>
    ))

    return(
        <div>
            {newsArticles}
        </div>
    )
}

export default NYTimesApi  
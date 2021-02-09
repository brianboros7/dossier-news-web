import {useState, useEffect} from "react"

function CnnRssAPI() {
    const [data, setRSS] = useState([])
    const url = "http://rss.cnn.com/rss/cnn_allpolitics.rss"

    const loadData = () => {
        fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            console.log(data)
            const items = data.querySelectorAll("item")
            let html = ``

            items.forEach(el => {
                html += `
                    <article>
                        <h2>
                            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
                                ${el.querySelector("title").innerHTML}
                            </a>
                        </h2>
                    </aticle> 
                `
            })
            document.body.insertAdjacentHTML("beforeend", html) 
        })
    }

    useEffect(() => {
        loadData()
    })

    const cnnArticles = articles.map((article) => {
        <h1 key={article.id}>{article.title}</h1>
    }) 

    return(
        <div>{cnnArticles}</div>
    )
}

export default CnnRssAPI


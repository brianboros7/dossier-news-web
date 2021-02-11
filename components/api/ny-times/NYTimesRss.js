import {useState, useEffect} from 'react'

function NYTimesRss() {
    const [data, setNYRSS] = useState([])

    const url = "https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml"
    const loadData = () => {
        fetch(url)
        .then((response) => response.json)
        .then((data) => setNYRSS(false))
    }

    useEffect(() => {
        loadData()
    })

    return(
        <div> 

        </div>
    )
}   

export default NYTimesRss 
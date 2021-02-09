import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/app/header/Header'
import NewsApi2 from '../components/api/news-api/NewsAPI2'
// import CnnRssAPI from '../components/api/cnn/CnnRssAPI'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App</title>
        <link rel="icon" href="/favicon.ico"cd  />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.news}>
            <NewsApi2 /> 
        </section>
      
      </main> 

    </div>
  )
}
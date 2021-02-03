import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/app/header/Header'
import NewsApi from '../components/api/NewsApi'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section>
          <NewsApi /> 
      </section> 

    </div>
  )
}

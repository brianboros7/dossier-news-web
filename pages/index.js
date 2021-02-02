import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/app/header/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header /> 

    </div>
  )
}

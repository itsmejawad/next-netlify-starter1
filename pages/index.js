import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from './Logo.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WEB3 for Freedom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    <logo className={styles.WEB3forFreedomLogo}>
  <img src="/logo.png" alt="WEB3forFreedom" className={styles.logo} />
    </logo>
  <h1 className="title"> Follow us <a className="username" href="https://www.instagram.com/web3forfreedom">
    @WEB3forFreedom</a> </h1>
    
   
        <p className="description">
          <code> <a className="email" href="mailto:hi@web3forfreedom.com">hi@web3forfreedom.com</a> </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

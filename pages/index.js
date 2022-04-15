import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WEB3 for Freedom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    
  <img src="/logo.png" alt="WEB3forFreedom" className={styles.logo} />
  <h1 className="title"> Follow us <username>@WEB3forFreedom</username> </h1>
    
   
        <p className="description">
          <code>hi@web3forfreedom.com</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

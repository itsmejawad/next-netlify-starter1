import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
  <h1 className="title"> Follow us <username>@WEB3forFreedom</username> </h1>
    
   
        <p className="description">
          Email us <code>hi@web3forfreedom.com</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

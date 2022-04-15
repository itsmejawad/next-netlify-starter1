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

    var img = document.createElement("img");
    img.src = "logo.png";

    var div = document.getElementById("x");
    div.appendChild(img);
    //block.setAttribute("style", "text-align:center");
  
  <h1 className="title"> Follow us <username>@WEB3forFreedom</username> </h1>
    
   
        <p className="description">
          <code>hi@web3forfreedom.com</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

import React from 'react';
import './App.css';
import bannerImg from '../src/images/banner.png'
import footerImg from '../src/images/footer.png'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Banner from './components/banner'
import Products from './components/products'
import Footer from './components/footer'


class App extends React.Component {

  

  render(){
    return(
      <div>
        <Header  />
        <Navbar />
        <Banner imgSrc={bannerImg} />
        <Products />
        <Banner class="footer-banner" imgSrc={footerImg} />
        <Footer />
      </div>
      )
  }
}

export default App;

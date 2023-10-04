import React from 'react'
import Header from './Header';
import Center from './Center';
import Bottom from './Bottom';
import Footer from './Footer';
import Youtube1 from './Youtube';
import Swiper1 from './Swiper';

const Home = () => {
  return (
    <>
    <Header />
    <Swiper1 />
    <Youtube1 />
    <Center />
    <Bottom />
    <Footer /> 
  </>   
  )
}

export default Home
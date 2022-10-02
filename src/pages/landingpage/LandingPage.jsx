import React from 'react';
import Banner from '../../components/banner/Banner';
import Description from '../../components/description/Description';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/NavBar';
import Partners from '../../components/partners/Partners';
import SendFunds from '../../components/sendfunds/SendFunds';
import Teachersreward from '../../components/teachersreward/Teachersreward';

const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <Banner />
        <Description />
        <SendFunds />
        <Teachersreward />
        <Partners />
        <Footer />
    </div>
  )
}

export default LandingPage

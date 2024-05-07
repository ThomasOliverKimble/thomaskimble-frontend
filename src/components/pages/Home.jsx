import React, { useEffect } from 'react';
import '../../App.css';
import Page from './Page';
import Hero from '../Hero';

function Home() {
  useEffect(() => {
    document.title = "Home - Thomas Kimble";
  }, []);

  return (
    <>
      <Page id='home-page'>
        <Hero></Hero>
      </Page>
    </>
  )
}

export default Home;
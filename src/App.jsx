import { useState } from 'react';
import './index.css';
import FirstSection from './components/FirstSection.jsx';
import SecondSection from './components/SecondSection.jsx';
import Faqs from './components/Faqs.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
    <div className="text-white bg-black">
      <FirstSection />
      <div className='h-2 bg-gray-900'/>
      <SecondSection />
      <div className='h-2 bg-gray-900'/>
      <Faqs/>
      <div className='h-2 bg-gray-900'/>

      <Footer />
    </div>
    </>
  )
}

export default App

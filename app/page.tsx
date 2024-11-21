import React from 'react'
import LandingText from './components/LandingText'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingText />
      <MainSection />
      <Footer />
    </>
  )
}

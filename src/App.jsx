import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import First from './components/first/first'
import './App.css'
import Footer from './components/footer/footer'
import AboutMe from './components/aboutMe/aboutMe'
import Skills from './components/skills/skills'
import Education from './components/education/education'

function App() {

  return (
    <>
      <First />
      <AboutMe />
      <Skills />
      <Education />
      <Footer />
    </>
  )
}

export default App

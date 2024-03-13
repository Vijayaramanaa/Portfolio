import { useState } from 'react';
import './App.css'
import Home from './components/Home'
import Stars from './components/canvas/Stars'
import Timeline from './components/paralax/Timeline'
import Skills from './components/paralax/Skills'
import Sset from './components/skill/Sset'
import Pw from './components/paralax/Pw';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';

function App() {

  const sw = window.screen.width;
  const seen = sw>=768

  return (
    <>
    <section>
    <Home/>
    </section>
    <section>
      <Timeline/>
    </section>
    <section style={seen?{height:"300vh"}:{height:"200vh"}} >
     <Stars />
    </section>
    <section>
      <Skills/>
    </section>
    <section style={seen ? {height:"100vh"}: {height:"120vh"}} >
      <Sset/>
    </section>
    <section>
      <Pw/>
    </section>
    <section style={seen ? {height:"400vh"}: {height:"350vh"}}>
      <Project />
    </section>
    <section>
      <Footer/>
    </section>
    </>
  )
}

export default App

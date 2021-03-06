
import { useState } from 'react'
import './App.css'
import { Calender } from './components/calender'
import { Test } from './components/test'
import {BlurContext} from "./context/blurcontext.jsx"
import { useContext } from "react";
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/newHome'
import { Navbar } from './components/Navbar'
import { Analytics } from './components/analytics'
import { Reque } from './components/requeue'
// import Main from './components/main'

function App() {

  const {blur} = useContext(BlurContext)


  return (
    <div className="App" >
     
      <div >
      <Navbar></Navbar>

      </div>
      <div>
      <Routes>
        <Route>
        <Route path="/" element= {<Home />}></Route>
        <Route path='/calendar' element = {blur ? <Test></Test> : <Calender></Calender>}></Route>
        <Route path="/analytics" element={<Analytics></Analytics>} ></Route>
        <Route path="/requeue" element={<Reque></Reque>} ></Route>
        </Route>
      </Routes>
      </div>
      {/* <Main></Main> */}
  


    </div>
  )
}

export default App

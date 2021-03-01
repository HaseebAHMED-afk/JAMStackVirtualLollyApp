import React from "react"
import Header from "../components/Header"
import Lolly from "../components/Lolly"
import { navigate } from 'gatsby'
//@ts-ignore

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <div className="listLollies">
        <Lolly lolyTop="#8C0040" lolyMiddle="#67000D" lolyBottom="#A7563C" />
        <Lolly lolyTop="red" lolyMiddle="orange" lolyBottom="yellow" />
        <Lolly lolyTop="aqua" lolyMiddle="rgb(0, 255, 42)" lolyBottom="rgb(255, 0, 242)" />
        <Lolly lolyTop="rgb(224, 46, 70)" lolyMiddle="rgb(46, 58, 224)" lolyBottom="rgb(173, 46, 224)" />
        <Lolly lolyTop="rgb(224, 46, 156)" lolyMiddle="rgb(224, 153, 46)" lolyBottom="rgb(110, 37, 15)" />
        <Lolly lolyTop="rgb(15, 110, 94)" lolyMiddle="rgb(3, 17, 77)" lolyBottom="rgb(187, 206, 13)" />
      </div>
      <button onClick={
        ()=>{
          navigate('/createNew')
        }
      } className='navigate-btn' type='button' value='create new loli' >Create new lolli</button>
    </div>
  )
}

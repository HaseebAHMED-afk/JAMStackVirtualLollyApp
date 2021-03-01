import React from "react"
import Lolly from "../components/Lolly"
//@ts-ignore


export default function Home() {
  return (
  <div>Hello world!
    <Lolly lolyTop="#8C0040" lolyMiddle="#67000D" lolyBottom="#A7563C" />
    <Lolly lolyTop="red" lolyMiddle="orange" lolyBottom="yellow" />
  </div>
  )
}

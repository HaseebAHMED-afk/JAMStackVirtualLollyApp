import React, { useState } from 'react'
import Header from '../components/Header'
import Lolly from '../components/Lolly'

const createNew = () => {

    const [color1 , setColor1] = useState('#ff0000')
    const [color2 , setColor2] = useState('#00ff0d')
    const [color3 , setColor3] = useState('#0066ff')
    const [recepient,setRecepient] = useState('')
    const [message,setMessage] = useState('')
    const [from,setFrom] = useState('')

    return (
        <div className='container'>
           <Header />
           <div className="lolli-form">
           <div>
               <Lolly lolyTop={color1}  lolyMiddle={color2} lolyBottom={color3}  />
           </div>
           <div className='color-pallete' >
               <label htmlFor="flavor-top" className="colorLabel">
               <input onChange={ (e) =>{
                   setColor1(e.target.value)
               }} type='color' className='color-picker' value={color1} name='flavor-top' id='flavor-top'/>
               </label>
               <label htmlFor="flavor-middle" className="colorLabel">
               <input onChange={(e)=>{
                   setColor2(e.target.value)
               }} type='color' className='color-picker' value={color2} name='flavor-middle' id='flavor-top'/>
               </label>
               <label htmlFor="flavor-bottom" className="colorLabel">
               <input onChange={(e)=>{
                   setColor3(e.target.value)
               }} type='color' className='color-picker' value={color3} name='flavor-bottom' id='flavor-top'/>
               </label>
           </div>
           <div>
               <div className='form' > 
                   <label htmlFor="recepientName">
                       To:<br/>
                       <input  className="inputField text" type="text" name="recepientName" id="recepientName"/>
                   </label>
                   <label htmlFor="message">
                       Message: <br/>
                       <textarea className="inputField" name="message" id="" cols={30} rows={10}></textarea>
                   </label>
                   <label htmlFor="from">
                       From <br/>
                       <input className="inputField text" type="text" name="from" id="from"/>
                   </label>
               </div>
               <button className='freeze-btn' >Freeze Lolly and get link</button>
           </div> 
           </div>
        </div>
    )
}

export default createNew

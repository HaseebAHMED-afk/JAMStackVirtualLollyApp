import React from 'react'
import Header from '../components/Header'
import Lolly from '../components/Lolly'

const createNew = () => {
    return (
        <div className='container'>
           <Header />
           <div className="lolli-form">
           <div>
               <Lolly lolyTop='red'  lolyMiddle='green' lolyBottom='blue'  />
           </div>
           <div className='color-pallete' >
               <label htmlFor="flavor-top" className="colorLabel">
               <input type='color' className='color-picker' value='#ff0000' name='flavor-top' id='flavor-top'/>
               </label>
               <label htmlFor="flavor-middle" className="colorLabel">
               <input type='color' className='color-picker' value='#00ff0d' name='flavor-middle' id='flavor-top'/>
               </label>
               <label htmlFor="flavor-bottom" className="colorLabel">
               <input type='color' className='color-picker' value='#0066ff' name='flavor-bottom' id='flavor-top'/>
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

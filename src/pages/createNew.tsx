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
               form
           </div>
           </div>
        </div>
    )
}

export default createNew

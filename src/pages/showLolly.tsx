import React from 'react'
import Lolly from '../components/Lolly'


const showLolly = () => {
    return (
        <div className='show-lolly' >
            <Lolly lolyTop='red' lolyBottom='yellow' lolyMiddle='green'  />
            <div className='lolly-container' > 
                   <p className='to' >some one sent you a lolly</p>
                   <p className='msg' >msg</p>
                   <p className='from' >from</p>
               </div>
           </div> 
    )
}

export default showLolly

import { gql, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import Header from '../components/Header'
import Lolly from '../components/Lolly'


const GET_DATA = gql`
    {
        hello
    }
`

const CREATE_LOLLY = gql`
    mutation createLolly($recepientName: String!,$message: String!,$from: String!,$flavorTop: String!,$flavorMiddle: String!,$flavorBottom: String!){
          createLolly(recepientName: $recepientName,message: $message,from: $from,flavorTop: $flavorTop,flavorMiddle: $flavorMiddle,flavorBottom: $flavorBottom){
            message,
            lollyPath
      }
      }
`

const createNew = () => {

    const [color1 , setColor1] = useState('#ff0000')
    const [color2 , setColor2] = useState('#00ff0d')
    const [color3 , setColor3] = useState('#0066ff')
    const [recepient,setRecepient] = useState('')
    const [message,setMessage] = useState('')
    const [from,setFrom] = useState('')

    const {loading, error , data} = useQuery(GET_DATA)
    const [createLolly] = useMutation(CREATE_LOLLY)

    const freezeLolly = async () => {

        
        
       const result = await createLolly({
            variables:{
                recepientName: recepient,
                message: message,
                from: from,
                flavorTop: color1,
                flavorMiddle: color2,
                flavorBottom: color3
            }
        })
        console.log(result);
        
        setRecepient('')
        setMessage('')
        setFrom('')
    }

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
                       <input value={recepient} onChange={(e)=>{
                           setRecepient(e.target.value)
                       }} className="inputField text" type="text" name="recepientName" id="recepientName"/>
                   </label>
                   <label htmlFor="message">
                       Message: <br/>
                       <textarea onChange={
                           (e) => {
                               setMessage(e.target.value)
                           }
                       } className="inputField" name="message" id="" cols={30} rows={10}></textarea>
                   </label>
                   <label htmlFor="from">
                       From <br/>
                       <input onChange={(e)=>{
                           setFrom(e.target.value)
                       }} className="inputField text" type="text" name="from" id="from"/>
                   </label>
               </div>
               <button className='freeze-btn' onClick={
                   ()=>{
                       freezeLolly()
                   }
               } >Freeze Lolly and get link</button>
           </div> 
           </div>
        </div>
    )
}

export default createNew

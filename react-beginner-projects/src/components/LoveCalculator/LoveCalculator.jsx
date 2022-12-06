import React,{ useState } from 'react'
import axios from 'axios'
import './style.css'

// https://rapidapi.com/ajith/api/love-calculator/
export const LoveCalculator = () => {
  
    const [couple, setCouple] = useState({ firstName:'', secondName:'' })
    const [isSubmit, setIsSubmit] = useState(false)
    const [report, setReport] = useState({})

    const submitHandler = async (e) => {

          e.preventDefault()

          const options = {
            method: 'GET',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: {fname: couple.firstName , sname: couple.secondName  },
            headers: {
              'X-RapidAPI-Key': 'e3dc3da840msh029ff60fb38eb47p147d3cjsncb1ccd2d319a',
              'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
          };

          await axios.request(options).then(function (response) {
            setReport(response.data)
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });

          setIsSubmit(false)
          setIsSubmit(true)

      }
  return (
    <div className='loveCalculator'>
        <h2>Love-Calculator</h2>
        <form onSubmit={submitHandler}>
          <input 
              type='text'
              name='firstName'
              value={couple.firstName}
              placeholder='First Name'
              required
              onChange={ 
                e => setCouple( {...couple, firstName: e.target.value})
              }
          />
          <input 
              type='text'
              value={couple.secondName}
              placeholder='Second Name'
              required
              onChange={ e => setCouple( { ...couple, secondName: e.target.value} ) }
          />
          <button type='submit'>Submit</button>
        </form>

        { isSubmit ?
          <div className='coupleReport'>
            <p>Hey <b>{report.fname}</b> and <b>{report.sname}</b> </p>
            <p>Your Love Percentage is : <b>{report.percentage}</b>  %</p> 
            <p>"{report.result}"</p>
          </div>
          : null
        }
      
    </div>
  )
}

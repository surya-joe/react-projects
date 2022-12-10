import React,{ useState } from 'react'
import axios from 'axios'
import './style.css'

export const LoveMeter = () => {
    const [couple, setCouple] = useState({ firstName:'', secondName: '' })
    const [report, setReport] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmited, setIsSubmited] = useState(false)

    const onChangeHandler = (e) => {
        const onChangeValue = e.target.value
        setCouple(
            {
                ...couple,
                [e.target.name] : onChangeValue
            }
        )
    }

    const formSubmitHandler = async (e) => {
        
        e.preventDefault()

        setIsLoading(true)

        const options = {
            method: 'GET',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: {fname: couple.firstName , sname: couple.secondName  },
            headers: {
              'X-RapidAPI-Key': 'e3dc3da840msh029ff60fb38eb47p147d3cjsncb1ccd2d319a',
              'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
          };

          await axios
          .request(options)
          .then( r => {
            setReport(r.data)
            console.log(r.data);
          })
          .catch( er => {
            console.error(er);
          });
          
          setIsSubmited(true)
          
          setIsLoading(false)
    }

    
  return (
    <div className='loveMeter'>
        <h2>Love Meter</h2>
        <form onSubmit={ formSubmitHandler }>
            <input 
                required
                type='text'
                placeholder='Enter First Name'
                value={couple.firstName}
                name='firstName'
                onChange={ onChangeHandler }
            />
            <input 
                required
                type='text'
                placeholder='Enter Second Name'
                value={couple.secondName}
                name='secondName'
                onChange={ onChangeHandler }
            />
            <button type='submit'>Find</button>
        </form>
        
        {
            isSubmited ? isLoading ? <div className='coupleReport'> <p>Processing...</p> </div> :                
                <div className='coupleReport'>
                    <p>Hello <b>{report.fname}</b> and <b>{report.sname}</b> </p>
                    <p>Love percentage : <b>{report.percentage} %</b> </p>
                    <p>"{report.result}"</p>
                </div>
            : null
        }
        
    </div>
  )
}

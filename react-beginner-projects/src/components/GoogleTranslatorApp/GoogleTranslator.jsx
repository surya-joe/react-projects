import React, {useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

export const GoogleTranslator = () => {
    const [text, setText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [languages, setLanguages] = useState([]) 
    const [languageSelected, setLanguageSelected] = useState('en')
    const [isLoading, setIsLoading] = useState(false)

    const API_URL = 'https://google-translate1.p.rapidapi.com/language/translate/v2'
    const API_ENCODING = 'application/gzip'
    // const API_KEY = 'e3dc3da840msh029ff60fb38eb47p147d3cjsncb1ccd2d319a'
    const API_KEY = '59dbbe565amshcd3e9aceff0e38ap13fc4ajsnd8c024328e3b'
    const API__HOST = 'google-translate1.p.rapidapi.com'

    useEffect(
        () => {
            const options = {
              method: 'GET',
              url: `${API_URL}/languages`,
              headers: {
                'Accept-Encoding': API_ENCODING,
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API__HOST
              }
            };
            
            axios.request(options)
            .then( r => {
                const listOfLanguage = r.data
                const languageArr = listOfLanguage.data.languages
                setLanguages(languageArr)
              }
            ).catch( er => {
                console.error(er);
            });
        },[]
    )

    const handleSubmit = async (e) => {

      e.preventDefault()
      setIsLoading(true)
      
      const encodedParams = new URLSearchParams();
      
      encodedParams.append("target", languageSelected);
      encodedParams.append("q", text);

      const options = {
        method: 'POST',
        url: API_URL,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': API_ENCODING,
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API__HOST
        },
        data: encodedParams
      };

      await axios.request(options)
      .then( r => {
          const tData = r.data
          const tText = tData.data.translations[0].translatedText
          setTranslatedText(tText)
          console.log(tText)
        }
      ).catch( er => {
          console.error(er);
      });

      setIsLoading(false)
    }

  return (
    <div id='GoogleTranslator'>
        <h2>Google Translator</h2>
        <form onSubmit={handleSubmit}>
          <div id='inputField'>
            <input 
              type='text'
              placeholder='Enter text'
              value={text}
              required
              onChange={ e => setText(e.target.value) }
            />
          </div>
          <div id='selectLanguage'>
            <label>Language : </label>
            <select 
              value={languageSelected}
              onChange={ e => setLanguageSelected(e.target.value) }
            >
              { 
                languages.map(
                  item => <option key={item.language} >{item.language}</option>
                )
              }
            </select>
          </div>
          <button >Search</button>
        </form>
        {
          isLoading 
          ? <p id='translation'>Processing...</p>
          : <p id='translation'>{translatedText}</p>
        }
        
    </div>
  )
}

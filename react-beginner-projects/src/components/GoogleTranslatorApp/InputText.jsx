// import React, {useState} from 'react'
// import axios from 'axios'

// export const InputText = (props) => {
//     const [text, setText] = useState('')
//     const [translatedText, setTranslatedText] = useState('')
//     const handleSubmit = () => {

//         const encodedParams = new URLSearchParams();
        
//         encodedParams.append("target", props.lan);
//         encodedParams.append("q", text);

//         const options = {
//         method: 'POST',
//         url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'Accept-Encoding': 'application/gzip',
//             'X-RapidAPI-Key': 'e3dc3da840msh029ff60fb38eb47p147d3cjsncb1ccd2d319a',
//             'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//         },
//         data: encodedParams
//         };

//         axios.request(options).then(function (response) {
//             const tData = response.data
//             const tText = tData.data.translations[0].translatedText
//             setTranslatedText(tText)
//             console.log(tText)
//         }).catch(function (error) {
//             console.error(error);
//         });
//     }
//   return (
//     <div>
//         {/* <h2>InputText</h2> */}
//         <div id='inputField'>
//           <input 
//             type='text'
//             placeholder='Enter text'
//             value={text}
//             onChange={ e => setText(e.target.value) }
//           />
//         <button onClick={ handleSubmit }>Search</button>
//         </div>
//         {translatedText}
//     </div>
//   )
// }

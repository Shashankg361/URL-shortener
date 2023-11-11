import { useRef, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [Url , setUrl] = useState('');
  const [shortUri , setShortUri] = useState('')
  const formRef = useRef(null);
   
  const handelSubmit =async(event)=>{
    event.preventDefault();
    console.log('entered')
    const response = await axios(`https://url-shortener-backend-tau.vercel.app/api/home/?q=${Url}`)
    const data = response.data;
    console.log('got data from backend - ', data)
    setShortUri(data.Message) ; 
  }

  shortUri && console.log("Link - ",shortUri);

  return (
    <div className="App">
      <header>
        <h1 className='font-medium text-2xl m-5' >URL shortener</h1>
      </header>
      <main>
        <form ref={formRef} onSubmit={handelSubmit}>
          <input onChange={(e)=>setUrl(e.target.value)} className='border border-black p-1 mr-2 rounded-lg' id='URL' type='text' placeholder='Enter URl'></input>
          <input type='submit' id='URL' className='border-2 p-1 border-black cursor-pointer rounded-lg'></input>
        </form>
        <div className='m-3 p-2 bg-black text-white'>
          <h2>Here is your shorten URI</h2>
          <h1>Link - <a target='blank' href={shortUri}>{shortUri}</a></h1>
        </div>
      </main>
    </div>
  );
}

export default App;

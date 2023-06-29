import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  // To set dark and light mode 
  const [Mode, setMode] = useState('light');
  const [navtext, setNavtext] = useState('Enable Dark Mode');


  const toggleMode = () =>{
    if(Mode==='light'){
      setMode('dark');
      setNavtext('Enable Light Mode');
      document.body.style.backgroundColor= '#042743'; 
      }
    else
    {
      setMode('light');
      setNavtext('Enable Dark Mode');
      document.body.style.backgroundColor= 'white';
    }
  }

  return (
    <>
    <Navbar title = 'TextUtils' home = 'Home' about='About' mode={Mode} toggleMode={toggleMode} navtext={navtext}/>
    <Alert/>
    <div className="container">
      <TextForm heading = 'Enter your text to render here' mode={Mode}/>
    </div>
    </>
  );
}
export default App;

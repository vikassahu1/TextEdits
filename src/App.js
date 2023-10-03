import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  // To set dark and light mode . 
  const [Mode, setMode] = useState('light');
  const [navtext, setNavtext] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      setNavtext('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled !", "success");
    }
    else {
      setMode('light');
      setNavtext('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled !", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title='TextEdits' home='Home' about='About' mode={Mode} toggleMode={toggleMode} navtext={navtext} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={Mode}/>}/>;
            <Route exact path="/" element={<TextForm heading='Enter your text to render here' mode={Mode}  showAlert={showAlert} />}/>;
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
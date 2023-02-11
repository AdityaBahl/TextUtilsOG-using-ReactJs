import './App.css';
import React, {useState }  from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './About';
import Alert from './components/Alert';
//react router dom
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const ToggleMode=()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success")
      document.title='TextUtilsOG - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success")
      document.title='TextUtilsOG - Light Mode'
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtilsOG" mode={Mode} ToggleMode={ToggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">    
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode} />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

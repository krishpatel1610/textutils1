import './App.css';
// import About from './components/About';
import React , {useState} from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const toggleGreen =()=>{
    if(mode === 'light')
    {
      showAlert(" Green dark mode has been enabled.","success");
      setMode('success')
      setGmod('success')
      setMystyle('text-light')
      document.body.style.backgroundColor ="#1cb36d";
    }
    else
    {
      showAlert(" Green dark mode has been Dissabled.","success");
      setMode('light')
      setMystyle('')
      document.body.style.backgroundColor = "white"; 
    }
  }
  const toggleMode =()=>{
     
    if(mode === 'light')
      {
        showAlert("Dark mode has been enabled.","success");
        setMode('dark')
        setMystyle('text-light')
        document.body.style.backgroundColor = "#212529de";
      }
      else
      {
        showAlert("Dark mode has been dissabled.","success");
        setMode('light')
        setMystyle('')
        document.body.style.backgroundColor = "white"; 
      }
  }
  const [mystyle, setMystyle] = useState("")
  const [mode, setMode] = useState("light")
  const [gmod, setGmod] = useState("light");
  const [alert, setAlert] = useState(null)
  return (
    <>
    <Router>
      <NavBar title="TextUtils" aboutText="About" mode={mode} gmode={gmod} toggleGreen={toggleGreen} toggleMode={toggleMode} mystyle={mystyle}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
        <Route exact path="/about">
        <About mode={mode}/>
        </Route>
        <Route exact path="/">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        </Route>
      </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;

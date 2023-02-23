import { useState } from 'react';
import './App.css';
import Comp from './Components/Comp';
import Header from './Components/Header';

function App() {
const [darkTheme, setdarkTheme] = useState(false)
    const dark ={backgroundColor:"#282c35", color:"white"}
    const light = {backgroundColor:"white", color:"black"}
  return (

    <div className="App"style={darkTheme ? dark : light}>

    <div className="mainContainer">
    <Header darkTheme ={darkTheme} setdarkTheme ={setdarkTheme}/>
    <Comp darkTheme ={darkTheme}/> 
    </div>
    
    </div>
  );
}

export default App;

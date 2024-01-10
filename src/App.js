import './App.css';
import Home from './Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contato from './Contato'
import Promocionais from './Promocionais'
import Destino from './Destino'
import Login from './Login'
import PosLogin from './PosLogin'

function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Contato' element={<Contato/>}/>
       <Route path='/Promocionais' element={<Promocionais/>}/>
       <Route path='/Destino' element={<Destino/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/PosLogin' element={<PosLogin/>}/>
      </Routes>  
    </Router>
    
  );
}

export default App;



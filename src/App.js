import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
function App() {
  return (
    <div>
      <BrowserRouter>

       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
       </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

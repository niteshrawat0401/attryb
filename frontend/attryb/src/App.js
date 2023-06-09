import logo from './logo.svg';
import './App.css';
import { PrivateRoute } from './pages/PrivateRoute';
import { Navbar } from './pages/Navbar';
import {Signup} from './pages/Signup'
import {Login} from './pages/Login'
import {Route, Routes} from "react-router-dom"
import Manufacturers from './component/Manufacturers';
import Productdealer from './component/Productdealer';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/manufacture' element={
        <PrivateRoute>
        <Manufacturers/>
        </PrivateRoute>
        }/>
        <Route path='/productdealer' element={<Productdealer/>}/>
      </Routes>
    </div>
  );
}

export default App;

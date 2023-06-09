import logo from './logo.svg';
import './App.css';
import { PrivateRoute } from './pages/PrivateRoute';
import { Navbar } from './pages/Navbar';
import {Signup} from './pages/Signup'
import {Login} from './pages/Login'
import {Route, Routes} from "react-router-dom"
import Home from './component/Home';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/student' element={
        <PrivateRoute>
        <Home/>
        </PrivateRoute>
        }/>
        {/* <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}/> */}
      </Routes>
    </div>
  );
}

export default App;

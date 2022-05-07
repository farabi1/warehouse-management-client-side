import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Signup/Signup';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventry from './Pages/Inventry/Inventry';
import ManageInventry from './Pages/Manage Inventory/ManageInventry';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventry' element={<Inventry></Inventry>}></Route>
        <Route path='/manageinventry' element={<ManageInventry></ManageInventry>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

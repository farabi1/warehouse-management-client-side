import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddData from './Components/AddData/AddData';
import Login from './Components/Auth/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';

import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventry from './Pages/Inventory/Inventory';
import ManageInventry from './Pages/Manage Inventory/ManageInventory';
import Signup from './Components/Auth/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventry' element={
          <RequireAuth>
            <Inventry></Inventry>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventry></ManageInventry>
          </RequireAuth>
        }></Route>
        <Route path='/receivedata' element={
          <RequireAuth>
            <AddData></AddData>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

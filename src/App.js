import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddData from './Components/AddData/AddData';
import Login from './Components/Auth/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';

import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import ManageInventory from './Pages/Manage Inventory/ManageInventory';
import Signup from './Components/Auth/Signup/Signup';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory/:inventoryid' element={<ItemDetails></ItemDetails>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
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
      <Toaster />
    </div>
  );
}

export default App;

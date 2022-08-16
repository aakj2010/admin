import './css/sb-admin-2.css';
import Dashboard from './Dashboard';
import SideBar from './SideBar';
import TopBar from './TopBar';
import Users from './Users';
import Products from './Products';
import CreateUser from './CreateUser';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Createproduct from './CreateProduct';
import LogIn from './LogIn';
import Portal from './Portal';

function App() {
  return (
    <BrowserRouter>
     
            <Routes>
              <Route path='/' element={<LogIn />} />
              <Route path='/portal' element={<Portal />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='users' element={<Users />} />
                <Route path='create-user' element={<CreateUser />} />
                <Route path='products' element={<Products />} />
                <Route path='create-product' element={<Createproduct />} />
              </Route>
            </Routes>
       
    </BrowserRouter>
  );
}

export default App;

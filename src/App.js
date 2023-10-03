import Home from './pages/Home'; 
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart'
import Product from './components/Product';
import Login from './pages/Login';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom'
import { productsData } from './api/api';

const Layout =()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <ScrollRestoration/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader: productsData,
      },
      {
        path:'/product/:id',
        element: <Product />
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './RootLayout/Root';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AddtoCart from './Pages/AddtoCart'
import Authprovider from './Autprovider/Authprovider';
import MyCard from './Pages/MyCard';
import CardDetails from './Pages/CardDetails';
import UpdatedProducts from './Pages/UpdatedProducts';
import Products from './Pages/Products';
import PrivateRoute from './Components/PrivateRoute';
import CardsSubcategory from './Components/CardsSubcategory';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://b9a10-server-side-farhad2590.vercel.app/products')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addCard",
        element: <AddtoCart></AddtoCart>
      },
      {
        path: "/myCard",
        element: <PrivateRoute>
          <MyCard></MyCard>
        </PrivateRoute>
      },
      {
        path: "/cardsdata/:id",
        loader: () => fetch('https://b9a10-server-side-farhad2590.vercel.app/products'),
        element: <PrivateRoute>
          <CardDetails></CardDetails>
        </PrivateRoute>,
      },
      {
        path: "/allProducts",
        element: <Products></Products>,
        loader: () => fetch('https://b9a10-server-side-farhad2590.vercel.app/products')
      },
      {
        path: "/updateProducts/:id",
        element: <PrivateRoute>
          <UpdatedProducts></UpdatedProducts>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://b9a10-server-side-farhad2590.vercel.app/products/${params.id}`)
      },
      {
        path: "/subCategorydata/:subcategory_name",
        loader: () => fetch('https://b9a10-server-side-farhad2590.vercel.app/products'),
        element: <PrivateRoute>
          <CardsSubcategory></CardsSubcategory>
        </PrivateRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)

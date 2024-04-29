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
        loader: () => fetch('http://localhost:5000/products')
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
        element: <MyCard></MyCard>
      },
      {
        path: "/cardsdata/:id",
        loader: () => fetch('http://localhost:5000/products'),
        element: <PrivateRoute>
          <CardDetails></CardDetails>
        </PrivateRoute>,
      },
      {
        path: "/allProducts",
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/updateProducts/:id",
        element: <UpdatedProducts></UpdatedProducts>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "/subCategorydata/:subcategory_name",
        loader: () => fetch('http://localhost:5000/products'),
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

/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Navbar2 from "./components/Navbar2";
import Navbar3 from "./components/Navbar3";
import { Products, InputPage, TrainingPage, ContactUs, AboutUs, Home, Auth, AdminAuth, CustomerAuth, FarmerAuth } from './pages';

const Layout = () => {
  return( 
  <>
  <NavBar/>
  <Outlet/>
  </>
  );
};

const Layout2 = () => {
  return( 
  <>
  <Navbar2/>
  <Outlet/>
  </>
  );
};

const Layout3 = () => {
  return( 
  <>
  <Navbar3/>
  <Outlet/>
  </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
  {
    path: "/auth",
    element: <Auth/>
  },
  {
    path: "/auth/AdminAuth",
    element: <AdminAuth/>
  },
  {
    path: "/auth/CustomerAuth",
    element: <CustomerAuth/>
  },
  {
    path: "/auth/FarmerAuth",
    element: <FarmerAuth/>
  },
  {
    path: "/",
    element: <Layout2/>,
    children: [
      {
        path:"/farmer/inputPage",
        element: <InputPage/>
      },
      {
        path:"/farmer/training",
        element: <TrainingPage/>
      },
      {
        path:"/farmer/aboutUs",
        element: <AboutUs/>
      },
      {
        path:"/farmer/contactUs",
        element: <ContactUs/>
      }
    ]
  },
  {
    path: "/",
    element: <Layout3/>,
    children: [
      {
        path:"/customer/products",
        element: <Products/>
      },
      {
        path:"/customer/aboutUs",
        element: <AboutUs/>
      },
      {
        path:"/customer/contactUs",
        element: <ContactUs/>
      }
    ]
  },
]);

const App = () => {
  return (
   <div className='bg-transparent w-full overflow-hidden'>
      <RouterProvider router={router}/>
  </div>
)};

export default App
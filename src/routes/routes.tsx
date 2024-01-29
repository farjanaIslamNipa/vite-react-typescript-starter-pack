import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../components/layouts/AdminLayout";
import MainLayout from "../components/layouts/MainLayout";
import Home from "@/pages/home";



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <h1>This is about us page</h1>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'add-admin',
        element: <h1>This is add admin page</h1>
      }
    ]
  }
])

export default router
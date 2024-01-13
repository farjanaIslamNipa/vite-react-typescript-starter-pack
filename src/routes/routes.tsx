import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../components/layout/AdminLayout";
import App from "../App";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
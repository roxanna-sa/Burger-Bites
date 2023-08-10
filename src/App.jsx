import {createBrowserRouter} from 'react-router-dom';
import Login from './components/pages/Login/login.jsx';
import CreateOrders from './components/pages/Waiter/create-orders/CreateOrders.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/waiter/create-orders',
      element: <CreateOrders />
    }
  ])

export default router;
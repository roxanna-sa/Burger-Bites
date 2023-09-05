import {createBrowserRouter} from 'react-router-dom';
import Login from './components/pages/Login/login.jsx';
import AdminPanel from './components/pages/Admin/AdminPanel.jsx';
import CreateOrders from './components/pages/Waiter/create-orders/CreateOrders.jsx';
import Error from './components/pages/Error/error.jsx';
import Kitchen from './components/pages/SharedView/kitchen/kitchen.jsx';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: '/waiter/create-orders',
      element: <CreateOrders />,
      errorElement: <Error />
    },
    {
      path: '/waiter/kitchen',
      element: <Kitchen />,
      errorElement: <Error />
    },
    {
      path: '/cook/kitchen',
      element: <Kitchen />,
      errorElement: <Error />
    },
    {
      path: '/admin/admin-panel',
      element: <AdminPanel />,
      errorElement: <Error />
    },

  ])

export default router;
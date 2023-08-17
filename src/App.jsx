import {createBrowserRouter} from 'react-router-dom';
import Login from './components/pages/Login/login.jsx';
import AdminPanel from './components/pages/Admin/AdminPanel.jsx';
import KitchenCook from './components/pages/Cook/KitchenCook.jsx';
import KitchenWaiter from './components/pages/Waiter/kitchen/Kitchen.jsx';
import CreateOrders from './components/pages/Waiter/create-orders/createOrders.jsx';
import Error from './components/pages/Error/error.jsx';


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
      element: <KitchenWaiter />,
      errorElement: <Error />
    },
    {
      path: '/cook/kitchen',
      element: <KitchenCook />,
      errorElement: <Error />
    },
    {
      path: '/admin/admin-panel',
      element: <AdminPanel />,
      errorElement: <Error />
    },

  ])

export default router;
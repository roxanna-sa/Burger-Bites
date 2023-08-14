import {createBrowserRouter} from 'react-router-dom';
import Login from './components/pages/Login/login.jsx';
import AdminPanel from './components/pages/Admin/AdminPanel.jsx';
import KitchenCook from './components/pages/Cook/KitchenCook.jsx';
import KitchenWaiter from './components/pages/Waiter/kitchen/Kitchen.jsx';
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
    },
    {
      path: '/waiter/kitchen',
      element: <KitchenWaiter />
    },
    {
      path: '/cook/kitchen',
      element: <KitchenCook />
    },
    {
      path: '/admin/admin-panel',
      element: <AdminPanel />
    },

  ])

export default router;
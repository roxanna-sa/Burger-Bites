import {createBrowserRouter} from 'react-router-dom';
import Login from './components/pages/Login/login.jsx';
import Main from './components/pages/Main/main.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/main',
      element: <Main />
    }
  ])

export default router;
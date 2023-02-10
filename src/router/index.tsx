import CharacterCounter from '@components/demos/CharacterCounter';
import E2eTestDemo from '@pages/E2eTestDemo/E2eTestDemo';
import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import Login from '@pages/Login/Login';
import Booking from '@pages/Booking/Booking';
import Signup from '@pages/Signup/Signup';
import Verify from '@pages/Signup/Verify';
import VerifySuccess from '@pages/Signup/VerifySuccess';
import ForgotPassword from '@pages/ForgotPassword/ForgotPassword';
import CheckVerifyCode from '@pages/CheckVerifyCode/CheckVerifyCode';
import ResetSuccess from '@pages/ResetSuccess/ResetSuccess';
import ResetPassword from '@pages/ResetPassword/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error....</div>,
    children: [
      {
        path: 'CharacterCounter',
        element: <CharacterCounter />,
      },
      {
        path: 'e2eTestDemo',
        element: <E2eTestDemo />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>login error....</div>,
  },
  {
    path: '/booking',
    element: <Booking />,
    errorElement: <div>login error....</div>,
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <div>login error....</div>,
  },
  {
    path: '/verify',
    element: <Verify />,
    errorElement: <div>login error....</div>,
  },
  {
    path: '/verifySuccess',
    element: <VerifySuccess />,
    errorElement: <div>login error....</div>,
  },
  {
    path: '/forgotpassword',
    element: <ForgotPassword />,
  },
  {
    path: '/checkVerifyCode/:accountType',
    element: <CheckVerifyCode />,
  },
  {
    path: '/resetSuccess',
    element: <ResetSuccess />,
  },
  {
    path: '/resetPassword',
    element: <ResetPassword />,
  },
]);

export default router;

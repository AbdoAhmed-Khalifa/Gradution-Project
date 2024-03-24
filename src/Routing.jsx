import Home from './pages/Home/Home';
import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from 'react-router-dom';
import AppLayout from './pages/AppLayout/AppLayout';
import './App.css';
import Cart from './pages/Cart/Cart';
import ProductDestails, {
  loader as ProductLoader,
} from './pages/ProductDetails/ProductDestails';
import Electronics, {
  loader as electronicsLoader,
} from './pages/Categories/Electronics';
import Kindle, { loader as kindleLoader } from './pages/Categories/Kindle';
import OfficeSupplies, {
  loader as officeSuppliesLoader,
} from './pages/Categories/OfficeSupplies';
import PersonalCare, {
  loader as personalCareLoader,
} from './pages/Categories/PersonalCare';
import Coffee, { loader as coffeeLoader } from './pages/Categories/Coffee';
import Watches, { loader as watchesLoader } from './pages/Categories/Watches';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/CreateAcc';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SearchResults from './pages/SearchResults/SearchResults';
import NotFound from './pages/Not-Found/NotFound';
import ProductNavList from './pages/ProductNavList/ProductNavList';
import BestSellers from './pages/ProductNavList/pages/BestSellers';
import TVs from './pages/ProductNavList/pages/TVs';
import MobileAccessories from './pages/ProductNavList/pages/MobileAccessories';
import CamerasAccessories from './pages/ProductNavList/pages/CamerasAccessories';
import ComputerAccessories from './pages/ProductNavList/pages/ComputerAccessories';
import Headphones from './pages/ProductNavList/pages/Headphones';

import { useSelector } from 'react-redux';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cart', element: <ProtectedRoute element={<Cart />} /> },
      {
        path: '/product/:id',
        element: <ProductDestails />,
        loader: ProductLoader,
      },
      {
        path: '/electronics',
        element: <Electronics />,
        loader: electronicsLoader,
      },
      { path: '/coffee', element: <Coffee />, loader: coffeeLoader },
      { path: '/kindle', element: <Kindle />, loader: kindleLoader },
      {
        path: '/office-supplies',
        element: <OfficeSupplies />,
        loader: officeSuppliesLoader,
      },
      {
        path: '/personal-care',
        element: <PersonalCare />,
        loader: personalCareLoader,
      },
      { path: '/watches', element: <Watches />, loader: watchesLoader },
      { path: '/search', element: <SearchResults /> },
      {
        path: '/product-list',
        element: <ProductNavList />,
        children: [
          { path: 'watches', element: <Watches />, loader: watchesLoader },
          { path: 'best-sellers', element: <BestSellers /> },
          { path: 'electronics', element: <Electronics /> },
          { path: 'mobiles-accessories', element: <MobileAccessories /> },
          { path: 'computer-accessories', element: <ComputerAccessories /> },
          { path: 'tvs', element: <TVs /> },
          { path: 'cameras-accessories', element: <CamerasAccessories /> },
          { path: 'headphones', element: <Headphones /> },
        ],
      },
    ],
  },
  {
    path: '/checkout',
    element: <ProtectedRoute element={<CheckoutPage />} />,
  },
  ,
  {
    path: '/login',
    element: <SignIn />,
  },
  ,
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function Routing() {
  return <RouterProvider router={router} />;
}

function ProtectedRoute({ element }) {
  const userUid = useSelector(state => state.User.user?.uid);
  const isAuthenticated = () => {
    if (userUid) return true;
  };

  return isAuthenticated() ? element : <Navigate to="/login" replace />;
}

import Routing from './Routing';
import { LangProvider } from './contexts/lang';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CartItemsCountProvider } from './contexts/cartItemsCount';
import { AllProductsProvider } from './contexts/allProducts';
import { getAllProducts } from './firestore/firestore';
import { DarkModeProvider } from './contexts/DarkMode';
import ProductNavList from './pages/ProductNavList/ProductNavList';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cart', element: <Cart /> },
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

    ],

  },
  {path:'/product-list',element:<ProductNavList/>},
  {
    path: '/checkout',
    element: <CheckoutPage />,
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

import { useEffect, useState } from 'react';
function App() {
  const [lang, setLang] = useState('en');
  const [nums, setNums] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [darkMode, setDarkMode] = useState('light');

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setAllProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Provider store={store}>
      <DarkModeProvider value={{ darkMode, setDarkMode }}>
      <AllProductsProvider value={{ allProducts }}>
        <LangProvider value={{ lang, setLang }}>
          <CartItemsCountProvider value={{ nums, setNums }}>
            <Routing />
          </CartItemsCountProvider>
        </LangProvider>
      </AllProductsProvider>
      </DarkModeProvider>
    </Provider>
  );
}

export default App;

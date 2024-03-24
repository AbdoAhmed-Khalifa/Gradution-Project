import Routing from './Routing';
import { LangProvider } from './contexts/lang';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CartItemsCountProvider } from './contexts/cartItemsCount';
import { AllProductsProvider } from './contexts/allProducts';
import { getAllProducts } from './firestore/firestore';
import { DarkModeProvider } from './contexts/DarkMode';



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

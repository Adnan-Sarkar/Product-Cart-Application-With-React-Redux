import { useState } from "react";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [activeCartPage, setActiveCartPage] = useState(false);

  const changePageHandler = (isTrue) => {
    setActiveCartPage(isTrue);
  };

  return (
    <>
      <Provider store={store}>
        <Navbar changePageHandler={changePageHandler} />
        {activeCartPage ? <CartPage /> : <ProductsPage />}
      </Provider>
    </>
  );
}

export default App;

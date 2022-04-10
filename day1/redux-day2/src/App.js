import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ProductContainer from "./components/ProductContainer";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="header">Kiwi's Yarn Shop 🐈‍⬛ 🧶</h1>
      <div className="LayoutContainer">
        <ProductContainer />
      </div>
    </div>
  );
}

export default App;

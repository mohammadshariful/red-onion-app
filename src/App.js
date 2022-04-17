import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { MyContext } from "./MyContext/MyContext";
import AddToCart from "./Pages/AddToCart/AddToCart";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Delivery from "./Pages/Delivery/Delivery/Delivery";
import Breakfast from "./Pages/Home/Foods/Breakfast/Breakfast";
import Dinner from "./Pages/Home/Foods/Dinner/Dinner";
import FoodDetils from "./Pages/Home/Foods/FoodDetails/FoodDetils";
import Lunch from "./Pages/Home/Foods/Luch/Lunch";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
function App() {
  const [carts, setCarts] = useState([]);
  const addToCart = (food) => {
    const exits = carts.find((cart) => cart._id === food._id);
    let newCart = [];
    if (!exits) {
      newCart = [...carts, food];
    } else {
      const rest = carts.filter((cart) => cart._id !== food._id);
      newCart = [...rest, exits];
    }
    setCarts(newCart);
  };

  return (
    <>
      <MyContext.Provider value={{ addToCart, carts }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/" element={<Home />}>
            <Route index element={<Breakfast />} />
            <Route path="breakfast" element={<Breakfast />} />
            <Route path="lunch" element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
          </Route>
          <Route path="/foodDetails/:id" element={<FoodDetils />} />

          <Route path="/cart" element={<AddToCart />} />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route
            path="/delivery"
            element={
              <RequireAuth>
                <Delivery />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;

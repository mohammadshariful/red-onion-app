import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Delivery from "./Pages/Delivery/Delivery/Delivery";
import Breakfast from "./Pages/Home/Foods/Breakfast/Breakfast";
import Dinner from "./Pages/Home/Foods/Dinner/Dinner";
import Foods from "./Pages/Home/Foods/Foods/Foods";
import Lunch from "./Pages/Home/Foods/Luch/Lunch";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Foods />}>
          <Route path="breakfast" element={<Breakfast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
        </Route>
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
    </>
  );
}

export default App;

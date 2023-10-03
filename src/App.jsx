import React from "react";
import Header from "./Componenets/Header/Header";
import Home from "./Componenets/BannerPage/Home";
import Login from "./Componenets/LoginPage/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Componenets/CheckOutPage/Checkout";
import Footer from "./Componenets/Footer/Footer";
import { useStateValue } from "./Componenets/State/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Componenets/PaymentPage/Payment";
import Orders from "./Componenets/OrderPage/Orders";
const promise = loadStripe(
  "pk_test_51NusjqDqTKhDgRCw6NK48GBS5e29zyOjkbmWr16PI3rNhXJEtaLzNsQyskYOwKpkeFcDYPuSPYukn6D7jCEdbjFs00lLtKeiHk"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((userauth) => {
      // console.log(userauth);
      if (userauth) {
        dispatch({
          type: "SET_USER",
          user: userauth,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/Orders"
            element={
              <>
                <Header />

                <Orders />

                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

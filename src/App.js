import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BaseLayout from "./shared/layouts/BaseLayout/BaseLayout";
import Login from "./pages/Login/Login";
import AuthLayout from "./shared/layouts/AuthLayout/AuthLayout";

function App() {
  // var products;
  // useEffect(() => {
  //   axios.get("/api/products").then((res) => console.log(res.data));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          {/* <Route path="/" element={<LandingPage />} /> */}
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

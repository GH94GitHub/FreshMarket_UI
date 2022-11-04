import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BaseLayout from "./shared/layouts/BaseLayout/BaseLayout";
import Login from "./pages/Login/Login";
import AuthLayout from "./shared/layouts/AuthLayout/AuthLayout";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<BaseLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

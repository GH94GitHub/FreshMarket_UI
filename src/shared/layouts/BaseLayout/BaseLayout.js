import { Outlet } from "react-router";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

function BaseLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseLayout;

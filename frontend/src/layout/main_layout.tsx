import { Outlet } from "react-router-dom";
import { Navbar1 } from "../components/navbar1";

function MainLayout() {
  return (
    <>
      <Navbar1 />

      <Outlet />
    </>
  );
}

export default MainLayout;

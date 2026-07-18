import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // your landing navbar

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PublicLayout;

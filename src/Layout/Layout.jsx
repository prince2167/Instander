import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, SuggestionAccounts } from "../components/index";

const Layout = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <div className="flex   sm:mb-0">
        <Sidebar />
        <main>
          <Outlet />
        </main>
        <SuggestionAccounts />
      </div>
    </div>
  );
};

export { Layout };

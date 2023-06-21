import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, SuggestionAccounts } from "../components/index";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main>
          <Outlet />
        </main>
        <SuggestionAccounts />
      </div>
    </>
  );
};

export { Layout };

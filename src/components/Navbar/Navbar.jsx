import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="shadow shadow-white-500/40 py-1 px-8 sticky top-0 z-30 bg-white">
      <NavLink to="/" className="flex items-center gap-4">
        <img
          className="h-16 w-16"
          src="https://res.cloudinary.com/drre76xpz/image/upload/v1687520238/1005491_qrzn8x.png"
          alt=""
        />
        <h1 className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-lightBlue to-orange">
          Instander
        </h1>
      </NavLink>
    </nav>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="shadow shadow-white-500/40 py-1 px-8 sticky top-0 z-30 bg-white">
      <NavLink to="/" className="flex items-center gap-4">
        <img
          className="h-16 w-16"
          src="https://cdn-icons-png.flaticon.com/512/1005/1005491.png?w=740&t=st=1687350364~exp=1687350964~hmac=8d1a0522c2ff4e92133d00db21fabe68972ccc8d2d99b660caea9a669e988e66"
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

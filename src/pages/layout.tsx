import { Outlet, Link } from "react-router-dom";

export default function PageLayoute() {
  return (
    <main className="max-w-[1440px] mx-auto px-2">
      <NavBar />

      {/* children */}
      <Outlet />
    </main>
  );
}

function NavBar() {
  return (
    <nav className="navbar bg-base-200 shadow-sm">
      {/* start */}
      <div className="navbar-start">
        <Link className="btn " to={"/"}>
          Home
        </Link>
      </div>

      {/* center */}
      <div className="navbar-center"></div>

      {/* end */}
      <div className="navbar-end">
        <Link to="/auth/login" className="btn font-bold">
          Login
        </Link>
      </div>
    </nav>
  );
}

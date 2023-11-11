import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AuthLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/auth" || pathname === "/auth/") {
      navigate("/auth/login", { replace: true });
    }
  }, [pathname, navigate]);

  return (
    <main className="flex flex-col items-center h-screen">
      <div className="w-full max-w-md bg-base-200 rounded p-8 mt-10">
        <Outlet />
      </div>
    </main>
  );
}

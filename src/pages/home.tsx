import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col mt-52 gap-2">
        <h1 className="card-title text-3xl">Welcome guest</h1>
        <Link to="/auth/login" className="btn">
          Login
        </Link>
      </div>
    </section>
  );
}

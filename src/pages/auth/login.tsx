import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formState, setFormState] = useState({
    email: null,
    password: null,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event?.target?.name;
    const value = event?.target?.value;

    setFormState((state) => ({
      ...state,
      [name.toLowerCase()]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log(formState);
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <h1 className="card-title">Login form</h1>
        <span className="text-sm">Were glad your back.</span>
      </div>

      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <FieldCard label="Email" onChange={handleChange} />
        <FieldCard label="Password" isPassword onChange={handleChange} />
        <button type="submit" className=" btn w-full btn-primary">
          Login
        </button>

        <div className="flex flex-col items-center">
          <Link to="#" className="link">
            Forgot your password?
          </Link>
          <span>
            Not a user yet?
            <Link className="link" to="#">
              Register
            </Link>
            now.
          </span>
        </div>
      </form>
    </div>
  );
}

interface propsObj {
  label: string;
  isPassword?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FieldCard(props: propsObj) {
  const [show, setShow] = useState(false);
  const { label, isPassword, onChange } = props;
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="email">{label}</label>
      <input
        name={label.toLowerCase()}
        onChange={onChange}
        className="input"
        type={
          label.toLowerCase() === "password"
            ? show
              ? "text"
              : "password"
            : label.toLowerCase()
        }
        id="email"
        placeholder="your@mail.com"
      />
      {isPassword && (
        <div className="flex items-center gap-2">
          <input
            onChange={() => setShow(!show)}
            className="input focus:outline-none input-md"
            type="checkbox"
            id="showPassword"
          />
          <label htmlFor="showPassword">Show password</label>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import {
  getProviders,
  signIn,
  getCsrfToken,
  getSession,
} from "next-auth/react";
import Router from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const signInUser = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      setMessage(res.error);
      setTimeout(() => setMessage(""), 2000);
    } else {
      return Router.push("/dashboard/my-applications");
    }
  };

  const changeSignUp = (e) => {
    e.preventDefault();
    Router.push("/register");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[color:var(--gray)] select-none">
      <div className="flex flex-col items-center bg-[color:var(--skin)] rounded-2xl p-8 space-y-4">
        <span className="text-2xl font-bold">Sign in to AnonyApp</span>
        <form
          className="flex flex-col space-y-3 justify-center items-center"
          onSubmit={(e) => signInUser(e)}
        >
          <div className="flex flex-col gap-1">
            <span> Email: </span>
            <input
              className="p-2 rounded-lg"
              type="text"
              name="email"
              placeholder="johndoe@example.com"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <span> Password: </span>
            <input
              className="p-2 rounded-lg"
              placeholder="password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <span className="text-red-500 grow text-xs leading-none">
            {message}
          </span>
          <button
            type="submit"
            className="rounded-lg pt-2 pb-2 pl-4 pr-4 bg-white hover:bg-[color:var(--blue)] transition-colors"
          >
            Log in
          </button>
        </form>
        <div className="flex gap-2 text-sm">
          <span> New to AnonyApp?</span>
          <a
            onClick={(e) => changeSignUp(e)}
            className="cursor-pointer underline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

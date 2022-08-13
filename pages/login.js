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
    } else {
      return Router.push("/");
    }
  };

  const changeSignUp = (e) => {
    e.preventDefault();
    Router.push("/register");
  };

  return (
    <div>
      <div className="fixed top-1/3 left-1/3 bg-slate-700 h-1/3 w-1/3 text-center text-white rounded-2xl space-y-3 p-5">
        <h1 className="text-2xl font-bold">My Internships</h1>
        <form
          className="space-y-5 justify-center items-center"
          onSubmit={(e) => signInUser(e)}
        >
          <div className="">
            <input
              className="bg-slate-700 border-0 border-b-2 border-purple-500"
              type="text"
              name="email"
              placeholder="johndoe@gexample.com"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              className="bg-slate-700 border-0 border-b-2 border-purple-500"
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <p style={{ color: "red" }}>{message}</p>
          <button type="submit" className="bg-purple-500 p-2 rounded">
            Login
          </button>
        </form>
        <div>New to My Internships?</div>
        <button
          onClick={(e) => changeSignUp(e)}
          className="bg-purple-500 p-2 rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

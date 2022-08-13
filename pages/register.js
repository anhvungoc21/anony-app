import Router from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Register() {
  const [message, setMessage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpUser = async (e) => {
    e.preventDefault();
    if (!(name && email && password)) {
      setMessage("Please fill out all fields!");
      return;
    }
    setMessage(null);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
    }
    if (data.message == "Registered successfully!") {
      let options = { redirect: false, email, password };
      const res = signIn("credentials", options);
      return Router.push("/testing");
    }
  };

  const changeLogin = (e) => {
    e.preventDefault();
    Router.push("/login");
  };

  return (
    <div>
      <div className="fixed top-1/4 left-1/4 bg-slate-700 h-1/2 w-1/2 text-center text-white rounded-2xl space-y-3 p-5">
        <h1 className="text-2xl font-bold">My Internships</h1>
        <form
          className="space-y-5 justify-center items-center"
          onSubmit={(e) => signUpUser(e)}
        >
          <div>
            <input
              className="bg-slate-700 border-0 border-b-2 border-purple-500"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              className="bg-slate-700 border-0 border-b-2 border-purple-500"
              type="email"
              name="email"
              placeholder="Email"
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
            Sign Up
          </button>
        </form>
        <div>Are you a returning user?</div>
        <button
          onClick={(e) => changeLogin(e)}
          className="bg-purple-500 p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

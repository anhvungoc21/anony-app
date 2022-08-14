import Router from "next/router";
import Head from "next/head";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Register() {
  const [message, setMessage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gradYear, setGradYear] = useState(2025);

  const signUpUser = async (e) => {
    e.preventDefault();
    if (!(name && gradYear && email && password)) {
      setMessage("Please fill out all fields!");
      return;
    }
    setMessage(null);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, gradYear }),
    });

    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
    }
    if (data.message == "Registered successfully!") {
      let options = { redirect: false, email, password };
      const res = signIn("credentials", options);
      return Router.push("/dashboard/my-applications");
    }
  };

  const changeLogin = (e) => {
    e.preventDefault();
    Router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[color:var(--gray)] select-none">
      <Head>
        <title>Sign Up for AnonyApp</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col items-center bg-[color:var(--skin)] rounded-2xl p-8 space-y-4">
        <span className="text-2xl font-bold">Sign up for AnonyApp</span>
        <form
          className="flex flex-col space-y-3 justify-center items-center"
          onSubmit={(e) => signUpUser(e)}
        >
          <div className="flex flex-col gap-1">
            <span> Your name: </span>
            <input
              className="p-2 rounded-lg"
              type="text"
              name="name"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <span> Graduation Year: </span>
            <input
              className="p-2 rounded-lg"
              type="number"
              name="gradyear"
              placeholder="2025"
              onChange={(e) => setGradYear(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <span> Email: </span>
            <input
              className="p-2 rounded-lg"
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <span> Password: </span>
            <input
              className="p-2 rounded-lg"
              type="password"
              name="password"
              placeholder="password"
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
            Sign Up
          </button>
        </form>
        <div className="flex gap-2 text-sm">
          <span>Are you a returning user?</span>
          <a
            onClick={(e) => changeLogin(e)}
            className="cursor-pointer underline"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

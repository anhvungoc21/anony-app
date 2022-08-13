import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-7 w-screen h-screen">
      <div
        id="nav"
        className="flex bg-[color:var(--skin)] justify-between pl-28 pr-60 pt-4"
      >
        <span
          id="name"
          className="flex items-center text-5xl text-[color:var(--blue)] select-none"
        >
          AnonyApp
        </span>
        <div
          id="sign-in"
          className="flex items-center justify-center text-3xl gap-8"
        >
          <Link id="log-in" href="/login">
            <a className="hover:[color:var(--blue)] transition-colors">
              Log in
            </a>
          </Link>
          <Link id="sign-up" href="/register">
            <a className="hover:[color:var(--blue)] transition-colors">
              Sign up
            </a>
          </Link>
        </div>
      </div>
      <div
        id="main"
        className="row-span-6 bg-[color:var(--skin)] grid grid-cols-2"
      >
        <div id="intro-wrapper" className="flex-col p-32 items-center">
          <span className="text-5xl [font-weight:var(--bold-text)] select-none">
            Keep track of your applications AND others'. Anonymously.
          </span>
          <div
            id="sign-in-intro"
            className="flex gap-8 items-center justify-start p-8 pl-0 text-2xl"
          >
            <Link id="log-in" href="/login">
              <a className="hover:[color:var(--blue)] transition-colors bg-white pt-4 pb-4 pr-8 pl-8 rounded-lg">
                Log in
              </a>
            </Link>
            <Link id="sign-up" href="/register">
              <a className="hover:[color:var(--blue)] transition-colors bg-white pt-4 pb-4 pr-8 pl-8 rounded-lg">
                Sign up
              </a>
            </Link>
          </div>
        </div>
        <div id="demo-container" className="pl-32 pr-48 pt-32 pb-36">
          <div className="bg-white p-8 rounded-lg">
            <Image
              src="/demo.png"
              alt="demo"
              layout="intrinsic"
              width={1920}
              height={974}
              className="rounded-lg"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

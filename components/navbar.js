import { BiSpreadsheet, BiWorld, BiUserCircle } from "react-icons/bi";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="h-full w-[240px] bg-[color:var(--gray)] flex flex-col pl-4 pr-4 pb-8 pt-8 gap-2 select-none">
      <div
        id="logo"
        className="text-4xl [font-weight:var(--bold-text)] pb-4 pl-2 text-[color:var(--blue)]"
      >
        AnonyApp
      </div>
      <Link id="my-applications" href="/dashboard/my-applications">
        <a className="wrap-0 flex p-2 bg-white rounded-md hover:bg-[color:var(--skin)] nav--link select-none cursor-pointer gap-1">
          <BiSpreadsheet size={28} />
          <span> My Applications</span>
        </a>
      </Link>
      <Link id="explore" href="/dashboard/explore">
        <a className="wrap-0 flex p-2 bg-white rounded-md hover:bg-[color:var(--skin)] nav--link select-none cursor-pointer gap-1">
          <BiWorld size={28} />
          <span> Explore </span>
        </a>
      </Link>
      <Link id="my-profile" href="/dashboard/my-profile">
        <a className="wrap-0 flex p-2 bg-white rounded-md hover:bg-[color:var(--skin)] nav--link select-none cursor-pointer gap-1">
          <BiUserCircle size={28} />
          <span> My Profile </span>
        </a>
      </Link>
    </div>
  );
}

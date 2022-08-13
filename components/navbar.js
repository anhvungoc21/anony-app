import {BiSpreadsheet} from "react-icons/bi"

export default function NavBar() {
  return (
    <div className="h-full w-1/12 bg-[color:var(--gray)] flex-col pl-4 pr-4 pb-8 pt-8 items-start">
      <div id="logo">LOGO</div>
      <div id="my-applications">
      <BiSpreadsheet/>
      WHAT
      </div>
      <div id="others-applications">2</div>
      <div id="my-profile">3</div>
    </div>
  );
}

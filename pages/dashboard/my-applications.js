import NavBar from "../../components/navBar.js";

// NavBar on left side
// The rest is the main dashboard

export default function DashBoard() {
  return (
    <div className="flex h-screen w-screen">
      <NavBar></NavBar>
      <div></div>
    </div>
  );
}

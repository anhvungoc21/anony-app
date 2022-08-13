import NavBar from "../../components/navbar.js";
import LocationDropdown from "../../components/LocationDropdown.js";
import StatusDropdown from "../../components/StatusDropdown.js";
import JobCategoryDropdown from "../../components/JobCategoryDropdown.js";
import { useState } from "react";

// NavBar on left side
// The rest is the main dashboard

export default function DashBoard() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [positionUrl, setPositionUrl] = useState("");
  const [message, setMessage] = useState(null);

  const addApplication = (e) => {
    e.preventDefault();
    if (
      !(
        companyName &&
        position &&
        jobCategory &&
        location &&
        status &&
        dateApplied &&
        positionUrl
      )
    ) {
      setMessage("Please fill out all field!");
      return;
    }
  };
  return (
    <div className="flex h-screen w-screen">
      <NavBar />
      <div id="main" className="grid grid-rows-6 grow bg-[color:var(--skin)]">
        <div
          id="title"
          className=" flex items-center p-8 [font-weight:var(--bold-text)] text-4xl text-[color:var(--blue)]"
        >
          My Applications
        </div>
        <div
          id="form-portion"
          className="row-span-2 flex pl-8 pr-8 pb-8 text-sm"
        >
          <div
            id="form"
            className="grid grid-rows-4 grid-cols-2 grid-flow-col-dense bg-white items-center grow rounded-xl"
          >
            <div
              id="company-name"
              className="flex w-full h-full items-center p-4 gap-1"
            >
              <span>Company Name:</span>
              <input
                className="border-box flex rounded-lg bg-[color:var(--gray)] m-2 h-full"
                placeholder="Google"
              ></input>
            </div>
            <div
              id="position"
              className="flex w-full h-full items-center p-4 gap-1"
            >
              <span>Position:</span>
              <input
                className="border-box flex rounded-lg bg-[color:var(--gray)] m-2 h-full"
                placeholder="Software Engineer"
              ></input>
            </div>
            <div
              id="category"
              className="flex w-full h-full items-center p-4 gap-1"
            >
              <span>Job Category:</span>
              <JobCategoryDropdown />
            </div>
            <div className="flex w-full h-full items-center p-4 gap-1">
              <span>Location:</span>
              <LocationDropdown />
            </div>
            <div className="flex w-full h-full items-center p-4 gap-1">
              <span>Status:</span>
              <StatusDropdown />
            </div>
            {/* Conditional rendẻing for date applied based on status? */}
            <div className="flex w-full h-full items-center p-4 gap-1">
              <span>Date Applied:</span>
              <input
                className="flex rounded-lg bg-[color:var(--gray)] m-2 h-full"
                placeholder="mm/dd/yyyy..."
              ></input>
            </div>
            <div className="flex w-full h-full items-center p-4 gap-1">
              <span>URL to position:</span>
              <input
                className="flex rounded-lg bg-[color:var(--gray)] m-2 h-full"
                placeholder="www.jobs.google.com"
              ></input>
            </div>
            <div className="flex w-full h-full items-center p-4 gap-1 justify-end">
              <button
                onClick={(e) => addApplication(e)}
                className="flex items-center rounded-lg bg-[color:var(--gray)] m-2 h-full p-2"
              >
                Add Application
              </button>
            </div>
            <p style={{ color: "red" }}>{message}</p>
          </div>
        </div>
        <div id="my-listings" className="row-span-3 p-8">
          <div className="bg-white rounded-xl w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div id="email-field" class="login-field">
<span>Email</span>
<div id="email-input-wrapper" class="input-wrapper">
  <ion-icon name="mail-outline" class="login__icon"></ion-icon>
  <input id="email-input" placeholder="Enter your email..." ></input>
  <ion-icon id="dummy-icon" name="eye-off-outline" class="login__icon"></ion-icon>
</div>
</div> */
}

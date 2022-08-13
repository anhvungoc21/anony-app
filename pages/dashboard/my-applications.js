import NavBar from "../../components/NavBar.js";
import LocationDropdown from "../../components/LocationDropdown.js";
import StatusDropdown from "../../components/StatusDropdown.js";
import JobCategoryDropdown from "../../components/JobCategoryDropdown.js";
import ListingItem from "../../components/ListingItem.js";
import { useState } from "react";

// NavBar on left side
// The rest is the main dashboard

export default function DashBoard() {
  // FORM STATES
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [positionUrl, setPositionUrl] = useState("");
  const [message, setMessage] = useState(null);

  // LISTINGS STATES
  const [listings, setListings] = useState([
    {
      companyName: "Facebook",
      position: "Back-end Developer",
      status: "Applied",
      dateApplied: "08/13/2022",
    },
  ]);

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
      setTimeout(() => setMessage(""), 3000);
    }
  };
  return (
    <div className="flex h-screen w-screen">
      <NavBar />
      <div id="main" className="grid grid-rows-6 grow bg-[color:var(--skin)]">
        <div
          id="title"
          className="flex items-center p-8 [font-weight:var(--bold-text)] text-4xl text-[color:var(--blue)] select-none"
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
              className="flex w-full h-full items-center p-4 gap-1 hover:bg-[color:var(--light-blue)] transition-colors select-none"
            >
              <span>Company Name:</span>
              <input
                className="grow p-2 border-box flex rounded-lg bg-[color:var(--gray)] m-2 h-full "
                placeholder="Google"
              ></input>
            </div>
            <div
              id="position"
              className="grow flex w-full h-full items-center p-4 gap-1 hover:bg-[color:var(--light-blue)] transition-colors select-none"
            >
              <span>Position:</span>
              <input
                className="grow p-2 border-box flex rounded-lg bg-[color:var(--gray)] m-2 h-full "
                placeholder="Software Engineer"
              ></input>
            </div>
            <div
              id="category"
              className="flex w-full h-full items-center p-4 gap-1 hover:bg-[color:var(--light-blue)] transition-colors select-none"
            >
              <span>Job Category:</span>
              <JobCategoryDropdown />
            </div>
            <div className="flex w-full h-full items-center p-4 gap-1 hover:bg-[color:var(--light-blue)] transition-colors select-none">
              <span>Location:</span>
              <LocationDropdown />
            </div>
            <div className="flex w-full h-full items-center p-4 gap-1 hover:bg-[color:var(--light-blue)] transition-colors select-none">
              <span>Status:</span>
              <StatusDropdown />
            </div>
            {/* Conditional rendẻing for date applied based on status? */}
            <div className="flex w-full h-full items-center p-4 gap-1 hover:bg-[color:var(--light-blue)] transition-colors select-none">
              <span>Date Applied:</span>
              <input
                className="grow p-2 border-box flex rounded-lg bg-[color:var(--gray)] m-2 h-full"
                placeholder="mm/dd/yyyy"
              ></input>
            </div>
            <div className="flex w-full h-full items-center p-4 gap-1 hover:bg-[color:var(--light-blue)] transition-colors select-none">
              <span>URL:</span>
              <input
                className="grow p-2 border-box flex rounded-lg bg-[color:var(--gray)] m-2 h-full "
                placeholder="www.jobs.google.com"
              ></input>
            </div>
            <div className="flex w-full h-full items-center p-4 gap-1 justify-end">
              <span style={{ color: "red" }}>{message}</span>
              <button
                onClick={(e) => addApplication(e)}
                className="flex items-center rounded-lg bg-[color:var(--gray)] m-2 h-full p-2 hover:bg-[color:var(--light-blue)] transition-colors select-none"
              >
                Add Application
              </button>
            </div>
          </div>
        </div>
        <div id="my-listings" className="row-span-3 p-8">
          <div className="flex flex-col items-start bg-white rounded-xl w-full h-full p-2 gap-4">
            <div
              id="columns"
              className="grid grid-cols-9 w-full rounded-lg bg-[color:var(--light-blue)] p-4 [font-weight:"
            >
              <span className="col-span-2">Company Name</span>
              <span className="col-span-2">Position</span>
              <span className="col-span-2">Status</span>
              <span className="col-span-2">Date Applied</span>
            </div>
            <div
              id="entries"
              className="flex flex-col grow w-full gap-2 overflow-y-scroll"
            >
              {listings.map((entry) => (
                <ListingItem
                  companyName={entry.companyName}
                  position={entry.position}
                  status={entry.status}
                  dateApplied={entry.dateApplied}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

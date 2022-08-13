import { useState } from "react";
import NavBar from "../../components/NavBar";
import ExploreListingItem from "../../components/ExploreListingItem";

export default function Explore() {
  const [listings, setListings] = useState([
    {
      companyName: "Google",
      position: "SWE",
      status: "Applied",
      dateApplied: "08/12/2022",
      url: "https://discord.com/channels/@me/1008008351440965642",
    },
  ]);
  return (
    <div className="flex h-screen w-screen">
      <NavBar />
      <div id="main" className="grid grid-rows-6 grow bg-[color:var(--skin)]">
        <div className="flex flex-col p-8 grow">
          <span
            id="title"
            className="grow flex items-center [font-weight:var(--bold-text)] text-4xl text-[color:var(--blue)] select-none"
          >
            Explore
          </span>
          <span
            id="title-small-text"
            className="text-sm leading-none text-[color:var(--blue)] italic"
          >
            See where others are applying to!
          </span>
        </div>

        <div id="my-listings" className="row-span-3 p-8 pt-0">
          <div className="flex flex-col items-start bg-white rounded-xl w-full h-full p-2 gap-4">
            <div
              id="columns"
              className="grid grid-cols-9 w-full rounded-lg bg-[color:var(--light-blue)] p-4 [font-weight:var(--bold-text)]"
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
              {listings.map((entry, i) => (
                <ExploreListingItem
                  key={`listing-item-${i}`}
                  companyName={entry.companyName}
                  position={entry.position}
                  status={entry.status}
                  dateApplied={entry.dateApplied}
                  url={entry.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

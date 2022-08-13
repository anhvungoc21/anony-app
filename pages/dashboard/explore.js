import NavBar from "../../components/NavBar";
export default function Explore() {
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
              {/* {listings.map((entry, i) => (
                <ListingItem
                  key={`listing-item-${i}`}
                  companyName={entry.companyName}
                  position={entry.position}
                  status={entry.status}
                  dateApplied={entry.dateApplied}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

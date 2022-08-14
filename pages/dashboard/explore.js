import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import ExploreListingItem from "../../components/ExploreListingItem";
import ItemModal from "../../components/ItemModal";
import ModalOverlay from "../../components/ModalOverlay";

export default function Explore() {
  const [listings, setListings] = useState([
    {
      companyName: "Google",
      position: "Back-end Developer",
      category: "Architecture and Engineering",
      status: "Applied",
      location: "New York",
      dateApplied: "08/12/2022",
      url: "https://discord.com/channels/@me/1008008351440965642",
    },
  ]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [filters, setFilters] = useState(["", "", ""]);
  const [itemModal, setItemModal] = useState({});
  const [displayModal, setDisplayModal] = useState(false);
  const [displayModalOverlay, setDisplayModalOverlay] = useState(false);

  const handleDisplayModal = (bool) => {
    setDisplayModal(bool);
    setDisplayModalOverlay(bool);
  };

  const handleFilter = (key, i) => {
    console.log(key);
    const left = filters.slice(0, i);
    const right = filters.slice(i + 1);
    setFilters(left.concat([key]).concat(right));
  };

  useEffect(() => {
    const [company, position, status] = filters;
    const filteredItems = listings.filter((item) => {
      return (
        (company == "" || item.companyName == company) &&
        (position == "" || item.position == position) &&
        (status == "" || item.status == status)
      );
    });
    setFilteredListings(filteredItems);
  }, [filters]);

  return (
    <div className="h-screen w-screen">
      {displayModalOverlay ? (
        <ModalOverlay handleDisplayModal={() => handleDisplayModal(false)} />
      ) : null}
      {displayModal ? <ItemModal itemRecord={itemModal} /> : null}
      <div className="flex h-full w-full">
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

          <div id="my-listings" className="row-span-5 p-8 pt-0">
            <div className="flex flex-col items-start bg-white rounded-xl w-full h-full p-2 gap-4">
              <div
                id="columns"
                className="grid grid-cols-9 w-full rounded-lg bg-[color:var(--light-blue)] p-4 [font-weight:var(--bold-text)]"
              >
                <div className="col-span-2">
                  <select
                    className="cursor-pointer bg-transparent"
                    onChange={(e) => handleFilter(e.target.value, 0)}
                    defaultValue=""
                  >
                    <option value="">Company</option>
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Snap">Snap</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <select
                    className="cursor-pointer bg-transparent"
                    onChange={(e) => handleFilter(e.target.value, 1)}
                    defaultValue=""
                  >
                    <option value="">Position</option>
                    <option value="Back-end Developer">
                      Back-end Developer
                    </option>
                    <option value="Front-end Developer">
                      Front-end Developer
                    </option>
                    <option value="Full-stack Developer">
                      Full-stack Developer
                    </option>
                  </select>
                </div>
                <div className="col-span-2">
                  <select
                    className="cursor-pointer bg-transparent"
                    onChange={(e) => handleFilter(e.target.value, 2)}
                    defaultValue=""
                  >
                    <option value="">Status</option>
                    <option value="Applied">Applied</option>
                    <option value="Online Test">Online Test</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Accepted">Accepted</option>
                  </select>
                </div>
                <span className="col-span-2">Date Applied</span>
              </div>
              <div
                id="entries"
                className="flex flex-col grow w-full gap-2 overflow-y-scroll scrollbar-hide"
              >
                {filters.every((filter) => filter == "")
                  ? listings.map((entry, i) => (
                      <ExploreListingItem
                        key={`listing-item-${i}`}
                        companyName={entry.companyName}
                        position={entry.position}
                        status={entry.status}
                        dateApplied={entry.dateApplied}
                        url={entry.url}
                        setItemModal={() => setItemModal(entry)}
                        handleDisplayModal={() => handleDisplayModal(true)}
                      />
                    ))
                  : filteredListings.map((entry, i) => (
                      <ExploreListingItem
                        key={`listing-item-${i}`}
                        companyName={entry.companyName}
                        position={entry.position}
                        status={entry.status}
                        dateApplied={entry.dateApplied}
                        url={entry.url}
                        setItemModal={() => setItemModal(entry)}
                        handleDisplayModal={() => handleDisplayModal(true)}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

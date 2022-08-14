import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import ExploreListingItem from "../../components/ExploreListingItem";
import ItemModal from "../../components/ItemModal";
import ModalOverlay from "../../components/ModalOverlay";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { BiRefresh } from "react-icons/bi";

export default function Explore() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [filters, setFilters] = useState(["", "", ""]);
  const [itemModal, setItemModal] = useState({});
  const [displayModal, setDisplayModal] = useState(false);
  const [displayModalOverlay, setDisplayModalOverlay] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const { data: session, status } = useSession();

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
        (position == "" || item.jobPosition == position) &&
        (status == "" || item.jobStatus == status)
      );
    });
    setFilteredListings(filteredItems);
  }, [filters]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/internship/getExploreInternships", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await res.json();
      setListings(json.data);
    })();
  }, [refresh, session]);

  const refreshMyApplications = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Explore</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                <button
                  onClick={refreshMyApplications}
                  className="flex bg-white col-span-1 rounded-lg hover:bg-[color:var(--skin)] transition-colors justify-center items-center "
                >
                  <BiRefresh size={28} />
                </button>
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
                        position={entry.jobPosition}
                        status={entry.jobStatus}
                        dateApplied={entry.dateApplied}
                        url={entry.positionUrl}
                        setItemModal={() => setItemModal(entry)}
                        handleDisplayModal={() => handleDisplayModal(true)}
                      />
                    ))
                  : filteredListings.map((entry, i) => (
                      <ExploreListingItem
                        key={`listing-item-${i}`}
                        companyName={entry.companyName}
                        position={entry.jobPosition}
                        status={entry.jobStatus}
                        dateApplied={entry.dateApplied}
                        url={entry.positionUrl}
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

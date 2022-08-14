import { useRef } from "react";

export default function ExploreListingItem({
  companyName,
  position,
  status,
  dateApplied,
  url,
  setItemModal,
  handleDisplayModal,
}) {
  const thisRef = useRef(null);
  const handleTransition = (bool) => {
    const thisNode = thisRef.current;
    if (bool) {
      thisNode.classList.add("jiggle-up");
    } else {
      thisNode.classList.remove("jiggle-up");
    }
  };

  return (
    <div
      className="grid grid-cols-9 w-full rounded-lg bg-[color:var(--gray)] p-4 justify-center cursor-pointer transition-all"
      onClick={() => {
        setItemModal();
        handleDisplayModal();
      }}
      ref={thisRef}
      onMouseOver={() => handleTransition(true)}
      onMouseLeave={() => handleTransition(false)}
    >
      <div id="company-name" className="col-span-2 flex items-center">
        {companyName}
      </div>
      <div id="position" className="col-span-2 flex items-center">
        {position}
      </div>
      <div id="status" className="col-span-2 flex items-center">
        {status}
      </div>
      <div id="date-applied" className="col-span-2 flex items-center">
        {dateApplied}
      </div>
      <a
        className="bg-white rounded-lg p-1 hover:bg-[color:var(--skin)] transition-colors text-center"
        href={url}
      >
        Apply
      </a>
    </div>
  );
}

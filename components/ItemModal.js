export default function ItemModal({ itemRecord }) {
  return (
    <div className="fixed top-1/2 right-1/2 flex flex-col bg-[color:var(--skin)] rounded-2xl pl-4 pt-8 pr-8 pb-8 translate-x-1/2 -translate-y-1/2 gap-1">
      <span id="position" className="flex items-center text-2xl font-bold ">
        {itemRecord.position}
      </span>
      <span
        id="companyName-location"
        className=""
      >{`${itemRecord.companyName} | ${itemRecord.location}`}</span>
      <span id="category" className="flex items-center text-sm">
        {itemRecord.category}
      </span>
      <div id="url" className="">
        <span className="[font-weight:var(--semi-bold-text)]">
          Link to position:
        </span>
        <span> {itemRecord.url}</span>
      </div>
      <div id="date-applied" className="">
        <span className="[font-weight:var(--semi-bold-text)]">
          Date Applied:{" "}
        </span>
        <span>{itemRecord.dateApplied}</span>
      </div>
      <div id="date-applied" className="">
        <span className="[font-weight:var(--semi-bold-text)]">
          Application Status:
        </span>
        <span> {itemRecord.status}</span>
      </div>
    </div>
  );
}

export default function ExploreListingItem({
  companyName,
  position,
  status,
  dateApplied,
  url,
}) {
  return (
    <div className="grid grid-cols-9 w-full rounded-lg bg-[color:var(--gray)] p-4 justify-center">
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

export default function StatusDropdown({ setJobStatus }) {
  return (
    <select
      onChange={(e) => setJobStatus(e.target.value)}
      className="grow flex rounded-lg bg-[color:var(--gray)] m-2 h-full
    cursor-pointer pl-2"
      defaultValue=""
    >
      <option value="" disabled>
        Choose an application status
      </option>
      <option value="Applied">Applied</option>
      <option value="Online Test">Online Test</option>
      <option value="Interview">Interview</option>
      <option value="Rejected">Rejected</option>
      <option value="Accepted">Accepted</option>
    </select>
  );
}

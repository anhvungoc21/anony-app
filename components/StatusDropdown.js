export default function StatusDropdown({ setJobStatus }) {
  return (
    <select
      onChange={(e) => setJobStatus(e.target.value)}
      className="flex rounded-lg bg-[color:var(--gray)] m-2 h-full"
    >
      <option value="">Choose a status</option>
      <option value="Applied">Applied</option>
      <option value="Online Test">Online Test</option>
      <option value="Interview">Interview</option>
      <option value="Rejected">Rejected</option>
      <option value="Accepted">Accepted</option>
    </select>
  );
}

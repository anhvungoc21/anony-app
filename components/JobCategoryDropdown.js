export default function JobCategoryDropdown() {
  return (
    <select
      className="grow flex rounded-lg bg-[color:var(--gray)] m-2 h-full cursor-pointer pl-2"
      defaultValue=""
    >
      <option value="" disabled>
        Choose a category
      </option>
      <option value="Architechture and Engineering">
        Architechture and Engineering
      </option>
      <option value="Arts and entertainment">Arts and entertainment</option>
      <option value="Bussiness and Administration">
        Bussiness and Administration
      </option>
      <option value="Communications">Communications</option>
      <option value="Education">Education</option>
      <option value="Science and Technology">Science and Technology</option>
      <option value="Government">Government</option>
      <option value="Health and Medicine">Health and Medicine</option>
      <option value="Law and Public Policy">Law and Public Policy</option>
      <option value="Sales">Sales</option>
    </select>
  );
}

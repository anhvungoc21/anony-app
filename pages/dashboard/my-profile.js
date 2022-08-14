import NavBar from "../../components/NavBar";
export default function MyProfile() {
  return (
    <div className="flex h-screen w-screen">
      <NavBar />
      <div id="main" className="grid grid-rows-6 grow bg-[color:var(--skin)]">
        <div
          id="title"
          className="flex items-center p-8 [font-weight:var(--bold-text)] text-4xl text-[color:var(--blue)] select-none"
        >
          My Profile
        </div>
        <div id="profile-wrapper" className="flex row-span-5 p-64 pt-16">
          <div
            id="profile"
            className="grow p-12 grid grid-cols-2 bg-white gap-4 rounded-lg"
          >
            <div id="personal-info" className="flex flex-col gap-8 ">
              <span className="flex [font-weight:var(--bold-text)] text-3xl items-center">
                {" "}
                Personal Info
              </span>
              <div className="flex items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Name:{" "}
                </span>
                <input
                  className="p-2 rounded-lg bg-[color:var(--gray)] grow"
                  type="text"
                  name="name"
                  placeholder="First Last"
                ></input>
              </div>
              <div className="flex items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Email:{" "}
                </span>
                <input
                  className="p-2 rounded-lg bg-[color:var(--gray)] grow"
                  type="text"
                  name="email"
                  placeholder="johndoe@example.com"
                ></input>
              </div>
              <div className="flex items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Graduation Year:{" "}
                </span>
                <input
                  className="p-2 rounded-lg bg-[color:var(--gray)] grow"
                  type="text"
                  name="grad-year"
                  placeholder="2025"
                ></input>
              </div>
            </div>
            <div id="statistics" className="flex flex-col gap-8">
              <span className="flex justify-end [font-weight:var(--bold-text)] text-3xl">
                Your Statistics
              </span>
              <div className="flex justify-end items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Jobs Applied:{" "}
                </span>
                <span data-jobs-applied="">0</span>
              </div>
              <div className="flex justify-end items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  On-going:{" "}
                </span>
                <span data-onGoing="">0</span>
              </div>
              <div className="flex justify-end items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Accepted:{" "}
                </span>
                <span data-acceptance="">0</span>
              </div>
              <div className="flex justify-end items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Rejected:{" "}
                </span>
                <span data-rejection="">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

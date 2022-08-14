import NavBar from "../../components/NavBar";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function MyProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [userProfile, setUserProfile] = useState({});
  const { data: session, status } = useSession();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/getProfileInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: session?.user.email }),
      });

      const json = await res.json();
      setUserProfile(json.data);
    })();
  }, [session]);

  return (
    <div className="flex h-screen w-screen">
      <Head>
        <title>My Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                  Name: {userProfile?.name}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Email: {userProfile?.email}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Graduation Year: {userProfile?.gradYear}
                </span>
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
                <span data-jobs-applied="">{userProfile?.jobsApplied}</span>
              </div>
              <div className="flex justify-end items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Tests Taken:{" "}
                </span>
                <span data-onGoing="">{userProfile?.jobsTestTaken}</span>
              </div>
              <div className="flex justify-end items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Job Interviews:{" "}
                </span>
                <span data-onGoing="">{userProfile?.jobsInterviewed}</span>
              </div>
              <div className="flex justify-end items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Accepted:{" "}
                </span>
                <span data-acceptance="">{userProfile?.jobsAccepted}</span>
              </div>
              {/* <div className="flex justify-end items-center gap-4">
                <span className="[font-weight:var(--semi-bold-text)]">
                  {" "}
                  Rejected:{" "}
                </span>
                <span data-rejection="">0</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

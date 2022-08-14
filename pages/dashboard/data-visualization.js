import dynamic from "next/dynamic";
import NavBar from "../../components/NavBar";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function DataVisualization() {
  const [data, setData] = useState([{ company: "Google", count: 30 }]);
  const Chart = dynamic(import("../../components/BarChart"), { ssr: false });
  // FETCH DATA FROM DATABASE ON PAGELOAD HERE
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/internship/getInternshipsData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      console.log(json.data);
      if (!json.data) return;
      setData(json.data);
    })();
  }, []);
  return (
    <div className="flex h-screen w-screen">
      <Head>
        <title>Data Visualization</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <div id="main" className="grid grid-rows-6 grow bg-[color:var(--skin)]">
        <div
          id="title"
          className="flex items-center p-8 [font-weight:var(--bold-text)] text-4xl text-[color:var(--blue)] select-none"
        >
          Data Visualization
        </div>
        <div id="chart-portion" className="flex row-span-5 p-64 pt-16">
          <div
            id="chart-wrapper"
            className="flex flex-col p-12 pb-0 gap-8 bg-white rounded-lg"
          >
            <div className="[font-weight:var(--bold-text)] text-2xl">
              <span> Number of applications by </span>
              <select
                className="cursor-pointer bg-transparent"
                onChange={(e) => {}}
                defaultValue="company"
              >
                <option value="company">Company</option>
                <option value="position">Position</option>
              </select>
            </div>
            <Chart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

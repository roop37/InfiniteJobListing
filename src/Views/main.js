import React, { useState, useEffect } from "react";
import JobCard from "./jobCards";

export default function Appli() {
  const [jobData, setJobData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchJobData();
  }, []);

  const fetchJobData = () => {
    const limit = 15;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: limit,
      offset: offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setJobData([...jobData, ...data.jdList]);
        setOffset(offset + limit);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [jobData]);

  const handleScroll = () => {
    if (
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop) <
      1
    ) {
      console.log("Reached bottom of page!");
      fetchJobData();
    }
  };

  return (
    <>
      <div className="flex mt-5 px-5">
        <div className="relative w-full max-w-full mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-7 md:top-3 bottom-0 w-5 h-5 my-auto text-gray-400 right-3 transform transition-transform duration-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2 transition-all duration-200 ease-in-out transform hover:scale-105">
            <option value="null">None</option>
            <option value="hr">HR</option>
            <option value="eng">Engineering</option>
            <option value="acc">Accounts</option>
            <option value="sals">Sales</option>
          </select>
        </div>
        <div className="relative w-full max-w-full mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-7 md:top-3 bottom-0 w-5 h-5 my-auto text-gray-400 right-3 transform transition-transform duration-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2 transition-all duration-200 ease-in-out transform hover:scale-105">
            <option value="null">None</option>
            <option value="hr">HR</option>
            <option value="eng">Engineering</option>
            <option value="acc">Accounts</option>
            <option value="sals">Sales</option>
          </select>
        </div>

        <div className="relative w-full max-w-full mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-7 md:top-3 bottom-0 w-5 h-5 my-auto text-gray-400 right-3 transform transition-transform duration-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2 transition-all duration-200 ease-in-out transform hover:scale-105">
            <option value="null">None</option>
            <option value="hr">HR</option>
            <option value="eng">Engineering</option>
            <option value="acc">Accounts</option>
            <option value="sals">Sales</option>
          </select>
        </div>

        <div className="relative w-full max-w-full mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-7 md:top-3 bottom-0 w-5 h-5 my-auto text-gray-400 right-3 transform transition-transform duration-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2 transition-all duration-200 ease-in-out transform hover:scale-105">
            <option value="null">None</option>
            <option value="hr">HR</option>
            <option value="eng">Engineering</option>
            <option value="acc">Accounts</option>
            <option value="sals">Sales</option>
          </select>
        </div>
        <div className="relative w-full max-w-full mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-7 md:top-3 bottom-0 w-5 h-5 my-auto text-gray-400 right-3 transform transition-transform duration-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2 transition-all duration-200 ease-in-out transform hover:scale-105">
            <option value="null">None</option>
            <option value="hr">HR</option>
            <option value="eng">Engineering</option>
            <option value="acc">Accounts</option>
            <option value="sals">Sales</option>
          </select>
        </div>

        <div className="relative w-full max-w-full mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-7 md:top-3 bottom-0 w-5 h-5 my-auto text-gray-400 right-3 transform transition-transform duration-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2 transition-all duration-200 ease-in-out transform hover:scale-105">
            <option value="null">None</option>
            <option value="hr">HR</option>
            <option value="eng">Engineering</option>
            <option value="acc">Accounts</option>
            <option value="sals">Sales</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="John Doe"
            class="block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />
        </div>
      </div>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] lg:px-16 ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center gap-10">
            {jobData.map((job) => (
              <JobCard key={job.jdUid} job={job} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

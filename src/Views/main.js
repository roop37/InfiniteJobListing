import React, { useState, useEffect } from "react";
import JobCard from "./jobCards";

export default function Appli() {
  const [jobData, setJobData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState({
    minExperience: "",
    companyName: "",
    location: "",
    role: "",
    minBasePay: "",
    remote: false,
  });

  useEffect(() => {
    fetchJobData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [jobData]);

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

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    const filterValue = type === "checkbox" ? checked : value;
    setFilters({
      ...filters,
      [name]: filterValue,
    });
  };

  const filteredJobs = jobData.filter((job) => {
    const { minExperience, companyName, location, remote, role, minBasePay } =
      filters;
    return (
      (minExperience
        ? parseInt(job.minExp) <= parseInt(minExperience)
        : true) &&
      (companyName
        ? job.companyName.toLowerCase().includes(companyName.toLowerCase())
        : true) &&
      (location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true) &&
      (role ? job.jobRole.toLowerCase() === role.toLowerCase() : true) &&
      (minBasePay ? parseInt(job.minJdSalary) >= parseInt(minBasePay) : true) &&
      (remote ? job.location.toLowerCase().includes("remote") : true)
    );
  });

  return (
    <>
      {/* <div className="flex mt-5 px-5 flex-wrap gap-2  lg:px-16">
        <select
          name="minExperience"
          value={filters.minExperience}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        >
          <option value="">Min Experience</option>
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="companyName"
          placeholder="Search Company Name"
          value={filters.companyName}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        />

        <select
          name="role"
          value={filters.role}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        >
          <option value="">Role</option>
          <option value="ios">iOS</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="android">Android</option>
          <option value="techlead">Tech Lead</option>
        </select>

        <select
          name="minBasePay"
          value={filters.minBasePay}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        >
          <option value="">Min Base Pay</option>
          {[...Array(8)].map((_, index) => (
            <option key={index} value={index * 10}>
              {index * 10} USD
            </option>
          ))}
        </select>

        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            name="remote"
            checked={filters.remote}
            onChange={handleFilterChange}
            className="mr-1"
          />
          Remote
        </label>
      </div> */}
      <div className="flex mt-5 px-5 flex-wrap gap-2  lg:px-16">
        <select
          name="minExperience"
          value={filters.minExperience}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 pr-8 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        >
          <option value="">Min Experience</option>
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="companyName"
          placeholder="Search Company Name"
          value={filters.companyName}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        />

        <select
          name="role"
          value={filters.role}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 pr-8 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        >
          <option value="">Role</option>
          <option value="ios">iOS</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="android">Android</option>
          <option value="techlead">Tech Lead</option>
        </select>

        <select
          name="minBasePay"
          value={filters.minBasePay}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 pr-8 text-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        >
          <option value="">Min Base Pay</option>
          {[...Array(8)].map((_, index) => (
            <option key={index} value={index * 10}>
              {index * 10} USD
            </option>
          ))}
        </select>

        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            name="remote"
            checked={filters.remote}
            onChange={handleFilterChange}
            className="mr-1"
          />
          Remote
        </label>
      </div>

      <section className="bg-white pb-10 pt-10 dark:bg-dark lg:pb-20  lg:px-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center gap-10">
            {filteredJobs.map((job) => (
              <JobCard key={job.jdUid} job={job} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";

// Functional component for rendering individual job cards
export default function JobCard({ job }) {
  // Destructuring job object
  const {
    jdLink,
    jdUid,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
    companyName,
    logoUrl,
  } = job;

  const truncate = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  //UI Starts here
  return (
    <div className="bg-white shadow-lg px-4 pt-6 pb-8 mb-4 flex flex-col my-2 rounded-2xl max-w-72">
      <div>
        <span className="inline-flex items-center gap-1 rounded-full p-2 shadow-lg bg-blue-50  py-1 text-xs font-semibold text-blue-600">
          {" "}
          ⌛posted 10 days ago{" "}
        </span>
      </div>

      <div className="-mx-3 md:flex">
        <div className="md:w-full px-3 mb-6 md:mb-0">
          <div className="flex flex-auto gap-2 mt-6">
            <img
              className="h-10 w-10"
              src={logoUrl || "placeholder_image_url"}
              alt="Company Logo"
            />
            <div>
              <span className="text-gray-800 text-xs mt-2 subpixel-antialiased">
                {companyName || "-"}
              </span>
              <h2 className="text-gray-800 text-sm font-semibold mb-1 subpixel-antialiased">
                {jobRole || "-"}
              </h2>
              <p className="text-gray-700 text-sm subpixel-antialiased">
                {location || "-"}
              </p>
            </div>
          </div>
          <p className="text-slate-800 text-sm mt-2 font-normal subpixel-antialiased">
            Estimated Salary:{" "}
            {maxJdSalary || minJdSalary
              ? `${minJdSalary || 0} - ${
                  maxJdSalary || 0
                } ${salaryCurrencyCode}`
              : "-"}{" "}
            ✅{" "}
          </p>
          <p className="text-gray-900 text-[.9rem] font-semibold mt-3 subpixel-antialiased">
            About Company
          </p>
        </div>
      </div>
      <div className="-mx-3 md:flex ">
        <div className="md:w-full px-3">
          <p className="text-black text-sm font-medium">About us:</p>
          <div className="text-fade">
            <p className="text-gray-700 text-[.8rem]">
              {truncate(jobDetailsFromCompany || "-", 40)}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <a href={jdLink} target="_blank" rel="noopener noreferrer">
          <button
            className="hover:text-blue-900 text-blue-700 text-sm relative bottom-3"
            type="button"
          >
            View Job
          </button>
        </a>
      </div>
      <div className="flex flex-col  mb-2">
        <p className="text-gray-800 text-[.8rem] font-medium">
          Minimum Experience
        </p>
        <p className="text-gray-700 text-[.8rem]">{minExp || "-"}</p>
      </div>
      <div className="flex items-center flex-col gap-2">
        <button
          className="bg-green-500 w-full hover:bg-green-700 text-white subpixel-antialiased py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          ⚡Easy Apply
        </button>
        <button
          className="bg-blue-500 w-full hover:bg-blue-700 text-white subpixel-antialiased py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Unlock Referral asks
        </button>
      </div>
    </div>
  );
}

import React from "react";

function ResumeItem({ jobTitle, company, dates, role, url }) {
  return (
    <div>
      <div class="flex-col mt-12 justify-start">
        <div class="text-left">
          <p className="text-xl font-bold font-poppins">
            {jobTitle} at{" "}
            <a
              href={url}
              class="text-lightcobaltblue cursor-pointer hover:underline decoration-lightcobaltblue decoration-2"
            >
              {company}
            </a>
          </p>
          <p class="text-lg mt-1 text-gray-400">{dates}</p>
          <p class="text-lg mt-1 text-justify">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default ResumeItem;

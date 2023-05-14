import React from "react";
import Navbar from "./navbar";
import ResumeItem from "./resumeitem";

function Experience({ bgColor, fill, changePage }) {
  const jobs = [
    {
      jobTitle: "Software Engineering Intern",
      company: "Minted",
      dates: "May 2022 - Aug. 2022",
      role: "In this role, I worked on the wedding websites platform and used technology including React, TypeScript, Django, and PostgreSQL to help users customize their own wedding sites and manage the ins-and-outs of their weddings.",
      url: "https://minted.com",
    },
    {
      jobTitle: "Global Markets Software Developer Intern",
      company: "Bank of Montreal",
      dates: "Sep. 2021 - Dec. 2021",
      role: "In this role, I worked on the Data Cognition Team, using technology including React, Python, Flask, and PostgreSQL to build web applications that helped traders gather data insights and analytics before making their trades.",
      url: "https://capitalmarkets.bmo.com/en/",
    },
    {
      jobTitle: "Software Engineering Intern",
      company: "Uplift",
      dates: "May 2020 - Aug. 2020, Jan 2021 - Apr. 2021",
      role: "In this role, I worked on the Underwriting team, using technology including Python, Flask, and AWS Lamdba to help people make thoughtful purchases with the Buy Now, Pay Later model.",
      url: "https://uplift.com",
    },
    {
      jobTitle: "Software Developer Intern",
      company: "Genesys",
      dates: "Sep. 2019 - Dec. 2019",
      role: "In this role, I conducted exploratory data analysis and built machine learning models with TensorFlow and Keras to predict contact center agent performance.",
      url: "https://genesys.com",
    },
  ];

  return (
    <div class="pb-10">
      <Navbar
        bgColor={bgColor}
        fill={fill}
        curPage={"experience"}
        changePage={changePage}
      />
      <h1 className="text-4xl mt-20 font-poppins font-bold">Experience</h1>
      <div class="flex-col mt-12 justify-start text-left">
          {jobs.map((job, i) => {
            return (
              <ResumeItem
                key={i}
                jobTitle={job.jobTitle}
                company={job.company}
                dates={job.dates}
                role={job.role}
                url={job.url}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Experience;

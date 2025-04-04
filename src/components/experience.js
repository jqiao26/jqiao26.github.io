import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./navbar";
import ResumeItem from "./resumeitem";

function Experience({ bgColor, fill, changePage }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const jobs = [
    {
      jobTitle: "Software Engineer",
      company: "Teleskope",
      dates: "April 2024 - Present",
      role: "In this role, I built a policy-based Data Loss Prevention platform with Golang, React, and MySQL to automatically detect, redact, and remediate sensitive customer data at the source.",
      url: "https://teleskope.ai",
    },
    {
      jobTitle: "Software Engineer",
      company: "Usage AI",
      dates: "June 2023 - April 2024",
      role: "In this role, I launched a cloud cost visibility platform, allowing customers to analyze cloud billing with filtered cost reporting and cost forecasting tools and build customizable cost analytics dashboards to save on cloud spend.",
      url: "https://usage.ai",
    },
    {
      jobTitle: "Software Engineering Intern",
      company: "Minted",
      dates: "May 2022 - Aug. 2022",
      role: "In this role, I worked on the wedding websites platform and used technology including React, TypeScript, Django, and PostgreSQL to help users customize their own wedding sites and manage the ins-and-outs of their weddings.",
      url: "https://minted.com",
    },
    {
      jobTitle: "Software Developer Intern",
      company: "Bank of Montreal",
      dates: "Sep. 2021 - Dec. 2021",
      role: "In this role, I worked on the Data Cognition Team, using technology including React, Python, Flask, and PostgreSQL to build web applications that helped traders gather data insights and analytics before making their trades.",
      url: "https://capitalmarkets.bmo.com/en/",
    },
    {
      jobTitle: "Software Engineering Intern",
      company: "Upgrade, Inc.",
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
    <div class='pb-10'>
      <Navbar
        bgColor={bgColor}
        fill={fill}
        curPage={"experience"}
        changePage={changePage}
      />
      <>
        <h1
          className={
            isMobile
              ? "text-4xl mt-0 font-poppins font-bold"
              : "text-4xl mt-10 font-poppins font-bold"
          }>
          Experience
        </h1>
        <div class='flex-col mt-12 justify-start text-left'>
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
      </>
    </div>
  );
}

export default Experience;

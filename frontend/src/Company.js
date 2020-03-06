import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from "./helpers/JoblyApi";
import JobCard from './JobCard';
import './Company.css';

function Company() {
  const { handle } = useParams();
  const [jobsList, setJobsList] = useState(null);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const updateState = async () => {
      const companyResult = await JoblyApi.getCompany(handle);
      const jobsResult = await JoblyApi.getJobs({company_handle: handle});
      setCompany(companyResult);
      setJobsList(jobsResult);
    }
    updateState();
  }, [handle])

  let companyJSX = <div>Company info loading</div>;
  let jobsJSX = <div>Job list loading</div>;

  if (jobsList && company) {
    companyJSX = (
      <div>
        <h1>{company.name}</h1>
        <div>{company.description}</div>
      </div>
    )
    jobsJSX = (
      <div>
        {jobsList.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    )
  }

  return (
    <div className="Company">
      {companyJSX}
      {jobsJSX}
    </div>
  )
}

export default Company;
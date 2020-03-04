import React, { useState, useEffect } from 'react';
import JoblyApi from "./helpers/JoblyApi";
import Search from './Search';
import JobCard from './JobCard';

function Jobs() {
  const [jobsList, setJobsList] = useState(null);
  
  useEffect(() => {
    let getJobsList = async () => {
      const jobsResult = await JoblyApi.getJobs({});
      setJobsList(jobsResult);
    }
    getJobsList();
  }, []);

  const filterJobs = async (searchTerm) => {
    const jobsResult = await JoblyApi.getJobs({search: searchTerm});;
    setJobsList(jobsResult);
  };

  const jobsOrLoadingMessage = (jobsList !== null)
    ? jobsList.map(job => <JobCard key={job.id} job={job} />)
    : <div>Sorry no results found</div> 

  return (
    <div>
      <Search filter={filterJobs} />
      {jobsOrLoadingMessage}
    </div>
  )
}

export default Jobs;
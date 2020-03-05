import React, { useState, useEffect } from 'react';
import JoblyApi from "./helpers/JoblyApi";
import Search from './Search';
import JobCard from './JobCard';
import Pagination from './Pagination';

const NUM_ITEMS_PER_PAGE = 20;

function Jobs() {
  const [jobsList, setJobsList] = useState(null);
  const [startSliceIndex, setStartSliceIndex] = useState(0);
  
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
    setStartSliceIndex(0);
  };
  
    let jobsOrLoadingMessage = <div>Sorry no results found</div>;
    if (jobsList) {
      const jobsListJSX = jobsList
        .slice(startSliceIndex, startSliceIndex + NUM_ITEMS_PER_PAGE)
        .map(job => <JobCard key={job.id} job={job} />);
      
      jobsOrLoadingMessage = (
        <div>
          {jobsListJSX}
          <Pagination 
            setStartSliceIndex={setStartSliceIndex} 
            currentStartIndex={startSliceIndex} 
            arrayLength={jobsList.length} 
            numItemsPerPage={NUM_ITEMS_PER_PAGE}/>
        </div>
      )
    }

  return (
    <div>
      <Search filter={filterJobs} />
      {jobsOrLoadingMessage}
    </div>
  )
}

export default Jobs;
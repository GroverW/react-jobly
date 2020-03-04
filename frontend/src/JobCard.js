import React, { useState } from 'react';
import JoblyApi from './helpers/JoblyApi';

function JobCard({ job }) {
  const [jobState, setJobState] = useState(job.state)

  const handleApply = async () => {
    if(!jobState) {
      const result = await JoblyApi.applyToJob(job.id);

      if(result) {
        setJobState(result);
      }
    }
    
  }
  
  const jobAppState = jobState === "applied" ? "APPLIED" : "APPLY";

  return (
    <div className="JobCard">
      <div>{job.title}</div>
      <div>{job.salary}</div>
      <div>{job.equity}</div>
      <button 
        disabled={jobState !== null} 
        onClick={handleApply}>{jobAppState}
      </button>
    </div>
  );
}

export default JobCard;
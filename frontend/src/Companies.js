import React, { useState, useEffect } from 'react';
import Search from './Search';
import CompanyCard from './CompanyCard';
import JoblyApi from './helpers/JoblyApi';

function Companies() {
  const [isLoading, setIsLoading] = useState(true);
  const [companyList, setCompanyList] = useState(null)

  useEffect(() => {
    let getCompanyList = async () => {
      const companyResult = await JoblyApi.getCompanies({});
      console.log("companyResult: ", companyResult)
      setCompanyList(companyResult);
    }
    getCompanyList();
  }, [])

  const filterCompanies = async (searchTerm) => {
    const companyResult = await JoblyApi.getCompanies({search: searchTerm});
    setCompanyList(companyResult);
  }

  const companiesOrLoadingMessage = (companyList !== null) 
    ? companyList.map(comp => <CompanyCard company={comp} />) 
    : <div>Sorry no results found</div>

  return (
    <div>
      <Search filterCompanies={filterCompanies}/>
      {companiesOrLoadingMessage}
    </div>
  )
}

export default Companies;
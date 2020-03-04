import React, { useState, useEffect } from 'react';
import Search from './Search';
import CompanyCard from './CompanyCard';
import JoblyApi from './helpers/JoblyApi';

function Companies() {
  const [companyList, setCompanyList] = useState(null)

  useEffect(() => {
    let getCompanyList = async () => {
      const companyResult = await JoblyApi.getCompanies({});
      setCompanyList(companyResult);
    }
    getCompanyList();
  }, []);

  const filterCompanies = async (searchTerm) => {
    const companyResult = await JoblyApi.getCompanies({search: searchTerm});
    setCompanyList(companyResult);
  }

  const companiesOrLoadingMessage = (companyList !== null) 
    ? companyList.map(comp => <CompanyCard key={comp.handle} company={comp} />) 
    : <div>Sorry no results found</div>

  return (
    <div>
      <Search filter={filterCompanies}/>
      {companiesOrLoadingMessage}
    </div>
  )
}

export default Companies;
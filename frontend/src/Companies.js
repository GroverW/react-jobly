import React, { useState, useEffect } from 'react';
import Search from './Search';
import CompanyCard from './CompanyCard';
import JoblyApi from './helpers/JoblyApi';
import Pagination from './Pagination';

const NUM_ITEMS_PER_PAGE = 20;

function Companies() {
  const [companyList, setCompanyList] = useState(null)
  const [startSliceIndex, setStartSliceIndex] = useState(0);

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
    setStartSliceIndex(0);
  }

  let companiesOrLoadingMessage = <div>Sorry no results found</div>
  if (companyList) {
    const companyListJSX = companyList
      .slice(startSliceIndex, startSliceIndex + NUM_ITEMS_PER_PAGE)
      .map(comp => <CompanyCard key={comp.handle} company={comp} />);
    
    companiesOrLoadingMessage = (
      <div>
        {companyListJSX}
        <Pagination 
          setStartSliceIndex={setStartSliceIndex} 
          currentStartIndex={startSliceIndex} 
          arrayLength={companyList.length} 
          numItemsPerPage={NUM_ITEMS_PER_PAGE}/>
      </div>
    )
  }

  return (
    <div>
      <Search filter={filterCompanies}/>
      {companiesOrLoadingMessage}
    </div>
  )
}

export default Companies;
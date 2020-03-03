import React from 'react';
import { useHistory } from 'react-router-dom';
import companyLogo from './images/companyLogo.png'
import './CompanyCard.css';

function CompanyCard({ company }) {
  const history = useHistory();

  return (
    <div className="CompanyCard" 
      onClick={() => history.push(`/companies/${company.handle}`)}>
      <div>{company.name}</div>
      <div>{company.description}</div>
      <div>
        <img src={company.logo_url || companyLogo} alt="company logo"/>
      </div>
    </div>
  )
}

export default CompanyCard;
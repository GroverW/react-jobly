import React, { useState } from 'react';

function Search({ filterCompanies }) {
  const [formData, setFormData] = useState("");

  const handleChange = (evt) => {
    // evt.preventDefault();
    const value = evt.target.value
    setFormData(value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    filterCompanies(formData);
  }


  return (
    <form>
      <input 
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="Enter search term..."
        value={formData} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Search;
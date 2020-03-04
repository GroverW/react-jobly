import React, { useState } from 'react';

function Search({ filter }) {
  const [formData, setFormData] = useState("");

  const handleChange = (evt) => {
    const value = evt.target.value
    setFormData(value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    filter(formData);
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
import React, { useState } from 'react';
import Alert from './Alert';
import JoblyApi from "./helpers/JoblyApi";
import { useHistory } from 'react-router-dom';


const INITIAL_STATE = {
  username: "",
  password: ""
}

function Login() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();
  const [isAlert, setIsAlert] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const resp = await JoblyApi.login(formData)
    console.log("RESEESPEOSIHSFPOISHFDPOIH",resp)
    if (!resp.token) {
      setIsAlert(true);
    } else {
      history.push('/jobs')
    }


  }

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {isAlert ? <Alert text="Invalid Credentials" /> : ""}
    </form>
  )
}

export default Login;
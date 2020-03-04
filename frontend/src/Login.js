import React, { useState, useContext } from 'react';
import Alert from './Alert';
import JoblyApi from "./helpers/JoblyApi";
import { Link, useHistory } from 'react-router-dom';
import UserContext from './UserContext';


const INITIAL_STATE = {
  username: "",
  password: ""
}

function Login() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();
  const { logIn } = useContext(UserContext);
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
    if (!resp.token) {
      setIsAlert(true);
    } else {
      logIn(resp);
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
      <Link to="/signup">Not registered? Sign up here</Link>
      {isAlert ? <Alert text="Invalid Credentials" /> : ""}
    </form>
  )
}

export default Login;
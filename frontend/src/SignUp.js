import React, { useState, useContext } from 'react';
import Alert from './Alert';
import JoblyApi from "./helpers/JoblyApi";
import { Link, useHistory } from 'react-router-dom';
import UserContext from './UserContext';


const INITIAL_STATE = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: ""
}

function SignUp() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();
  const { logIn } = useContext(UserContext);
  const [alerts, setAlerts] = useState(null);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const resp = await JoblyApi.signUp(formData)
    if (!resp.token) {
      setAlerts(resp.map(message => <Alert text={message} />));
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
      <label htmlFor="first_name">First Name</label>
      <input id="first_name"
        name="first_name"
        type="first_name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <label htmlFor="last_name">Last Name</label>
      <input id="last_name"
        name="last_name"
        type="last_name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
      <Link to="/login">Already registered? Log in here</Link>
      {alerts}
    </form>
  )
}

export default SignUp;
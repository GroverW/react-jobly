import React, { useState, useContext } from 'react';
import Alert from './Alert';
import JoblyApi from './helpers/JoblyApi';
import UserContext from "./UserContext"

function Profile() {
  const { currentUser, updateCurrentUser } = useContext(UserContext);
  const [userData, setUserData] = useState({
    ...currentUser,
    photo_url: currentUser.photo_url || "",
    password: ""
  });
  const [alerts, setAlerts] = useState(null);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData(oldUserData => ({
      ...oldUserData,
      [name]: value
    }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const resp = await JoblyApi.patchUser(userData)
    if (!resp.username) {
      setAlerts(resp.map((message, idx) => <Alert key={idx} text={message} />));
    } else {
      setUserData(oldData => ({
        ...resp,
        photo_url: resp.photo_url || "",
        password: ""
      }));
      updateCurrentUser(resp);
      setAlerts(<Alert type="success" text="Changes saved." />)
    }
  }



  return (
    <div>
      <h1>Profile</h1>
      <form>
        <label>Username</label>
        <div>{userData.username}</div>
        <label htmlFor="first_name">First Name</label>
        <input type="text"
            id="first_name"
            name="first_name"
            value={userData.first_name}
            onChange={handleChange}
        />
        <label htmlFor="last_name">Last Name</label>
        <input type="text"
            id="last_name"
            name="last_name"
            value={userData.last_name}
            onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input type="text"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
        />
        <label htmlFor="photo_url">Photo URL</label>
        <input type="text"
            id="photo_url"
            name="photo_url"
            value={userData.photo_url}
            onChange={handleChange}
        />
        <label htmlFor="password">Re-enter Password</label>
        <input type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
        />
        <button onClick={handleSubmit}>Save Changes</button>
      </form>
      {alerts}
    </div>
  )
}

export default Profile;
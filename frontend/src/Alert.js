import React from 'react';
import './Alert.css';

function Alert({ type="danger", text }) {
  
  return <div className={`Alert ${type}`}>{text}</div>
}

export default Alert;
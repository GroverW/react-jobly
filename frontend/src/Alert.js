import React from 'react';

function Alert({ type="danger", text }) {
  
  return <div className={type}>{text}</div>
}

export default Alert;
import React from "react";

const Field = ({ label, value, type, onChange, placeholder }) => {
  return (
    <div>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default Field;
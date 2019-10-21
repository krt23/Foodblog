import React from "react";

export const Field = ({ label, value, type, onChange }) => {
  return (
    <div>
        <span>{label}</span>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Field;
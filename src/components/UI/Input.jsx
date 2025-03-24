import React from "react";

function Input({ value, type, onChange, onKeyDown, placeholder }) {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}

export default Input;

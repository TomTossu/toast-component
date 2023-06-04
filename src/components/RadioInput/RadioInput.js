import React from "react";
import styles from "./RadioInput.module.css";

function RadioInput({ name, label, value, setValue }) {
  const inputID = `${name}-${label}`;

  return (
    <>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        <label htmlFor={inputID}>
          <input
            id={inputID}
            type="radio"
            name={name}
            value={label}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            checked={value === label}
          />
          {label}
        </label>
      </div>
    </>
  );
}

export default RadioInput;

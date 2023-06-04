import React from "react";

import styles from "./TextInput.module.css";

function TextInput({ inputType = "input", id, text, setText, required }) {
  const Tag = inputType;

  return (
    <div className={styles.inputWrapper}>
      <Tag
        id={id}
        className={styles.messageInput}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        required={required}
      />
    </div>
  );
}

export default TextInput;

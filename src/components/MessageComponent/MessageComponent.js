import React from "react";

import styles from "./MessageComponent.module.css";

import TextInput from "../TextInput/TextInput";
import { MessageContext } from "../MessageProvider/MessageProvider";

function MessageComponent() {
  const { message, setMessage } = React.useContext(MessageContext);

  return (
    <div className={styles.row}>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}>
        Message
      </label>
      <TextInput
        inputType={"textarea"}
        id="message"
        text={message}
        setText={setMessage}
        required
      />
    </div>
  );
}

export default MessageComponent;

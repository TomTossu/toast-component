import React from "react";
import MessageComponent from "../MessageComponent/MessageComponent";
import VariantComponent from "../VariantComponent/VariantComponent";
import Button from "../Button";
import styles from "./ControlWrapperContainer.module.css";

function ControlWrapperContainer() {
  return (
    <div className={styles.controlsWrapper}>
      <MessageComponent />
      <VariantComponent />

      <div className={styles.row}>
        <div className={styles.label} />
        <Button>Pop Toast!</Button>
      </div>
    </div>
  );
}

export default ControlWrapperContainer;

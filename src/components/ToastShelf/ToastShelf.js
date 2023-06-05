import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toastArr } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification">
      {toastArr.map((item) => (
        <li key={item.id} className={styles.toastWrapper}>
          <Toast
            id={item.id}
            trigger={item.variantOption}
            message={item.message}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

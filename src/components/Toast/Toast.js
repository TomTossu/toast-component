import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

import { removeItemArrayByID } from "../../utils/utils";
import { ToastContext } from "../ToastProvider/ToastProvider";

import { useKeyDown } from "../../hooks/use-keydown";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ trigger, message, id }) {
  const { toastArr, setToastArr } = React.useContext(ToastContext);

  const Tag = ICONS_BY_VARIANT[trigger];

  const handleEscape = React.useCallback(() => {
    setToastArr([]);
  }, [setToastArr]);

  useKeyDown("Escape", handleEscape);

  return (
    <div className={`${styles.toast} ${styles[trigger]}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{`${trigger} - `}</VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off">
        <X
          size={24}
          onClick={() => {
            const newArr = [...toastArr];

            removeItemArrayByID(newArr, id);
            setToastArr(newArr);
          }}
        />
      </button>
    </div>
  );
}

export default Toast;

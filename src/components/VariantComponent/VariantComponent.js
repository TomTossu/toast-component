import React from "react";

import styles from "./VariantComponent.module.css";

import RadioInput from "../RadioInput/RadioInput";

import { VARIANT_OPTIONS } from "../../constants/constants";
import { VariantContext } from "../VariantProvider/VariantProvider";

function VariantComponent() {
  const { variantOption, setVariantOption } = React.useContext(VariantContext);

  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      {VARIANT_OPTIONS.map((option) => (
        <RadioInput
          key={option}
          name="variant"
          label={option}
          value={variantOption}
          setValue={setVariantOption}
        />
      ))}
    </div>
  );
}

export default VariantComponent;

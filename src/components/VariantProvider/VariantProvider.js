import React from "react";

import { VARIANT_OPTIONS } from "../../constants/constants";

export const VariantContext = React.createContext();

function VariantProvider({ children }) {
  const [variantOption, setVariantOption] = React.useState(VARIANT_OPTIONS[0]);

  return (
    <VariantContext.Provider value={{ variantOption, setVariantOption }}>
      {children}
    </VariantContext.Provider>
  );
}

export default VariantProvider;

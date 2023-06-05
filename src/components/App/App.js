import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";

import ToastProvider from "../ToastProvider/ToastProvider";
import VariantProvider from "../VariantProvider/VariantProvider";
import MessageProvider from "../MessageProvider/MessageProvider";

function App() {
  return (
    <ToastProvider>
      <VariantProvider>
        <MessageProvider>
          <ToastPlayground />
          <Footer />
        </MessageProvider>
      </VariantProvider>
    </ToastProvider>
  );
}

export default App;

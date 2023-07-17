import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";
import { ThemeProvider } from "@emotion/react";
import { CSSReset, ColorModeProvider, theme } from "@chakra-ui/react";
import ToogleBtn from "./ToogleBtn";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ToogleBtn />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          </Routes>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;

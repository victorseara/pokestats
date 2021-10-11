import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Routes from "routes";
import ThemeProvider from "theme/ThemeProvider";

const AppContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <CssBaseline />
        <Routes />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

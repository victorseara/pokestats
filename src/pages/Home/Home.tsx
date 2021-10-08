import { Container as MuiContainer, Stack, styled } from "@mui/material";
import SearchForm from "components/SearchForm/SearchForm";
import React from "react";
import { RouteComponentProps } from "react-router";

const Home = ({ history }: RouteComponentProps) => {
  return (
    <Container>
      <Stack width="60%" spacing={2} alignItems="center">
        <SearchForm />
      </Stack>
    </Container>
  );
};

const Container = styled(MuiContainer)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  maxHeight: "100vh",
  paddingBottom: "240px",
});

export default Home;

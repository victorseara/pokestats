import { Container as MuiContainer, Stack, styled } from "@mui/material";
import SearchForm from "components/SearchForm/SearchForm";

const Home = () => {
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
});

export default Home;

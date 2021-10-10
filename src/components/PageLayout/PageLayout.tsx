import { Container, Divider, Stack } from "@mui/material";
import Header from "components/Header/Header";

interface PageLayoutProps {
  children: React.ReactNode;
}
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Stack spacing={{ xs: 0, md: 4 }} height="100%">
      <Stack spacing={4} mt={4}>
        <Header />
        <Divider />
      </Stack>
      <Stack height="100%">
        <Container sx={{ height: "100%" }}>{children}</Container>
      </Stack>
    </Stack>
  );
};

export default PageLayout;

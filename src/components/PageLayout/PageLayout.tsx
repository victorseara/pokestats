import { Box, Container, Divider, Stack } from "@mui/material";
import Header from "components/Header/Header";

interface PageLayoutProps {
  children: React.ReactNode;
}
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Stack spacing={4} height="100%">
      <Stack spacing={4} pt={4}>
        <Header />
        <Divider />
      </Stack>
      <Box height="100%">
        <Container sx={{ height: "100%" }}>{children}</Container>
      </Box>
    </Stack>
  );
};

export default PageLayout;

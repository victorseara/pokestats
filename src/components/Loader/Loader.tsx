import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress data-testid="circular-progress" />
    </Box>
  );
};

export default Loader;

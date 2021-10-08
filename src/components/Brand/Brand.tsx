import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface BrandProps {
  fontSize?: string;
}

const Brand = ({ fontSize = "8vmin" }: BrandProps) => {
  return (
    <Link to="/" title="Googmon" style={{ textDecoration: "none" }}>
      <Logo fontSize={fontSize} />
    </Link>
  );
};

interface LogoProps {
  fontSize: string;
}
const Logo = ({ fontSize }: LogoProps) => (
  <Stack direction="row">
    <Typography
      component="span"
      fontWeight="fontWeightMedium"
      fontSize={fontSize}
      color="primary"
    >
      PokeStats
    </Typography>
  </Stack>
);

export default Brand;

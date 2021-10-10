import { OutlinedInput, styled, svgIconClasses } from "@mui/material";

const SearchInput = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: 24,
  paddingLeft: 12,
  paddingRight: 24,

  [`& > .${svgIconClasses.root}`]: {
    color: theme.palette.grey[500],
  },
}));

export default SearchInput;

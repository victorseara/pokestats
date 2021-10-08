import {
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

interface StatDisplayProps {
  name: string;
  value: number;
}
const StatDisplay = ({ name, value }: StatDisplayProps) => {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (state < value) {
      timeout = setTimeout(() => {
        setState((prev) => prev + 1);
      }, 5);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [state, value]);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <StatText variant="overline">{name}</StatText>
        <StatText variant="overline">{value}</StatText>
      </Box>
      <StatBar value={state} variant="determinate" />
    </Box>
  );
};

const StatText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const StatBar = styled(LinearProgress)(({ theme }) => ({
  height: 24,
  borderRadius: 24,
  boxShadow: `-4px 8px 8px rgba(0,0,0,0.05)`,
  backgroundColor: theme.palette.grey[200],

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 24,
    boxShadow: theme.shadows[20],
  },
}));

export default StatDisplay;

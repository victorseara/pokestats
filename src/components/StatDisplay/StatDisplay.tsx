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
  display: string;
  value: number;
}
const StatDisplay = ({ name, value, display }: StatDisplayProps) => {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setState((prev) => {
        if (prev === 100) {
          clearInterval(timer);
          return 100;
        }

        if (prev === value) {
          clearInterval(timer);
          return value;
        }

        return prev + 1;
      });
    }, 5);

    return () => {
      clearInterval(timer);
    };
  }, [value]);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <StatText variant="overline">{display}</StatText>
        <StatText variant="overline">{value}</StatText>
      </Box>
      <StatBar value={state} variant="determinate" title={name} />
    </Box>
  );
};

const StatText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.subtitle2.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const StatBar = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 24,
  boxShadow: `-4px 8px 8px rgba(0,0,0,0.05)`,
  backgroundColor: theme.palette.divider,

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 24,
    boxShadow: theme.shadows[20],
  },
}));

export default StatDisplay;

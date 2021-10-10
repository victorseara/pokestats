import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Pokemon from "api/pokemon";
import React from "react";

interface PokemonDisplayProps {
  pokemon: Pokemon;
}

interface StatBarProps {
  value: number;
}
const StatDisplay = ({ value }: StatBarProps) => {
  return (
    <CustomLinearProgress
      value={value <= 100 ? value : 100}
      variant="determinate"
    />
  );
};

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 24,
  borderRadius: 24,
  boxShadow: `-4px 8px 8px rgba(0,0,0,0.05)`,
  backgroundColor: theme.palette.grey[200],

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 24,
    boxShadow: theme.shadows[20],
  },
}));

const PokemonDisplay = ({ pokemon }: PokemonDisplayProps) => {
  return (
    <Stack direction="row" spacing={4} height="100%">
      <Stack width="100%">
        <Box>
          <Typography color="primary" fontWeight="fontWeightBold" variant="h4">
            {pokemon.name}
          </Typography>
        </Box>
        <Box>
          {pokemon.stats.map((item) => (
            <StatDisplay key={item.name} value={item.value} />
          ))}
        </Box>
      </Stack>
      <Stack width="100%" sx={{ background: "blue" }}>
        Stack 2
      </Stack>
    </Stack>
  );
};

export default PokemonDisplay;

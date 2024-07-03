import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" sx={{ colors: "grey" }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" fontWeight="bold" sx={{ colors: "green" }}>
            {subtitle}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" fontStyle="italics" sx={{ colors: "green" }}>
            {increase ? `+${increase}` : ""}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default StatBox;

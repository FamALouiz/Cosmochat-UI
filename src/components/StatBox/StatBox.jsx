import { Box, Typography } from "@mui/material";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import { GREEN, GREY, OFF_WHITE, RED } from "../../constants/Colors";

function StatBox({ title, subtitle, icon, progress, increase }) {
  return (
    <Box
      width="100%"
      m="0 30px"
      sx={{
        background: GREY,
        borderRadius: "10px",
      }}
      marginLeft="10px"
    >
      <Box padding="20px" display="flex" flexDirection="column">
        <Box display="flex" justifyContent="flex-start">
          {icon}
          <Typography variant="h6" fontWeight="bold" color={OFF_WHITE}>
            {title}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <ProgressCircle progress={progress} />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="h8"
              alignContent="center"
              fontStyle="italics"
              sx={{ color: parseFloat(increase) > 0 ? GREEN : RED }}
            >
              {increase
                ? `${parseFloat(increase) > 0 ? "+" : ""}${increase}`
                : ""}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="h6"
              alignContent="center"
              sx={{ color: OFF_WHITE }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StatBox;

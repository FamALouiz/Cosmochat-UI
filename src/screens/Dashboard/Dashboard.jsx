import { Box } from "@mui/material";
import StatBox from "../../components/StatBox/StatBox";
import LineGraph from "../../components/LineGraph/LineGraph";
import mockGraphData from "../../data/mockGraphData";

function Dashboard() {
  return (
    <Box
      padding="10px"
      width="1350px"
      display="flex"
      flexDirection="column"
      height={"70vh"}
    >
      <Box display="flex" justifyContent="space-around">
        <StatBox
          title="Messages"
          increase="-2%"
          progress={-0.02}
          subtitle={1000}
        />
        <StatBox title="Logins" increase="15%" progress={0.15} subtitle={500} />
        <StatBox
          title="Sessions"
          increase="10%"
          progress={0.1}
          subtitle={100}
        />
        <StatBox
          title="API Calls"
          increase="-70%"
          progress={-0.7}
          subtitle={100}
        />
      </Box>
      <Box>
        <h3 style={{ marginLeft: "20px", marginBottom: "0px" }}>
          Last year's messages
        </h3>
      </Box>
      <LineGraph data={mockGraphData} />
    </Box>
  );
}

export default Dashboard;

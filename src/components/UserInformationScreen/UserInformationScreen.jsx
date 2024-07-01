import { useParams } from "react-router-dom";
import LineGraph from "../LineGraph/LineGraph";
import getMessagesSent from "./InformationService";

function UserInformationScreen() {
  const { title } = useParams();

  // Cleaning title up
  const cleanedTitle = title
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Grabbing data from local storage
  let data;
  switch (title) {
    case "messages-sent":
      data = getMessagesSent();
      break;
    default:
      data = null;
  }

  return (
    <div
      style={{
        flex: "inline",
        height: 700,
        width: 1800,
      }}
    >
      <div
        style={{
          width: "80vw",
          height: 500,
        }}
      >
        <h3 style={{ paddingLeft: 20 }}>
          <u>{cleanedTitle}</u>
        </h3>
        {<LineGraph data={[{ id: "User", data: data }]} />}
      </div>
    </div>
  );
}

export default UserInformationScreen;

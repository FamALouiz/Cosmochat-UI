import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ROLES from "../../constants/Roles";
import CONV_DIRECTION from "../../constants/ConversationDirection";
import CustomMenuItem from "../CustomMenuItem/CustomMenuItem";

function SideBarComponent({ sessions, setSessions }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [reload, setReload] = useState(false);

  if (reload) {
    setReload(false);
  }

  const handleCollapse = () =>
    setIsCollapsed((prevCollapseState) => !prevCollapseState);

  const handleNewSession = () => {
    // Extracting session id
    let prevSessionId;
    try {
      prevSessionId = sessions[sessions.length - 1].sessionId;
    } catch (error) {
      prevSessionId = 0;
    }
    // Getting today's date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const newSession = {
      sessionId: prevSessionId + 1,
      startedAt: formattedDate,
      messages: [
        {
          message: "Hello! I am your assistant. How can I help you?",
          sender: ROLES.ChatGPT,
          direction: CONV_DIRECTION.Incoming,
        },
      ],
    };

    setSessions((prevSessions) => [...prevSessions, newSession]);
    setReload(true);
  };

  return (
    <>
      <Sidebar collapsed={isCollapsed}>
        <Menu>
          <MenuItem>
            <FaBars onClick={handleCollapse} />
          </MenuItem>
          <MenuItem component={<Link to="/dashboard" />}>Dashboard</MenuItem>
          <SubMenu label="User Information">
            <MenuItem component={<Link to={"/user-info/messages-sent"} />}>
              Messages Sent
            </MenuItem>
          </SubMenu>
          <SubMenu label="History">
            {sessions.map((session) => (
              <CustomMenuItem
                component={<Link to={`/${session.sessionId}`} />}
                text={session.startedAt}
                sessionId={session.sessionId}
                sessions={sessions}
                setSessions={setSessions}
              />
            ))}
          </SubMenu>
          <MenuItem onClick={handleNewSession}> New Session </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}

export default SideBarComponent;

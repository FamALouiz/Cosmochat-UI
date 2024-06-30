import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import mockSessions from "../../data/mockSessions";

function SideBarComponent() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () =>
    setIsCollapsed((prevCollapseState) => !prevCollapseState);

  return (
    <>
      <Sidebar collapsed={isCollapsed}>
        <Menu>
          <MenuItem>
            <FaBars onClick={handleCollapse} />
          </MenuItem>
          <SubMenu label="History">
            {mockSessions.map((session) => (
              <MenuItem component={<Link to={`/${session.sessionId}`} />}>
                {session.startedAt}
              </MenuItem>
            ))}
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}

export default SideBarComponent;

import { MenuItem } from "react-pro-sidebar";
import DeleteMenuItem from "../DeleteMenuItem/DeleteMenuItem";
import { useState } from "react";

function CustomMenuItem({ component, text, sessionId }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <MenuItem
        component={component}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => setIsHovering(false)}
      >
        {text}
      </MenuItem>
      <DeleteMenuItem isHovering={isHovering} />
    </div>
  );
}
export default CustomMenuItem;

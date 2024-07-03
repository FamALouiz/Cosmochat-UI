import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import ChatScreen from "./screens/ChatScreen/ChatScreen";
import SideBarComponent from "./components/Sidebar/SidebarComponent";
import UserInformationScreen from "./components/UserInformationScreen/UserInformationScreen";
import Dashboard from "./screens/Dashboard/Dashboard";
import { mockSessions } from "./data/mockSessions";
import { useState } from "react";

function App() {
  const [sessions, setSessions] = useState(mockSessions);

  // Forcing chat screen re-render upon re-routing
  const ReloadableChatScreen = () => {
    const location = useLocation();

    return <ChatScreen sessions={sessions} key={location.pathname} />;
  };

  return (
    <Router>
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBarComponent sessions={sessions} setSessions={setSessions} />
        <Routes>
          <Route path="/:sessionId" Component={ReloadableChatScreen} />
          <Route
            path="/user-info/:title"
            Component={() => <UserInformationScreen sessions={sessions} />}
          />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import SideBarComponent from "./components/Sidebar/SidebarComponent";
import UserInformationScreen from "./components/UserInformationScreen/UserInformationScreen";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  // Forcing chat screen re-render upon re-routing
  const ReloadableChatScreen = () => {
    const location = useLocation();

    return <ChatScreen key={location.pathname} />;
  };

  return (
    <Router>
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBarComponent />
        <Routes>
          <Route path="/:sessionId" Component={ReloadableChatScreen} />
          <Route path="/user-info/:title" Component={UserInformationScreen} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

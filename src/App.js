import ChatScreen from "./components/ChatScreen/ChatScreen";
import SideBarComponent from "./components/Sidebar/SidebarComponent";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBarComponent />
        <ChatScreen sessionId={1} />
      </div>
    </>
  );
}

export default App;

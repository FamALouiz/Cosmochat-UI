import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import ROLES from "../../constants/Roles";
import processMessageToChatGPT from "../../api/chatSession";
import CONV_DIRECTION from "../../constants/ConversationDirection";
import mockSessions from "../../data/mockSessions";
import { useParams } from "react-router-dom";

function ChatScreen() {
  const [typingStatus, setTypingStatus] = useState(false);
  const { sessionId } = useParams();

  // Grabbing session from mock
  const session = mockSessions.filter(
    (session) => session.sessionId === parseInt(sessionId)
  );

  // Initalize with default message
  const [messages, setMesssges] = useState(
    session.length > 0 ? session[0].messages : mockSessions[0].messages
  ); // If session was not found use first mock session

  const handleSend = async (message) => {
    // Update messages states with new message
    const newMessage = {
      message: message,
      sender: ROLES.User,
      direction: CONV_DIRECTION.Outgoing,
    };

    const newMessages = [...messages, newMessage];

    setMesssges(newMessages);
    setTypingStatus(true);

    // Fetching response
    const aiResponse = await processMessageToChatGPT(newMessages);
    const aiMessage = {
      message: aiResponse,
      sender: ROLES.ChatGPT,
      direction: CONV_DIRECTION.Incoming,
    };

    setTypingStatus(false);
    setMesssges([...newMessages, aiMessage]);

    // Updating messages in mock sessions storage
    mockSessions[sessionId - 1].messages = [...newMessages, aiMessage];
  };

  return (
    <>
      <MainContainer
        id="chat-bot-container"
        style={{
          scrollBehavior: "smooth",
          position: "relative",
          height: "600px",
          width: "1200px",
        }}
      >
        <ChatContainer>
          <MessageList
            typingIndicator={
              typingStatus && <TypingIndicator content="Assistant is typing" />
            }
          >
            {messages.map((message, idx) => {
              return <Message key={idx} model={message} />;
            })}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </>
  );
}

export default ChatScreen;

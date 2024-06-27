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
import SENDERS from "../../constants/Senders";
import processMessageToChatGPT from "../../api/chatSession";

function ChatScreen() {
  const [typingStatus, setTypingStatus] = useState(false);

  // Initalize with default message
  const [messages, setMesssges] = useState([
    {
      message: "Hello! I am your personal assistant... How can I help?",
      sender: SENDERS.ChatGPT,
      direction: "incoming",
    },
  ]);

  const handleSend = async (message) => {
    // Update messages states with new message
    const newMessage = {
      message: message,
      sender: SENDERS.User,
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMesssges(newMessages);
    setTypingStatus(true);

    // Fetching response
    const aiResponse = await processMessageToChatGPT(newMessages);
    const aiMessage = {
      message: aiResponse,
      sender: SENDERS.ChatGPT,
      direction: "incoming",
    };

    setTypingStatus(false);
    setMesssges([...newMessages, aiMessage]);
  };

  return (
    <div
      id="chat-bot-container"
      style={{
        scrollBehavior: "smooth",
        position: "relative",
        height: "600px",
        width: "1200px",
      }}
    >
      <MainContainer>
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
    </div>
  );
}

export default ChatScreen;

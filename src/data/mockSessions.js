import ROLES from "../constants/Roles";
import CONV_DIRECTION from "../constants/ConversationDirection";

const mockSessions = [
  {
    sessionId: 1,
    startedAt: "2024-08-03",
    messages: [
      {
        message: "Hello! I am your personal assistant... How can I help?",
        sender: ROLES.ChatGPT,
        direction: CONV_DIRECTION.Incoming,
      },
      {
        message: "How are you doing today?",
        sender: ROLES.User,
        direction: CONV_DIRECTION.Outgoing,
      },
      {
        message:
          "I'm doing well, thank you! How about you? Working on any interesting projects lately?",
        sender: ROLES.ChatGPT,
        direction: CONV_DIRECTION.Incoming,
      },
    ],
  },
  {
    sessionId: 2,
    startedAt: "2024-08-04",
    messages: [
      {
        message: "Hello! I am your personal assistant... How can I help?",
        sender: ROLES.ChatGPT,
        direction: CONV_DIRECTION.Incoming,
      },
      {
        message: "How are you doing today?",
        sender: ROLES.User,
        direction: CONV_DIRECTION.Outgoing,
      },
      {
        message:
          "I'm doing well, thank you! How about you? Working on any interesting projects lately?",
        sender: ROLES.ChatGPT,
        direction: CONV_DIRECTION.Incoming,
      },
    ],
  },
  {
    sessionId: 3,
    startedAt: "2024-08-05",
    messages: [
      {
        message: "Hello! I am your personal assistant... How can I help?",
        sender: ROLES.ChatGPT,
        direction: CONV_DIRECTION.Incoming,
      },
      {
        message: "How are you doing today?",
        sender: ROLES.User,
        direction: CONV_DIRECTION.Outgoing,
      },
      {
        message:
          "I'm doing well, thank you! How about you? Working on any interesting projects lately?",
        sender: ROLES.ChatGPT,
        direction: CONV_DIRECTION.Incoming,
      },
    ],
  },
  {
    sessionId: 4,
    startedAt: "2024-08-06",
    messages: [
      {
        message: "Hello! I am your personal assistant... How can I help?",
        sender: ROLES.ChatGPT,
        direction: CONV_DIRECTION.Incoming,
      },
      {
        message: "How are you doing today?",
        sender: ROLES.User,
        direction: CONV_DIRECTION.Outgoing,
      },
      {
        message:
          "I'm doing well, thank you! How about you? Working on any interesting projects lately?",
        sender: ROLES.ChatGPT,
        direction: CONV_DIRECTION.Incoming,
      },
    ],
  },
];

export default mockSessions;

import CONV_DIRECTION from "../../constants/ConversationDirection";

function getMessagesSent(sessions) {
  // Getting unique dates
  const dates = [...new Set(sessions.map((session) => session.startedAt))];

  const grouppedMessageByDate = dates.map((date) => {
    const filteredSessions = sessions.filter(
      (session) => session.startedAt === date
    );

    let totalMessages = 0;

    // Counting total number of outgoing messages
    for (let i = 0; i < filteredSessions.length; i++) {
      const session = filteredSessions[i];
      for (let j = 0; j < session.messages.length; j++) {
        totalMessages +=
          session.messages[j].direction === CONV_DIRECTION.Outgoing ? 1 : 0;
      }
    }

    return { x: date, y: totalMessages };
  });

  return grouppedMessageByDate;
}

export default getMessagesSent;

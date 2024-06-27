async function processMessageToChatGPT(messages) {
  const API_KEY = process.env.REACT_APP_OPEN_AI_KEY;
  const systemMessage = {
    role: "system",
    content: "Explain all concepts like I am a professional developer",
  };

  // Formatting message to chat gpt compatible formate
  const apiMessages = messages.map((message) => ({
    role: message.sender,
    content: message.message,
  }));

  const apiRequestBody = {
    model: "gpt-3.5-turbo",
    messages: [systemMessage, ...apiMessages],
  };
  let aiResponse = null;

  // API call with message
  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiRequestBody),
  })
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((data) => {
      aiResponse = data.choices[0].message.content;
    })
    .catch((e) => {
      aiResponse = "An error has occured please try again later!";
    });

  return aiResponse;
}

export default processMessageToChatGPT;

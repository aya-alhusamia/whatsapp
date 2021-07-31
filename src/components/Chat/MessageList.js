const MessageList = (messages, id) => {
  let filtered = messages.filter((message) => message.chatId === id);
  console.log("filtered mesages", filtered);
  return filtered;
};

export default MessageList;

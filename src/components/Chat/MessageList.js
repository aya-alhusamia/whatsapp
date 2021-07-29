const MessageList = (messages, id) => {
  let filtered = messages.filter((message) => message.chatId === id);

  return filtered;
};

export default MessageList;

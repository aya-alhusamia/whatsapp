const MessageList = (messages, id) => {
  let filtered = messages.filter((message) => message.chatId === id);
  console.log(filtered);
  return filtered;
};

export default MessageList;

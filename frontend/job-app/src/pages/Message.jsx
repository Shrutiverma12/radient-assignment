const MessageItem = ({ message }) => (
  <div
    className={`p-2 my-2 rounded-md ${
      message.sent ? 'bg-blue-500 text-white' : 'bg-gray-200'
    }`}
  >
    {message.text}
  </div>
);
export default MessageItem;

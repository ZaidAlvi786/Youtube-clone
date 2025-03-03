import socket from "@/utils/socket";
import { useEffect, useState } from "react";

interface ChatMessage {
  user: string;
  message: string;
}

interface ChatBoxProps {
  videoId: string;
}

export default function ChatBox({ videoId }: ChatBoxProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket.emit("joinRoom", videoId);

    socket.on("chatMessage", (message: ChatMessage) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("chatMessage");
    };
  }, [videoId]);

  const sendMessage = () => {
    socket.emit("chatMessage", { videoId, message: newMessage });
    setNewMessage("");
  };

  return (
    <div className="mt-4 border p-4">
      <h3 className="text-lg font-semibold">Live Chat</h3>
      <div className="h-40 overflow-y-scroll border p-2">
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.user}:</strong> {msg.message}</p>
        ))}
      </div>
      <input
        className="border p-2 w-full mt-2"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

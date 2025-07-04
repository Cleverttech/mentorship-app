import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import { useState } from "react";

export interface Message {
  id: string;
  sender: "me" | "other";
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
}

export interface ChatConversationProps {
  participantName: string;
  participantAvatar: string;
  initialMessages: Message[];
  onSend: (message: string) => void;
}

export default function ChatConversation({
  participantName,
  participantAvatar,
  initialMessages,
  onSend,
}: ChatConversationProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    const trimmedMessage = newMessage.trim();
    if (!trimmedMessage) return;

    const messageToAdd: Message = {
      id: (messages.length + 1).toString(),
      sender: "me",
      senderName: "You",
      senderAvatar: "/avatars/you.jpg",
      content: trimmedMessage,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, messageToAdd]);
    setNewMessage("");
    onSend(trimmedMessage);
  };

  return (
    <Paper
      sx={{
        p: 2,
        height: "80vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar src={participantAvatar} alt={participantName} sx={{ mr: 2 }} />
        <Typography variant="h6">{participantName}</Typography>
      </Box>

      {/* Messages List */}
      <Box sx={{ flexGrow: 1, overflowY: "auto", mb: 2 }}>
        <List>
          {messages.map((msg) => (
            <Box
              key={msg.id}
              sx={{
                display: "flex",
                justifyContent: msg.sender === "me" ? "flex-end" : "flex-start",
              }}
            >
              <ListItem sx={{ maxWidth: "70%" }}>
                {msg.sender === "other" && (
                  <ListItemAvatar>
                    <Avatar src={msg.senderAvatar} alt={msg.senderName} />
                  </ListItemAvatar>
                )}
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        bgcolor: msg.sender === "me" ? "primary.main" : "grey.300",
                        color: msg.sender === "me" ? "white" : "black",
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        wordBreak: "break-word",
                      }}
                    >
                      {msg.content}
                    </Box>
                  }
                  secondary={msg.timestamp}
                  sx={{
                    textAlign: msg.sender === "me" ? "right" : "left",
                  }}
                />
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Message Input */}
      <Stack direction="row" spacing={2}>
        <TextField
          fullWidth
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          size="small"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <Button variant="contained" onClick={handleSendMessage}>
          Send
        </Button>
      </Stack>
    </Paper>
  );
}

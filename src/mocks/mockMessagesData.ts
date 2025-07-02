import { Message } from "../components/ChatConverstation";

export const mockMessages: Message[] = [
  {
    id: "1",
    sender: "other",
    senderName: "John Smith",
    senderAvatar: "/avatars/john-smith.jpg",
    content: "Looking forward to our session tomorrow!",
    timestamp: "2h ago",
  },
  {
    id: "2",
    sender: "other",
    senderName: "Jane Doe",
    senderAvatar: "/avatars/jane-doe.jpg",
    content: "Please review my resume draft.",
    timestamp: "5h ago",
  },
  {
    id: "3",
    sender: "other",
    senderName: "Michael Brown",
    senderAvatar: "/avatars/michael-brown.jpg",
    content: "Thanks for the great advice today.",
    timestamp: "1d ago",
  },
];

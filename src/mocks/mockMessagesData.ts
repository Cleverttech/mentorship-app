import { Message } from "../components/ChatConverstation";

export const mockMessages: Message[] = [
	{
		id: "1",
		sender: "other",
		senderName: "John Smith",
		senderAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
		content: "Looking forward to our session tomorrow!",
		timestamp: "2h ago",
	},
	{
		id: "2",
		sender: "other",
		senderName: "Jane Doe",
		senderAvatar: "https://randomuser.me/api/portraits/men/2.jpg",
		content: "Please review my resume draft.",
		timestamp: "5h ago",
	},
	{
		id: "3",
		sender: "other",
		senderName: "Michael Brown",
		senderAvatar: "https://randomuser.me/api/portraits/men/6.jpg",
		content: "Thanks for the great advice today.",
		timestamp: "1d ago",
	},
];

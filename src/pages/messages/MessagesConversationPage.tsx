import { Container } from "@mui/material";
import DashboardLayout from "../../components/DashboardLayout";
import ChatConversation from "../../components/ChatConverstation";
import type { Message } from "../../components/ChatConverstation";

export default function MessagesConversationPage() {
	const mockMessages: Message[] = [
		{
			id: "1",
			sender: "other",
			senderName: "John Smith",
			senderAvatar: "/avatars",
			content: "Hi, are we still meeting tomorrow?",
			timestamp: "2h ago",
		},
		{
			id: "2",
			sender: "me",
			senderName: "You",
			senderAvatar: "/avatars",
			content: "Yes, looking forward to it!",
			timestamp: "1h ago",
		},
	];

	const handleSend = (message: string) => {
		console.log("Send message to backend:", message);
		// TODO: integrate with PHP backend (Pusher, Laravel WebSockets, or Mercure)
	};

	return (
		<DashboardLayout>
			<Container maxWidth="md" sx={{ py: 4 }}>
				<ChatConversation
					participantName="John Smith"
					participantAvatar="/avatars"
					initialMessages={mockMessages}
					onSend={handleSend}
				/>
			</Container>
		</DashboardLayout>
	);
}

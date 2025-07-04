export const mockMenteeDashboard = {
	menteeName: "Clever Mentee",
	creditsAvailable: 45,
	creditsUsedThisMonth: 5,

	upcomingSessions: [
		{
			id: "s1",
			mentorName: "John Mentor",
			topic: "Machine Learning",
			date: "2025-06-27",
			time: "3:00 PM",
			creditsUsed: 15,
			title: "AI & Data Scientist",
		},
		{
			id: "s2",
			mentorName: "Charity Mentor",
			topic: "React Hooks Deep Dive",
			date: "2025-06-27",
			time: "3:00 PM",
			creditsUsed: 15,
			title: "Fullstack developer",
		},
	],

	suggestedMentors: [
		{
			id: "1",
			name: "John Smith",
			title: "Career Coach", // ✅ required
			expertise: ["Career Advice", "Interview Prep"],
			rating: 4.8,
			avatar: "https://randomuser.me/api/portraits/men/44.jpg",
			credits: 5, // ✅ required
			skills: ["Resume Review", "Interview Prep"],
		},
		{
			id: "2",
			name: "Jane Doe",
			title: "Resume Specialist",
			expertise: ["Resume Review"],
			rating: 4.6,
			avatar: "https://randomuser.me/api/portraits/women/44.jpg",
			credits: 4,
			skills: ["Resume Review", "Interview Prep"],
		},
		{
			id: "1",
			name: "Jemima Smith",
			title: "Career Coach", // ✅ required
			expertise: ["Career Advice", "Interview Prep"],
			rating: 4.8,
			avatar: "https://randomuser.me/api/portraits/women/65.jpg",
			credits: 5, // ✅ required
			skills: ["Resume Review", "Interview Prep"],
		},
		{
			id: "2",
			name: "James Doe",
			title: "Resume Specialist",
			expertise: ["Resume Review"],
			rating: 4.6,
			avatar: "https://randomuser.me/api/portraits/men/75.jpg",
			credits: 4,
			skills: ["Resume Review", "Interview Prep"],
		},
	],

	recentArticles: [
		{
			id: "1",
			title: "How to Ace Your Next Interview",
			date: "June 28, 2025",
			author: "John Smith",
			content:
				"Here is a detailed guide on preparing for your next interview effectively. Practice your answers, research the company, and maintain confidence during the process. Remember to tailor your responses to the job description and showcase your achievements with measurable results.",
		},
		{
			id: "2",
			title: "Building an Impressive Resume",
			date: "June 25, 2025",
			author: "Jane Doe",
			content:
				"Your resume is your marketing tool. Focus on clarity, achievements, and formatting. Here’s how to structure each section for maximum impact. Start with a strong summary, list experiences in reverse chronological order, and include quantifiable achievements to stand out.",
		},
		{
			id: "3",
			title: "Improving LinkedIn for Job Search",
			date: "June 22, 2025",
			author: "Michael Brown",
			content:
				"LinkedIn is a powerful job search tool. Optimise your headline, summary, and skills section to attract recruiters in your field. Regularly post insights related to your profession and engage with industry leaders to increase visibility.",
		},
		{
			id: "4",
			title: "Networking Tips for Career Growth",
			date: "June 20, 2025",
			author: "Lucy Green",
			content:
				"Networking is essential for career advancement. Attend industry events, join professional groups, and build authentic relationships. Don’t just seek opportunities – offer value to your connections to build strong long-term professional relationships.",
		},
	],
};

export const mockMentorDashboard = {
    mentorName: "Clever Mentor",
    stats: {
      totalSessions: 24,
      activeMentees: 5,
      averageRating: 4.8,
    },
    upcomingSessions: [
      {
        id: "session1",
        menteeName: "Jane Doe",
        topic: "Intro to React",
        date: "2025-06-28",
        time: "10:00 AM",
        creditsBooked: 15,
      },
      {
        id: "session2",
        menteeName: "John Smith",
        topic: "Portfolio Review",
        date: "2025-06-30",
        time: "2:30 PM",
        creditsBooked: 13,
      },
    ],
    activeMentees: [
      {
        id: "m1",
        name: "Jane Doe",
        avatar: "/avatars/jane.png",
        joined: "2025-06-01",
      },
      {
        id: "m2",
        name: "John Smith",
        avatar: "/avatars/john.png",
        joined: "2025-05-20",
      },
      {
        id: "m3",
        name: "Sarah Adams",
        avatar: "/avatars/sarah.png",
        joined: "2025-05-15",
      },
    ],
    recentArticles: [
      {
        id: "a1",
        title: "How to Nail Your Tech Interviews",
        date: "2025-06-20",
      },
      {
        id: "a2",
        title: "Top 5 Mistakes Junior Developers Make",
        date: "2025-06-10",
      },
    ],
  };
  
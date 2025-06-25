export const mockMenteeDashboard = {
    menteeName: "Clever Mentee",
    creditsAvailable: 45,
  
    upcomingSessions: [
      {
        id: "s1",
        mentorName: "John Mentor",
        topic: "React Hooks Deep Dive",
        date: "2025-06-27",
        time: "3:00 PM",
        creditsUsed: 15,
      },
    ],

      suggestedMentors: [
        {
          id: "1",
          name: "John Smith",
          title: "Career Coach", // ✅ required
          expertise: ["Career Advice", "Interview Prep"],
          rating: 4.8,
          avatar: "/avatars/john.png",
          credits: 5, // ✅ required
        },
        {
          id: "2",
          name: "Jane Doe",
          title: "Resume Specialist",
          expertise: ["Resume Review"],
          rating: 4.6,
          avatar: "/avatars/jane.png",
          credits: 4,
        },
      ],
    
  
    recentArticles: [
      {
        id: "a1",
        title: "How to Think Like a Senior Developer",
        author: "John Mentor",
        date: "2025-06-22",
      },
      {
        id: "a2",
        title: "Building Your First Portfolio Project",
        author: "Alex Rivera",
        date: "2025-06-18",
      },
    ],
  };
  
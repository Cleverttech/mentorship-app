import { useState, useEffect } from 'react';

export const useMenteeDashboardData = () => {
  interface MenteeDashboardData {
    menteeName: string;
    creditsAvailable: number;
    upcomingSessions: { id: number; title: string; date: string }[];
    suggestedMentors: { id: number; name: string; skills: string[] }[];
    recentArticles: { id: number; title: string; author: string }[];
  }

  const [data, setData] = useState<MenteeDashboardData | null>(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const mockData = {
        menteeName: 'John Doe',
        creditsAvailable: 20,
        upcomingSessions: [
          { id: 1, title: 'Session 1', date: '2025-06-30' },
          { id: 2, title: 'Session 2', date: '2025-07-05' },
        ],
        suggestedMentors: [
          { id: 1, name: 'Mentor A', skills: ['Career Advice'] },
          { id: 2, name: 'Mentor B', skills: ['Resume Review'] },
        ],
        recentArticles: [
          { id: 1, title: 'Article 1', author: 'Mentor A' },
          { id: 2, title: 'Article 2', author: 'Mentor B' },
        ],
      };
      setData(mockData);
    };

    fetchData();
  }, []);

  console.log('Dashboard Data:', data);

  return { data };
};

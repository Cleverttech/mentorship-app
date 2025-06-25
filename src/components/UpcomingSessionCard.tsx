import {
    Card,
    CardContent,
    Typography,
    Stack,
    Button,
  } from "@mui/material";
  
  interface Session {
    id: string;
    topic: string;
    date: string;
    time: string;
    mentorName: string;
  }
  
  export default function UpcomingSessionCard({ session }: { session: Session }) {
    return (
      <Card elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}>
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="subtitle1" fontWeight={600}>
              {session.topic}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              with {session.mentorName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              📅 {session.date} at {session.time}
            </Typography>
            <Button variant="text" size="small">View Details</Button>
          </Stack>
        </CardContent>
      </Card>
    );
  }
  
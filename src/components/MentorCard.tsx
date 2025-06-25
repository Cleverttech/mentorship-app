import {
    Box,
    Card,
    CardContent,
    Typography,
    Avatar,
    Stack,
    Button,
  } from "@mui/material";
  
  interface Mentor {
    id: string;
    name: string;
    title: string;
    avatar: string;
    credits: number;
  }
  
  export default function MentorCard({ mentor }: { mentor: Mentor }) {
    return (
      <Card elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}>
        <CardContent>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Avatar src={mentor.avatar} alt={mentor.name} sx={{ width: 56, height: 56 }} />
            <Typography fontWeight={600}>{mentor.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {mentor.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              💳 {mentor.credits} credits / session
            </Typography>
            <Button variant="outlined" size="small">
              Book Now
            </Button>
          </Stack>
        </CardContent>
      </Card>
    );
  }
  
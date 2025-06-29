import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Stack,
    Button,
    Paper,
  } from "@mui/material";
import { useNavigate } from "react-router-dom";
  
  interface Mentor {
    id: string;
    name: string;
    title: string;
    avatar: string;
    credits: number;
    skills: string[]; // Added skills field
  }
  
  export default function MentorCard({ mentor }: { mentor: Mentor }) {
    const navigate = useNavigate();

    const handleBookSession = () => {
      // Navigate to booking page with mentor ID (mock route for now)
      navigate(`/bookings/${mentor.id}`);
    };
    return (
      <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
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
            <Typography variant="body2" color="text.secondary">
              Skills: {mentor.skills.join(", ")}
            </Typography>
            <Button variant="outlined" size="small" onClick={handleBookSession}>
              Book Now
            </Button>
          </Stack>
        </CardContent>
      </Card>
      </Paper>
    );
  }

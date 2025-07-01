import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Chip, Divider } from '@mui/material';

const ProfilePage = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem('profileData');
    if (data) {
      setProfile(JSON.parse(data));
    }
  }, []);

  if (!profile) {
    return <Typography>Loading profile...</Typography>;
  }

  return (
    <Box maxWidth={600} mx="auto" mt={4}>
      <Typography variant="h4" gutterBottom>
        Welcome, {profile.fullName}
      </Typography>

      <Avatar
        src={profile.profileImage?.[0]}
        sx={{ width: 100, height: 100, mb: 2 }}
      />

      <Typography variant="body1">
        <strong>Role:</strong> {profile.role}
      </Typography>

      <Typography variant="body1" mt={2}>
        <strong>Bio:</strong> {profile.bio || '—'}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1">
        <strong>Skills:</strong>
      </Typography>
      <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
        {profile.skills?.map((skill: string) => (
          <Chip key={skill} label={skill} />
        ))}
      </Box>

      {profile.credits && (
        <Typography variant="body1" mt={2}>
          <strong>Credits:</strong> {profile.credits}
        </Typography>
      )}

      {profile.role === 'mentee' && profile.learningInterest && (
        <Typography variant="body1" mt={2}>
          <strong>Learning Interest:</strong> {profile.learningInterest}
        </Typography>
      )}
    </Box>
  );
};

export default ProfilePage;

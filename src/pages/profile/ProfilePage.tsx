import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import DashboardLayout from "../../components/DashboardLayout";
import { useForm } from "react-hook-form";

interface ProfileFormData {
  name: string;
  email: string;
  bio: string;
  skills: string;
  availability: string;
}

export default function ProfilePage() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: {
      name: "John Smith",
      email: "john.smith@example.com",
      bio: "Experienced career coach with expertise in resume review and interview preparation.",
      skills: "Career Coaching, Resume Review, Interview Prep",
      availability: "Weekdays 9 AM - 5 PM",
    }
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Updated profile:", data);
    // TODO: connect to backend API to update profile
  };

  return (
    <DashboardLayout>
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Profile
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            View and edit your profile information.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={3}>
            <TextField
              label="Full Name"
              fullWidth
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              label="Email"
              fullWidth
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Bio"
              multiline
              rows={4}
              fullWidth
              {...register("bio")}
            />

            <TextField
              label="Skills (comma-separated)"
              fullWidth
              {...register("skills")}
            />

            <TextField
              label="Availability"
              fullWidth
              {...register("availability")}
            />

            <Button variant="contained" type="submit">
              Save Changes
            </Button>
          </Stack>
        </form>
      </Container>
    </DashboardLayout>
  );
}

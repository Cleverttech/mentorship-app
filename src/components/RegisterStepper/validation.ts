import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["mentor", "mentee"]),
  bio: z.string().optional(),
  skills: z.array(z.string()).optional(),
  profileImage: z.any().optional(),
  credits: z.number().min(1, "Please select at least 1 credit").optional(),
  learningInterest: z.string().optional(),
});

export type RegisterFormType = z.infer<typeof registerSchema>;

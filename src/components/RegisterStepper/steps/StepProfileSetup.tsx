import React from "react";
import { TextField, Box, Chip, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";

const StepProfileSetup = () => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const skills = watch("skills") || [];

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
      if (value && !skills.includes(value)) {
        setValue("skills", [...skills, value]);
        e.currentTarget.value = "";
      }
    }
  };

  const handleDeleteSkill = (skillToDelete: string) => {
    setValue(
      "skills",
      skills.filter((s: string) => s !== skillToDelete)
    );
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <TextField
        label="Bio"
        multiline
        rows={4}
        {...register("bio")}
        fullWidth
      />

      <TextField
        label="Add a skill and press Enter"
        onKeyDown={handleAddSkill}
        fullWidth
      />
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {skills.map((skill: string) => (
          <Chip
            key={skill}
            label={skill}
            onDelete={() => handleDeleteSkill(skill)}
          />
        ))}
      </Stack>

      <input type="file" accept="image/*" {...register("profileImage")} />
    </Box>
  );
};

export default StepProfileSetup;

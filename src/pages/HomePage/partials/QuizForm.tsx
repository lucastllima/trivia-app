import { ButtonGroupOption } from '@/components';
import { useState } from 'react';
import {
  CardContent,
  Typography,
} from "@mui/material";
import type { ButtonGroupOptionSelectedCallback } from "@/components/ButtonGroupOption";

export const QuizForm = () => {
  const [options] = useState(["Answer 1", "Answer 2", "Answer 3", "Answer 4"]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <CardContent className="QuizForm">
      <Typography variant="h6" gutterBottom>Question</Typography>
      <ButtonGroupOption options={options} selectedOption={selectedOption} onSelected={({ option }: ButtonGroupOptionSelectedCallback) => setSelectedOption(option)} />
    </CardContent>
  );
};

import { Card, Container, Typography } from "@mui/material";
import { useState } from "react";
import { InitialForm, QuizForm } from "./partials";

export const HomePage = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <Container maxWidth="sm">
      <Typography align="center" variant="h4" gutterBottom>
        Trivia App
      </Typography>

      <Card>
        {hasStarted ? (
          <QuizForm />
        ) : (
          <InitialForm triggerStart={() => setHasStarted(true)} />
        )}
      </Card>
    </Container>
  );
};

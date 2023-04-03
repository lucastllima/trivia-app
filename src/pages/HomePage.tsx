import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

interface CategoryOption {
  label: string;
  value: string;
}

export const HomePage = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const options: CategoryOption[] = [
    { label: "Opção 1", value: "opt_1" },
    { label: "Opção 2", value: "opt_2" },
    { label: "Opção 3", value: "opt_3" },
    { label: "Opção 4", value: "opt_4" },
    { label: "Opção 5", value: "opt_5" },
    { label: "Opção 67", value: "opt_6" },
    { label: "Opção 7", value: "opt_7" },
    { label: "Opção 8", value: "opt_8" },
  ];
  const headerTitle =
    "Think you're a trivia whiz? Put your knowledge to the test with our trivia game! Choose your favorite category, challenge yourself, and discover how much you really know about history, science, pop culture, and more. Play now and prove that you're a true master of knowledge!";

  const getOptionLabel = (option: CategoryOption) => option.label;
  const getOptionSelected = (option: CategoryOption, value: CategoryOption) =>
    option.value === value.value;

  // TODO: Define breakpoints using theme provider
  const isScreenSmall = useMediaQuery('(max-width:960px)');

  return (
    <Container maxWidth="sm">
      <Typography align="center" variant="h4" gutterBottom>
        Trivia App
      </Typography>

      <Card>
        {!hasStarted && (
          <CardHeader
            title={headerTitle}
            titleTypographyProps={{
              variant: "subtitle1",
              align: "justify",
              gutterBottom: true,
            }}
          />
        )}

        <CardContent>
          <Autocomplete
            disablePortal
            id="category-autocmplete"
            multiple
            options={options}
            value={categories}
            onChange={(_event, newValue) => {
              setCategories(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Categories" />
            )}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={getOptionSelected}
          />

          <Button
            sx={{
              width: isScreenSmall ? "100%" : "auto",
              marginTop: 4,
              mx: "auto",
              display: "flex",
            }}
            variant="contained"
            onClick={() => setHasStarted(!hasStarted)}
          >
            Start Trivia
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

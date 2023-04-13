import type { CategoryOption } from "@/services/models";
import { getCategories } from "@/services/TriviaService";
import { PlayArrow } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  CardContent,
  CardHeader,
  CircularProgress,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";

type InitialFormProps = {
  triggerStart: () => void;
};

export const InitialForm = ({ triggerStart }: InitialFormProps) => {
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [triviaCategories, setTriviaCategories] = useState<CategoryOption[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const headerTitle =
    "Think you're a trivia whiz? Put your knowledge to the test with our trivia game! Choose your favorite category, challenge yourself, and discover how much you really know about history, science, pop culture, and more. Play now and prove that you're a true master of knowledge!";

  const getOptionLabel = (option: CategoryOption) => option.label;
  const getOptionSelected = (option: CategoryOption, value: CategoryOption) =>
    option.value === value.value;

  // TODO: Define breakpoints using theme provider
  const isScreenSmall = useMediaQuery("(max-width:960px)");

  useEffect(() => {
    setLoading(true)
    getCategories().then((data) => {
      setTriviaCategories(data);
      setLoading(false)
    })
  }, []);

  return (
    <div className="InitialForm">
      <CardHeader
        title={headerTitle}
        titleTypographyProps={{
          variant: "subtitle1",
          align: "justify",
          gutterBottom: true,
        }}
      />
      <CardContent>
        <Autocomplete
          disablePortal
          id="category-autocmplete"
          multiple
          options={triviaCategories}
          value={categories}
          loading={loading}
          onChange={(_event, newValue) => {
            setCategories(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Categories"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading && <CircularProgress color="primary" size={20} />}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
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
          onClick={() => triggerStart()}
          disabled={categories.length === 0}
          endIcon={
            <PlayArrow
              sx={{
                marginBottom: "4px",
              }}
            />
          }
        >
          Start
        </Button>
      </CardContent>
    </div>
  );
};

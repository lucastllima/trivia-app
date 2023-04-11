import { Button } from "@mui/material";

export interface ButtonGroupOptionSelectedCallback {
    option: string,
    idx: number
}

type ButtonGroupOptionProps = {
    options: string[],
    selectedOption: string | null,
    onSelected: (callback: ButtonGroupOptionSelectedCallback) => void;
}

export const ButtonGroupOption = ({ options, onSelected, selectedOption }: ButtonGroupOptionProps) => {

    const selectedOptionVariant = (option: string) => (selectedOption === option) ? "contained" : "outlined"
    return (
        <div className="buttonGroupOption">
            {
                options.map((option, idx) => (
                    <Button key={idx}
                        variant={selectedOptionVariant(option)}
                        sx={
                            {
                                borderRadius: 15,
                                width: 1,
                                mb: idx < options.length - 1 ? 3 : 0,
                                height: 60,
                            }
                        }
                        onClick={() => onSelected({ option, idx })}
                    >
                        {option}
                    </Button>
                ))
            }
        </div>
    )
}
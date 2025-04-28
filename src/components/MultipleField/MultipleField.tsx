import { Autocomplete, Chip, TextField } from "@mui/material";
import { useState } from "react";

interface IMultipleProps {
  name: string;
  placeholder?: string;
  defaultValue?: string;
}

export const MultipleField: React.FC<IMultipleProps> = ({
  name,
  defaultValue,
  placeholder,
}) => {
  let parsedValue = [];
  try {
    parsedValue = JSON.parse(defaultValue ?? "");
  } catch {}
  const defaultValueR = defaultValue ? parsedValue : [];
  const [value, setValue] = useState(defaultValueR);

  return (
    <>
      <Autocomplete
        multiple
        id={name}
        options={[]}
        sx={{ mt: 1 }}
        value={value}
        defaultValue={defaultValueR}
        freeSolo
        renderValue={(value: readonly string[], getItemProps) =>
          value.map((option: string, index: number) => {
            const { key, ...itemProps } = getItemProps({ index });
            return (
              <Chip
                variant="outlined"
                label={option}
                key={key}
                {...itemProps}
              />
            );
          })
        }
        onChange={(_, value) => setValue(value)}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label={placeholder} />
        )}
      />
      <input type="hidden" name={name} value={JSON.stringify(value)} />
    </>
  );
};

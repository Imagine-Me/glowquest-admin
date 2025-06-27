import { Autocomplete, Chip, TextField } from "@mui/material";
import { useMemo, useState } from "react";

interface IMultipleProps {
  name: string;
  placeholder?: string;
  defaultValue?: string;
  isOutputArray?: boolean;
}

export const MultipleField: React.FC<IMultipleProps> = ({
  name,
  defaultValue,
  placeholder,
  isOutputArray = false,
}) => {
  let parsedValue: string[] = [];
  try {
    if (defaultValue && isOutputArray) {
      parsedValue = JSON.parse(defaultValue);
    }
    if (defaultValue && !isOutputArray) {
      parsedValue = defaultValue?.split(",");
    }
  } catch {}
  const defaultValueR = defaultValue ? parsedValue : [];
  const [value, setValue] = useState(defaultValueR);

  const outputValue = useMemo(() => {
    if (isOutputArray) {
      return JSON.stringify(value);
    }
    return value.join(",");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

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
      <input type="hidden" name={name} value={outputValue} />
    </>
  );
};

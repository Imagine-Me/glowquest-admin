import { SelectOption } from "@/interfaces/common.interface";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

interface ISelectFormProps {
  name: string;
  placeholder?: string;
  value?: string;
  fetchData: () => Promise<Array<{ label: string; value: string }>>;
}

export const SelectForm = ({
  value,
  fetchData,
  name,
  placeholder,
}: ISelectFormProps) => {
  const [options, setOptions] = useState<SelectOption[]>([]);
  useEffect(() => {
    fetchData().then(setOptions);
  }, []);
  return (
    <FormControl fullWidth>
      <InputLabel id={name}>{placeholder}</InputLabel>
      <Select
        sx={{ mt: 2 }}
        defaultValue={value}
        fullWidth
        name={name}
        labelId={name}
        label={placeholder}
      >
        {options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

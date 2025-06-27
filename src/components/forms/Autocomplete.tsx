import { SelectOption } from "@/interfaces/common.interface";
import { Autocomplete, debounce, TextField } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";

interface IAutoCompleteFormProps {
  name: string;
  placeholder?: string;
  defaultValue?: string;
  fetchData: (
    value: string
  ) => Promise<Array<{ label: string; value: string }>>;
  multiple?: boolean;
  dependedFields?: string[];
  formRef?: React.RefObject<HTMLFormElement | null>;
}

export const AutoCompleteForm: React.FC<IAutoCompleteFormProps> = ({
  name,
  defaultValue,
  placeholder,
  fetchData,
  multiple = false,
  dependedFields,
  formRef,
}) => {
  const [value, setValue] = useState<SelectOption | SelectOption[] | null>(
    null
  );
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<readonly SelectOption[]>([]);
  const [loading, setLoading] = useState(false);
  const isLoadedFirstTime = useRef(false);

  const fetchOption = debounce(
    async (value: string, callback: (options: SelectOption[]) => void) => {
      setLoading(true);
      fetchData(value).then((val) => {
        setLoading(false);
        callback(val);
      });
    },
    400
  );

  useEffect(() => {
    if (!isLoadedFirstTime.current && defaultValue && options.length > 0) {
      isLoadedFirstTime.current = true;
      if (multiple && Array.isArray(defaultValue)) {
        const newOption = options.filter((option) =>
          defaultValue.includes(option.value)
        );
        setValue(newOption);
      } else {
        const newOption = options.find(
          (option) => (option.value = defaultValue)
        );
        if (newOption) {
          setValue(newOption);
        }
      }
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, defaultValue]);

  useEffect(() => {
    let referenceData = "";
    if (formRef?.current && dependedFields) {
      const form = new FormData(formRef.current);
      referenceData = dependedFields.reduce((acc, val) => {
        const data = form.get(val) ?? "";
        return `${acc}&${val}=${data}`;
      }, "");
    }
    fetchOption(`${inputValue}${referenceData}`, setOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const outputValue = useMemo(() => {
    if (multiple && value === null) {
      return JSON.stringify([]);
    }
    if (Array.isArray(value)) {
      const newValue = value.map((val) => val.value);
      return JSON.stringify(newValue);
    }
    if (value !== null && typeof value === "object") {
      return value.value;
    }
    return "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const autoCompleteValue = useMemo(() => {
    if (value === null) {
      return multiple ? [] : null;
    }
    return value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <Autocomplete
        multiple={multiple}
        sx={{ mt: 1.5 }}
        getOptionLabel={(option: SelectOption) => {
          return typeof option === "string" ? option : option.label;
        }}
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={autoCompleteValue}
        noOptionsText="No Options"
        loading={loading}
        onChange={(_, newValue: unknown) => {
          if (multiple) {
            setValue(newValue as SelectOption[]);
          } else {
            setValue(newValue as SelectOption);
          }
        }}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label={placeholder} fullWidth />
        )}
      />
      <input type="hidden" name={name} value={outputValue} />
    </>
  );
};

"use client";

import { IResponseModel } from "@/interfaces/common.interface";
import { IForm } from "@/interfaces/form.interface";
import {
  Alert,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useMemo, useRef, useState } from "react";
import { MultipleField } from "../forms/MultipleField";
import { parseFormData } from "@/utils/parseForm";
import { SelectForm } from "../forms/Select";
import { AutoCompleteForm } from "../forms/Autocomplete";
import { JsonEditorComponent } from "../forms/JsonEditor";

interface IFormModal {
  open: boolean;
  handleClose: () => void;
  form: IForm[];
  title?: string;
  bodyTitle?: string;
  isUpdate: boolean;
  onSubmit: (formData: string) => Promise<IResponseModel<unknown>>;
}

export const FormModal: React.FC<IFormModal> = ({
  open,
  handleClose,
  form,
  bodyTitle,
  title,
  onSubmit,
  isUpdate,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const formElements = useMemo(() => {
    return form.map(
      ({
        name,
        placeholder,
        type,
        required,
        value: formValue,
        getOptions,
        multiple,
        isOutputArray,
        valueFormatter,
        hideOnCreate,
        hideOnUpdate,
        dependedFields,
      }) => {
        let value = formValue;
        if (valueFormatter) {
          value = valueFormatter(formValue);
        }
        if (isUpdate && hideOnUpdate) {
          return null;
        }
        if (!isUpdate && hideOnCreate) {
          return null;
        }
        switch (type) {
          case "text":
            return (
              <TextField
                key={name}
                margin="dense"
                id={name}
                name={name}
                placeholder={placeholder}
                fullWidth
                variant="outlined"
                required={required}
                defaultValue={value}
              />
            );
          case "textarea":
            return (
              <TextField
                key={name}
                required={required}
                margin="dense"
                id={name}
                name={name}
                rows={3}
                placeholder={placeholder}
                fullWidth
                variant="outlined"
                multiline
                defaultValue={value}
              />
            );
          case "hidden":
            return (
              <input
                key={name}
                name={name}
                type="hidden"
                value={value as number}
              />
            );
          case "multiple":
            return (
              <MultipleField
                key={name}
                name={name}
                defaultValue={value as string}
                placeholder={placeholder}
                isOutputArray={isOutputArray}
              />
            );
          case "select":
            return (
              <SelectForm
                fetchData={getOptions!}
                name={name}
                key={name}
                placeholder={placeholder}
                value={value as string}
              />
            );
          case "autocomplete":
            return (
              <AutoCompleteForm
                formRef={formRef}
                key={name}
                fetchData={getOptions!}
                name={name}
                defaultValue={value as string}
                placeholder={placeholder}
                multiple={multiple}
                dependedFields={dependedFields}
              />
            );
          case "json":
            return (
              <JsonEditorComponent
                name={name}
                data={value as Record<string, unknown>}
                key={name}
                placeholder={placeholder}
              />
            );
          case "checkbox":
            return (
              <FormControlLabel
                control={
                  <Checkbox defaultChecked={value as boolean} name={name} />
                }
                label={placeholder}
                name={name}
                key={name}
              />
            );
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          component: "form",
          ref: formRef,
          onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setIsSubmitted(true);
            const formData = new FormData(event.currentTarget);
            const response = await onSubmit?.(
              JSON.stringify(parseFormData(formData))
            );
            if (!response.ok) {
              setError(response.data as string);
            } else {
              handleClose();
            }
            setIsSubmitted(false);
          },
        },
      }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {error && (
          <Alert variant="filled" severity="error">
            {JSON.stringify(error)}
          </Alert>
        )}
        {bodyTitle && <DialogContentText>{bodyTitle}</DialogContentText>}
        {formElements}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button type="submit" variant="contained" loading={isSubmitted}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

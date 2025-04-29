"use client";

import { IResponseModel } from "@/interfaces/common.interface";
import { IForm } from "@/interfaces/form.interface";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { MultipleField } from "../forms/MultipleField";
import { parseFormData } from "@/utils/parseForm";
import { SelectForm } from "../forms/Select";
import { AutoCompleteForm } from "../forms/Autocomplete";

interface IFormModal {
  open: boolean;
  handleClose: () => void;
  form: IForm[];
  title?: string;
  bodyTitle?: string;
  onSubmit: (formData: string) => Promise<IResponseModel<any>>;
}

export const FormModal: React.FC<IFormModal> = ({
  open,
  handleClose,
  form,
  bodyTitle,
  title,
  onSubmit,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formElements = useMemo(() => {
    return form.map(
      ({ name, placeholder, type, required, value, getOptions, multiple }) => {
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
                key={name}
                fetchData={getOptions!}
                name={name}
                defaultValue={value as string}
                placeholder={placeholder}
                multiple={multiple}
              />
            );
        }
      }
    );
  }, [form]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: "form",
          onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setIsSubmitted(true);
            const formData = new FormData(event.currentTarget);
            console.log(parseFormData(formData));
            const formJson = Object.fromEntries((formData as any).entries());
            const response = await onSubmit?.(JSON.stringify(parseFormData(formData)));
            if (!response.ok) {
              setError(response.data);
            } else {
              setIsSubmitted(false);
              handleClose();
            }
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

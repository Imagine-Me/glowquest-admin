"use client";

import { IResponseModel } from "@/interfaces/common.interface";
import { IForm } from "@/interfaces/form.interface";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useMemo, useState } from "react";

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
    return form.map(({ name, placeholder, type, required, value }) => {
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
      }
    });
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
            const formJson = Object.fromEntries((formData as any).entries());
            const response = await onSubmit?.(JSON.stringify(formJson));
            if (!response.ok) {
              setError(response.data);
            }
            setIsSubmitted(false);
            handleClose();
          },
        },
      }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
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

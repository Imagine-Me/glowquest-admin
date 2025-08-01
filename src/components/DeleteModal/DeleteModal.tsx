"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

interface IDeleteModalProps<T> {
  open: boolean;
  onClose: () => void;
  row: T;
  deleteItem: (id: number) => Promise<{
    data: unknown;
    status: number;
    ok: boolean;
  }>;
}
export default function DeleteModal<T>({
  onClose,
  open,
  row,
  deleteItem,
}: IDeleteModalProps<T>) {
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setLoading(true);
    deleteItem(row["id" as keyof T] as number).finally(() => {
      setLoading(false);
      onClose();
    });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete brand</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete{" "}
          <b>{row?.["name" as keyof T] as string}</b>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleClose}
          autoFocus
          loading={loading}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

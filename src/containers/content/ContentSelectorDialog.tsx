"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { CONTENT_TYPES } from "@/constants/contentTypes";
import { useState } from "react";

interface ContentSelectorDialogProps {
  open: boolean;
  onClose: () => void;
  onSelect: (type: string) => void;
}

export function ContentSelectorDialog({
  open,
  onClose,
  onSelect,
}: ContentSelectorDialogProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Select Type</DialogTitle>
      <DialogContent dividers sx={{ overflowY: "auto" }}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="content-type-label">Type</InputLabel>
          <Select
            labelId="content-type-label"
            id="content-type-select"
            value={selectedType}
            label="Type"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {CONTENT_TYPES.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          disabled={!selectedType}
          onClick={() => {
            if (selectedType) {
              onSelect(selectedType);
              onClose();
            }
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

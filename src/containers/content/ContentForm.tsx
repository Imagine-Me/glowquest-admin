import { ContentItem } from "@/interfaces/content.interface";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Grid,
} from "@mui/material";
import { CONTENT_TYPES } from "@/constants/contentTypes";
import { useEffect, useMemo, useRef, useState } from "react";

import classes from "./content-form.module.scss";
import { useAutosizeTextArea } from "@/hooks/useAutosizeArea";

interface IContentFormProps {
  item: ContentItem | null;
  onUpdate: (updatedItem: ContentItem) => void;
}

export const ContentForm: React.FC<IContentFormProps> = ({
  item,
  onUpdate,
}) => {
  const subEdit = (
    key: keyof ContentItem,
    subKey: unknown,
    value: string | number,
  ) => {
    if (!item) return;
    const editValue = item[key];
    console.log(key, subKey, value, item);
    if (typeof editValue === "string" || typeof editValue === "undefined") {
      return;
    }
    const tempValue = { ...editValue };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tempValue[subKey as keyof typeof tempValue] = value as any;
    console.log(tempValue);
    onUpdate({ ...item, [key]: tempValue });
  };

  const form = useMemo(() => {
    switch (item?.type) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "p":
        return (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
              label="Value"
              id="content-value-input"
              value={item?.value || ""}
              fullWidth
              rows={4}
              multiline
              onChange={(e) => onUpdate({ ...item!, value: e.target.value })}
            />
          </FormControl>
        );

      case "image":
        return (
          <>
            <Grid container spacing={2}>
              <Grid size={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <TextField
                    label="Value"
                    id="content-value-input"
                    value={item?.value || ""}
                    fullWidth
                    onChange={(e) =>
                      onUpdate({ ...item!, value: e.target.value })
                    }
                  />
                </FormControl>
              </Grid>
              <Grid size={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="content-position-label">Type</InputLabel>
                  <Select
                    labelId="content-position-label"
                    id="content-position-select"
                    value={item?.image?.position || ""}
                    label="Position"
                    onChange={(e) =>
                      subEdit("image", "position", e.target.value)
                    }
                  >
                    {["center", "left", "right"].map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={6}>
                <TextField
                  label="Width"
                  id="content-width-input"
                  value={item?.image?.width || ""}
                  fullWidth
                  onChange={(e) =>
                    subEdit(
                      "image",
                      "width",
                      e.target.value ? parseInt(e.target.value) : 0,
                    )
                  }
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  label="Height"
                  id="content-hieght-input"
                  value={item?.image?.height || ""}
                  fullWidth
                  onChange={(e) =>
                    subEdit(
                      "image",
                      "height",
                      e.target.value ? parseInt(e.target.value) : 0,
                    )
                  }
                />
              </Grid>
            </Grid>
          </>
        );
      default:
        return null;
    }
  }, [item, onUpdate]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!item) return null;
  return (
    <>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="content-type-label">Type</InputLabel>
        <Select
          labelId="content-type-label"
          id="content-type-select"
          value={item.type}
          label="Type"
          onChange={(e) =>
            onUpdate({ ...item, type: e.target.value as ContentItem["type"] })
          }
        >
          {CONTENT_TYPES.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {form}
    </>
  );
};
interface TextAreaProps {
  value: string;
  onChange: (value?: string) => void;
  className?: string;
}
const TextArea: React.FC<TextAreaProps> = ({ onChange, value, className }) => {
  const [textAreaValue, setTextAreaValue] = useState(value);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, textAreaValue);

  useEffect(() => {
    onChange(textAreaValue);
  }, [textAreaValue]);

  return (
    <textarea
      className={`${classes.textarea} ${classes[className ?? ""]}`}
      onChange={(e) => setTextAreaValue(e.target.value)}
      value={textAreaValue}
      ref={textAreaRef}
    ></textarea>
  );
};
export const ContentForm1: React.FC<IContentFormProps> = ({
  item,
  onUpdate,
}) => {
  const subEdit = (
    key: keyof ContentItem,
    subKey: unknown,
    value: string | number,
  ) => {
    if (!item) return;
    const editValue = item[key];
    console.log(key, subKey, value, item);
    if (typeof editValue === "string" || typeof editValue === "undefined") {
      return;
    }
    const tempValue = { ...editValue };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tempValue[subKey as keyof typeof tempValue] = value as any;
    console.log(tempValue);
    onUpdate({ ...item, [key]: tempValue });
  };
  switch (item?.type) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "p":
      return (
        <TextArea
          value={item?.value || ""}
          className={item?.type}
          onChange={(e) => onUpdate({ ...item!, value: e ?? "" })}
        />
      );

    case "image":
      return (
        <>
          <Grid container spacing={2}>
            <Grid size={6}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Value"
                  id="content-value-input"
                  value={item?.value || ""}
                  fullWidth
                  onChange={(e) =>
                    onUpdate({ ...item!, value: e.target.value })
                  }
                />
              </FormControl>
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="content-position-label">Type</InputLabel>
                <Select
                  labelId="content-position-label"
                  id="content-position-select"
                  value={item?.image?.position || ""}
                  label="Position"
                  onChange={(e) => subEdit("image", "position", e.target.value)}
                >
                  {["center", "left", "right"].map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={6}>
              <TextField
                label="Width"
                id="content-width-input"
                value={item?.image?.width || ""}
                fullWidth
                onChange={(e) =>
                  subEdit(
                    "image",
                    "width",
                    e.target.value ? parseInt(e.target.value) : 0,
                  )
                }
              />
            </Grid>
            <Grid size={6}>
              <TextField
                label="Height"
                id="content-hieght-input"
                value={item?.image?.height || ""}
                fullWidth
                onChange={(e) =>
                  subEdit(
                    "image",
                    "height",
                    e.target.value ? parseInt(e.target.value) : 0,
                  )
                }
              />
            </Grid>
          </Grid>
        </>
      );
    default:
      return null;
  }
};

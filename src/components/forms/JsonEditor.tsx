import { FormLabel } from "@mui/material";
import { JsonEditor } from "json-edit-react";
import React, { useState } from "react";

interface IJsonEditorComponentProps {
  data?: Record<string, unknown>;
  name: string;
  placeholder?: string;
}

export const JsonEditorComponent: React.FC<IJsonEditorComponentProps> = ({
  data,
  name,
  placeholder,
}) => {
  let defaultValue: Record<string, unknown>;
  console.log(data);
  try {
    if (typeof data === "string") {
      defaultValue = JSON.parse(data as unknown as string);
    } else {
      defaultValue = data ?? {};
    }
  } catch {
    defaultValue = {};
  }
  const [jsonData, setJsonData] =
    useState<Record<string, unknown>>(defaultValue);
  return (
    <>
      <FormLabel>{placeholder}</FormLabel>
      <JsonEditor
        data={jsonData}
        setData={(data) => setJsonData(data as Record<string, unknown>)}
      />
      <input name={name} type="hidden" value={JSON.stringify(jsonData)} />
    </>
  );
};

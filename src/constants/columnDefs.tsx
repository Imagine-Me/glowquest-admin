import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const brandColDefs = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
): GridColDef[] => [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Brand" },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "img_url", headerName: "Image URL" },
  { field: "slug", headerName: "Slug", width: 200 },
  {
    field: "",
    headerName: "Actions",
    width: 200,
    renderCell(params) {
      return (
        <>
          <IconButton color="primary" onClick={() => onEdit(params.row.id)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => onDelete(params.row.id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </>
      );
    },
  },
];

export const categoryColDefs = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
): GridColDef[] => [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Category" },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "image_url", headerName: "Image URL" },
  { field: "slug", headerName: "Slug", width: 200 },
  {
    field: "keywords",
    headerName: "Keywords",
    valueGetter(value) {
      try {
        return JSON.parse(value).toString();
      } catch {
        return "";
      }
    },
  },
  {
    field: "",
    headerName: "Actions",
    width: 200,
    renderCell(params) {
      return (
        <>
          <IconButton color="primary" onClick={() => onEdit(params.row.id)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => onDelete(params.row.id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </>
      );
    },
  },
];

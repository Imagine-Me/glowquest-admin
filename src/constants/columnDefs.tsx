import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ICategoryModel } from "@/interfaces/category.interface";
import { IBrandModel } from "@/interfaces/brand.interface";

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

export const variantColDefs = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
): GridColDef[] => [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "type", headerName: "Type" },
  { field: "value", headerName: "Value" },
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

export const productColDefs = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
): GridColDef[] => [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "description", headerName: "Description", flex: 1, minWidth: 200 },
  { field: "image", headerName: "Image" },
  {
    field: "category",
    headerName: "Category",
    valueGetter(value: ICategoryModel) {
      return value.name;
    },
  },
  {
    field: "brands",
    headerName: "Brands",
    valueGetter(value: IBrandModel[]) {
      return value.map((brand) => brand.name).join(",");
    },
    flex: 1,
    minWidth: 200,
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

export const siteColDefs = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
): GridColDef[] => [
  { field: "id", headerName: "ID", minWidth: 200 },
  { field: "name", headerName: "Name", flex: 1 },
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

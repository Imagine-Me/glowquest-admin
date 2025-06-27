import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ICategoryModel } from "@/interfaces/category.interface";
import { IBrandModel } from "@/interfaces/brand.interface";
import { IProductModel } from "@/interfaces/product.interface";
import { VariantTable } from "@/components/Variant/VariantTable";
import { IItemModel } from "@/interfaces/item.interface";
import { ISiteModel } from "@/interfaces/site.interface";

export const brandColDefs = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
): GridColDef[] => [
  { field: "name", headerName: "Brand", minWidth: 200 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "img_url", headerName: "Image URL", minWidth: 200 },
  { field: "slug", headerName: "Slug", minWidth: 200 },
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
  { field: "name", headerName: "Name", flex: 1 },
  { field: "type", headerName: "Type" },
  { field: "value", headerName: "Value" },
  { field: "label", headerName: "Label" },
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

export const itemColDefs = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
): GridColDef[] => [
  { field: "name", headerName: "Name", minWidth: 200, flex: 1 },
  { field: "slug", headerName: "Slug", minWidth: 200 },
  { field: "description", headerName: "Description", minWidth: 200 },
  {
    field: "brand",
    headerName: "Brand",
    minWidth: 200,
    valueGetter(value: IBrandModel) {
      return value.name;
    },
  },
  {
    field: "product",
    headerName: "Product",
    minWidth: 200,
    valueGetter(value: IProductModel) {
      return value.name;
    },
  },
  {
    field: "variants",
    headerName: "Variants",
    minWidth: 200,
    renderCell({ row }) {
      const value = row.variants;
      return value ? <VariantTable variants={value} /> : "_";
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


export const blogColDefs = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
): GridColDef[] => [
  { field: "title", headerName: "Title", minWidth: 200, flex: 1 },
  { field: "slug", headerName: "Slug", minWidth: 200 },
  { 
    field: "is_published", 
    headerName: "Published", 
    type: "boolean",
    width: 120 
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

export const itemDetailsColDefs = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
): GridColDef[] => [
  {
    field: "item",
    headerName: "Item",
    minWidth: 200,
    valueGetter: (value: IItemModel) => value.name,
  },
  {
    field: "site",
    headerName: "Site",
    minWidth: 200,
    valueGetter: (value: ISiteModel) => value.name,
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 200,
  },
  {
    field: "rating",
    headerName: "Rating",
    minWidth: 200,
  },
  {
    field: "total_ratings",
    headerName: "Total Ratings",
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

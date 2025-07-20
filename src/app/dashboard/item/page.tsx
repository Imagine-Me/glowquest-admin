"use client";

import { Box, Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { FormModal } from "@/components/FormModal/FormModal";
import DeleteModal from "@/components/DeleteModal/DeleteModal";
import { pageProps } from "@/constants/page";
import { IItemDetailsRow } from "@/interfaces/item.interface";
import { SelectOption } from "@/interfaces/common.interface";
import { getProductOptions } from "@/api/product";
import { TableContainer } from "@/containers/item-details/TableContainer";

export default function ItemPage() {
  const props = pageProps.find(({ title }) => title.toLowerCase() === "item");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<null | number>(null);
  const [rows, setRows] = useState<IItemDetailsRow[]>([]);
  const [productOptions, setProductOptions] = useState<SelectOption[]>([]);
  const [filters, setFilters] = useState({
    name: "",
    product: "",
  });

  const selectedRow = useMemo(() => {
    return rows.find((row) => row.id === selectedRowId);
  }, [rows, selectedRowId]);

  useEffect(() => {
    getProductOptions("").then((options) => {
      setProductOptions(options);
    });
  }, []);

  useEffect(() => {
    setReload(true);
  }, [filters]);

  if (!props) {
    return "Not Available";
  }

  const onFormSubmit = async (body: string) => {
    let response: {
      data: unknown;
      status: number;
      ok: boolean;
    };
    if (selectedRowId) {
      // update
      response = await props.update(body);
    } else {
      // insert
      response = await props.save(body);
    }
    if (response.ok) {
      setReload(true);
    }
    return response;
  };

  const onRowDelete = async () => {
    setSelectedRowId(null);
    setShowDeleteModal(false);
    setReload(true);
  };

  const onChangeFilter = (
    name: keyof typeof filters,
    value: string | number,
  ) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box flex={1}>
          <h1>{props.title}</h1>
        </Box>
        <Box display="flex" justifyContent="end" mb={2}>
          <Button variant="contained" onClick={() => setShowModal(true)}>
            Create {props.title}
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField
            placeholder="Enter name"
            value={filters.name}
            onChange={(e) => onChangeFilter("name", e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid size={6}>
          <Select
            fullWidth
            value={filters.product}
            onChange={(e) => {
              onChangeFilter("product", e.target.value);
            }}
          >
            <MenuItem value={-1}>
              <em>All Products</em>
            </MenuItem>
            {productOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <TableContainer
        reload={reload}
        setReload={setReload}
        rows={rows}
        setRows={setRows}
        setSelectedRowId={setSelectedRowId}
        setShowModal={setShowModal}
        setShowDeleteModal={setShowDeleteModal}
        props={props}
        filters={filters}
      />
      {showModal && (
        <FormModal
          open={showModal}
          handleClose={() => {
            setSelectedRowId(null);
            setShowModal(false);
          }}
          form={props.form(selectedRow)}
          isUpdate={!!selectedRow}
          title={
            selectedRow ? `Update ${props.title}` : `Create ${props.title}`
          }
          onSubmit={onFormSubmit}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          onClose={onRowDelete}
          open={showDeleteModal}
          row={selectedRow}
          deleteItem={props.delete}
        />
      )}
    </div>
  );
}

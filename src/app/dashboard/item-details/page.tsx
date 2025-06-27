"use client";

import { Box, Button, TextField, Checkbox, FormControlLabel, Autocomplete, CircularProgress } from "@mui/material";
import { useMemo, useState } from "react";
import { SelectOption } from "@/interfaces/common.interface";
import { getSiteOptions } from "@/api/site";
import { Table } from "@/components/Table/Table";
import { FormModal } from "@/components/FormModal/FormModal";
import DeleteModal from "@/components/DeleteModal/DeleteModal";
import { pageProps } from "@/constants/page";
import { IResponseModel } from "@/interfaces/common.interface";
import { getUniqueItemOptions } from "@/api/item";

interface IItemDetailsRow {
  id: number;
  name: string;
  siteId?: number;
  price?: number | null;
}

export default function ItemDetailsPage() {
  const props = pageProps.find(({ title }) => title.toLowerCase() === "item-details");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<null | number>(null);
  const [rows, setRows] = useState<IItemDetailsRow[]>([]);
  const [filters, setFilters] = useState({
    itemName: '',
    siteId: undefined as number | undefined,
    priceNull: undefined as boolean | undefined,
  });
  const [itemOptions, setItemOptions] = useState<SelectOption[]>([]);
  const [siteOptions, setSiteOptions] = useState<SelectOption[]>([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const [loadingSites, setLoadingSites] = useState(false);

  const selectedRow = useMemo(() => {
    return rows.find((row) => row.id === selectedRowId);
  }, [rows, selectedRowId]);

  if (!props) {
    return "Not Available";
  }

  const handleItemSearch = async (searchText: string) => {
    setLoadingItems(true);
    try {
      const response = await getUniqueItemOptions(searchText);
      setItemOptions(response);
    } finally {
      setLoadingItems(false);
    }
  };

  const handleSiteSearch = async (searchText: string) => {
    setLoadingSites(true);
    try {
      const options = await getSiteOptions(searchText);
      setSiteOptions(options);
    } finally {
      setLoadingSites(false);
    }
  };

  const handleFilterChange = (name: string, value: string | number | boolean | null | undefined) => {
    setFilters(prev => ({
      ...prev,
      [name]: value === '' || value === null ? undefined : value
    }));
    setReload(true);
  };

  const onFormSubmit = async (body: string) => {
    let response: IResponseModel<IItemDetailsRow>;
    if (selectedRowId) {
      response = await props.update(body);
    } else {
      response = await props.save(body);
    }
    if (response.ok) {
      setReload(true);
    }
    return response;
  };

  return (
    <div>
      <Box display="flex" justifyContent="end" mb={2}>
        <Button variant="contained" onClick={() => setShowModal(true)}>
          Create {props.title}
        </Button>
      </Box>
      <Box display="flex" gap={2} mb={2}>
        <Autocomplete
          freeSolo
          options={itemOptions}
          loading={loadingItems}
          onInputChange={(_, value) => {
            handleItemSearch(value);
          }}
          onChange={(_, value) => {
            if (!value || typeof value === 'string') return
            handleFilterChange('itemName', value.value)
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Item Name"
              size="small"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loadingItems ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
          sx={{ minWidth: 200 }}
        />
        <Autocomplete
          options={siteOptions}
          loading={loadingSites}
          getOptionLabel={(option) => option.label}
          onChange={(_, value) => handleFilterChange('siteId', value?.value)}
          onInputChange={(_, value) => handleSiteSearch(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Site"
              size="small"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loadingSites ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
          sx={{ minWidth: 200 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="priceNull"
              checked={filters.priceNull || false}
              onChange={(e) => handleFilterChange('priceNull', e.target.checked)}
            />
          }
          label="Price is null"
        />
      </Box>
      <Table
        colDefs={props.colDefs(
          (id: number) => {
            setSelectedRowId(id);
            setShowModal(true);
          },
          (id: number) => {
            setSelectedRowId(id);
            setShowDeleteModal(true);
          }
        )}
        fetchApi={(pagination) => props.getData({ ...pagination, filters })}
        reload={reload}
        setReload={setReload}
        rows={rows}
        setRows={setRows}
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
          title={selectedRow ? `Update ${props.title}` : `Create ${props.title}`}
          onSubmit={onFormSubmit}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          onClose={() => {
            setSelectedRowId(null);
            setShowDeleteModal(false);
            setReload(true);
          }}
          open={showDeleteModal}
          row={selectedRow}
          deleteItem={props.delete}
        />
      )}
    </div>
  );
}

"use client";

import { Box, Button } from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import { SelectOption } from "@/interfaces/common.interface";
import { getSiteOptions } from "@/api/site";
import { FormModal } from "@/components/FormModal/FormModal";
import DeleteModal from "@/components/DeleteModal/DeleteModal";
import { pageProps } from "@/constants/page";
import { getUniqueItemOptions } from "@/api/item";
import { FiltersContainer } from "@/containers/item-details/FiltersContainer";
import { TableContainer } from "@/containers/item-details/TableContainer";

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
  const [allItemOptions, setAllItemOptions] = useState<SelectOption[]>([]);
  const [allSiteOptions, setAllSiteOptions] = useState<SelectOption[]>([]);
  const [itemOptions, setItemOptions] = useState<SelectOption[]>([]);
  const [siteOptions, setSiteOptions] = useState<SelectOption[]>([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const [loadingSites, setLoadingSites] = useState(false);

  useEffect(() => {
    // Load initial data
    const loadInitialData = async () => {
      setLoadingItems(true);
      setLoadingSites(true);
      try {
        const [items, sites] = await Promise.all([
          getUniqueItemOptions(''),
          getSiteOptions('')
        ]);
        setAllItemOptions(items);
        setItemOptions(items);
        setAllSiteOptions(sites);
        setSiteOptions(sites);
      } finally {
        setLoadingItems(false);
        setLoadingSites(false);
      }
    };
    loadInitialData();
  }, []);

  const selectedRow = useMemo(() => {
    return rows.find((row) => row.id === selectedRowId);
  }, [rows, selectedRowId]);

  if (!props) {
    return "Not Available";
  }

  const handleItemSearch = async (searchText: string) => {
    if (!searchText) {
      setItemOptions(allItemOptions);
      return;
    }
    const filtered = allItemOptions.filter(option => 
      option.label.toLowerCase().includes(searchText.toLowerCase())
    );
    setItemOptions(filtered);
  };

  const handleSiteSearch = async (searchText: string) => {
    if (!searchText) {
      setSiteOptions(allSiteOptions);
      return;
    }
    const filtered = allSiteOptions.filter(option => 
      option.label.toLowerCase().includes(searchText.toLowerCase())
    );
    setSiteOptions(filtered);
  };

  const handleFilterChange = (name: string, value: string | number | boolean | null | undefined) => {
    setFilters(prev => ({
      ...prev,
      [name]: value === '' || value === null ? undefined : value
    }));
    setReload(true);
  };
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

  return (
    <div>
      <Box display="flex" justifyContent="end" mb={2}>
        <Button variant="contained" onClick={() => setShowModal(true)}>
          Create {props.title}
        </Button>
      </Box>
      <FiltersContainer
        itemOptions={itemOptions}
        siteOptions={siteOptions}
        loadingItems={loadingItems}
        loadingSites={loadingSites}
        filters={filters}
        onItemSearch={handleItemSearch}
        onSiteSearch={handleSiteSearch}
        onFilterChange={handleFilterChange}
      />
      <TableContainer
        reload={reload}
        setReload={setReload}
        rows={rows}
        setRows={setRows}
        filters={filters}
        setSelectedRowId={setSelectedRowId}
        setShowModal={setShowModal}
        setShowDeleteModal={setShowDeleteModal}
        props={props}
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
          onClose={onRowDelete}
          open={showDeleteModal}
          row={selectedRow}
          deleteItem={props.delete}
        />
      )}
    </div>
  );
}

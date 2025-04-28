"use client";
import { getBrands, saveBrand, updateBrand } from "@/api/brand";
import DeleteModal from "@/components/DeleteModal/DeleteModal";
import { FormModal } from "@/components/FormModal/FormModal";
import { Table } from "@/components/Table/Table";
import { brandColDefs } from "@/constants/columnDefs";
import { brandForm } from "@/constants/forms";
import { IBrandModel } from "@/interfaces/brand.interface";
import { Box, Button } from "@mui/material";
import { useMemo, useState } from "react";

export default function Brand() {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<null | number>(null);
  const [rows, setRows] = useState<IBrandModel[]>([]);

  const selectedRow = useMemo(() => {
    return rows.find((row) => row.id === selectedRowId);
  }, [rows, selectedRowId]);

  const onFormSubmit = async (body: string) => {
    console.log(JSON.parse(body));
    let response: {
      data: any;
      status: number;
      ok: boolean;
    };
    if (selectedRowId) {
      // update
      response = await updateBrand(body);
    } else {
      // insert
      response = await saveBrand(body);
    }
    setReload(true);
    return response;
  };
  const onEdit = async (id: number) => {
    setSelectedRowId(id);
    setShowModal(true);
  };

  const onDelete = (id: number) => {
    setSelectedRowId(id);
    setShowDeleteModal(true);
  };

  const onRowDelete = async () => {
    setSelectedRowId(null);
    setShowDeleteModal(false);
    setReload(true);
  };

  const onCloseModal = () => {
    setSelectedRowId(null);
    setShowModal(false);
  };

  return (
    <div>
      <Box display="flex" justifyContent="end">
        <Button variant="contained" onClick={() => setShowModal(true)}>
          Create Brand
        </Button>
      </Box>
      <Table
        colDefs={brandColDefs(onEdit, onDelete)}
        fetchApi={getBrands}
        reload={reload}
        setReload={setReload}
        rows={rows}
        setRows={setRows}
      />
      {showModal && <FormModal
        open={showModal}
        handleClose={onCloseModal}
        form={brandForm(selectedRow)}
        title={selectedRow ? "Update Brand" : "Create Brand"}
        onSubmit={onFormSubmit}
      />}
      {showDeleteModal && <DeleteModal onClose={onRowDelete} open={showDeleteModal} row={selectedRow} />}
    </div>
  );
}

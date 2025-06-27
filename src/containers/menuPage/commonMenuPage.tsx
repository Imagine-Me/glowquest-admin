"use client";

import DeleteModal from "@/components/DeleteModal/DeleteModal";
import { FormModal } from "@/components/FormModal/FormModal";
import { Table } from "@/components/Table/Table";
import { pageProps } from "@/constants/page";
import { Box, Button } from "@mui/material";
import { useMemo, useState } from "react";

interface Props {
  page: string;
}

export default function CommonMenuPage({ page }: Props) {
  const props = pageProps.find(({ title }) => title.toLowerCase() === page);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<null | number>(null);
  const [rows, setRows] = useState<unknown[]>([]);

  const selectedRow = useMemo(() => {
    return rows.find((row: unknown) => (row as { id: number }).id === selectedRowId);
  }, [rows, selectedRowId]);

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
          Create {props.title}
        </Button>
      </Box>
      <Table
        colDefs={props.colDefs(onEdit, onDelete)}
        fetchApi={props.getData}
        reload={reload}
        setReload={setReload}
        rows={rows}
        setRows={setRows}
      />
      {showModal && (
        <FormModal
          open={showModal}
          handleClose={onCloseModal}
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

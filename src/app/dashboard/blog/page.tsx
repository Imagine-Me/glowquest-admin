'use client'

import DeleteModal from "@/components/DeleteModal/DeleteModal";
import { FormModal } from "@/components/FormModal/FormModal";
import { Table } from "@/components/Table/Table";
import { blogColDefs } from "@/constants/columnDefs";
import { pageProps } from "@/constants/page";
import { IBlog } from "@/interfaces/blog.interface";
import { Box, Button } from "@mui/material"
import { useState } from "react";

export default function BlogPage() {
    const props = pageProps.find(({ title }) => title.toLowerCase() === "blog");
    const [open, setOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [selectedRow, setSelectedRow] = useState<IBlog | null>(null)
    const [reload, setReload] = useState(false)
    const [rows, setRows] = useState<unknown[]>([]);

    const handleClose = () => {
        setOpen(false)
        setSelectedRow(null)
    }
    const handleEdit = (id: number) => {

    }
    const handleDelete = () => {
        setDeleteOpen(true)
    }


    if (!props) {
        return "Not Available";
    }
    return <>
        <Box display="flex" justifyContent="end" mb={2}>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Create Blog
            </Button>
        </Box>

        <Table
            colDefs={blogColDefs(
                handleEdit,
                handleDelete,
            )}
            fetchApi={props.getData}
            reload={reload}
            setReload={setReload}
            rows={rows}
            setRows={setRows}
        />
        <FormModal
            open={open}
            handleClose={handleClose}
            form={props.form(selectedRow)}
            onSubmit={selectedRow ? props.update : props.save}
            isUpdate={!!selectedRow}
            title={selectedRow ? `Update ${props.title}` : `Create ${props.title}`}
        />

        <DeleteModal
            open={deleteOpen}
            onClose={() => setDeleteOpen(false)}
            deleteItem={props.delete}
            row={selectedRow!}
        />
    </>
}
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
        const selectedRow = rows.find((val) => (val as IBlog).id == id)
        setSelectedRow(selectedRow as IBlog)
        setOpen(true)
    }
    const handleDelete = (id: number) => {
        const selectedRow = rows.find((val) => (val as IBlog).id == id)
        setSelectedRow(selectedRow as IBlog)
        setDeleteOpen(true)
    }

    const onDelete = async (id:number) => {
        const response = await props!.delete(id)
        setReload(true)
        return response
    }

    const onFormSubmit = async (body:string) => {
        const response: {
            data: unknown;
            status: number;
            ok: boolean;
        } = {
            data: null,
            status: 200,
            ok: true
        }
        if (selectedRow) {
            response.data = await props!.update(body)
        } else {
            response.data = await props!.save(body)
        }
        setReload(true)
        handleClose()
        return response
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
            onSubmit={onFormSubmit}
            isUpdate={!!selectedRow}
            title={selectedRow ? `Update ${props.title}` : `Create ${props.title}`}
        />

        <DeleteModal
            open={deleteOpen}
            onClose={() => setDeleteOpen(false)}
            deleteItem={onDelete}
            row={selectedRow!}
        />
    </>
}
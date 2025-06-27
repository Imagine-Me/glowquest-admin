"use client";
import {
  IPaginatedGenericModel,
} from "@/interfaces/common.interface";
import { debounce, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

interface ITableProps<T> {
  colDefs: GridColDef[];
  fetchApi: (pagination: {
    page: number;
    pageSize: number;
  }) => Promise<{ data: unknown; status: number; ok: boolean }>;
  reload: boolean;
  setReload: (value: boolean) => void;
  rows: T[];
  setRows: (rows: T[]) => void;
}

export const Table = <T,>({
  colDefs,
  fetchApi,
  reload,
  setReload,
  rows,
  setRows,
}: ITableProps<T>) => {
  const [pagination, setPagination] = useState({ page: 0, pageSize: 20 });
  const [total, setTotal] = useState(0);
  const fetchData = debounce(() => {
    fetchApi(pagination).then(
      ({ data }) => {
        setRows((data as IPaginatedGenericModel<T>).items);
        setTotal((data as IPaginatedGenericModel<T>).total);
      }
    );
  }, 200);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  useEffect(() => {
    if (reload) {
      fetchData();
      setReload(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);
  return (
    <Paper sx={{ width: "100%", my: 2 }}>
      <DataGrid
        rows={rows}
        columns={colDefs}
        paginationModel={pagination}
        paginationMode="server"
        rowCount={total}
        pageSizeOptions={[10, 20, 30, 40, 50]}
        sx={{ border: 0 }}
        onPaginationModelChange={(value) => setPagination(value)}
      />
    </Paper>
  );
};

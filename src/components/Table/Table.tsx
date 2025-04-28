"use client";

import {
  IBrandModel,
  IPaginatedBrandModel,
} from "@/interfaces/brand.interface";
import { IResponseModel } from "@/interfaces/common.interface";
import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

interface ITableProps {
  colDefs: GridColDef[];
  fetchApi: (pagination: {
    page: number;
    pageSize: number;
  }) => Promise<{ data: any; status: number; ok: boolean }>;
  reload: boolean;
  setReload: (value: boolean) => void;
  rows: IBrandModel[];
  setRows: (rows: IBrandModel[]) => void;
}

export const Table: React.FC<ITableProps> = ({
  colDefs,
  fetchApi,
  reload,
  setReload,
  rows,
  setRows,
}) => {
  const [pagination, setPagination] = useState({ page: 0, pageSize: 20 });
  const [total, setTotal] = useState(0);
  const fetchData = () => {
    fetchApi(pagination).then(
      ({ data }: IResponseModel<IPaginatedBrandModel>) => {
        setRows(data.items);
        setTotal(data.total);
      }
    );
  };
  useEffect(() => {
    fetchData();
  }, [pagination]);

  useEffect(() => {
    if (reload) {
      fetchData();
      setReload(false);
    }
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

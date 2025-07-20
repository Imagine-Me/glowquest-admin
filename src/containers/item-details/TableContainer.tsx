"use client";

import { Table } from "@/components/Table/Table";
import { pageProps } from "@/constants/page";
import { IItemDetailsRow } from "@/interfaces/item.interface";

interface TableContainerProps {
  reload: boolean;
  setReload: (reload: boolean) => void;
  rows: IItemDetailsRow[];
  setRows: (rows: IItemDetailsRow[]) => void;
  filters: {
    itemId?: string;
    siteId?: number;
    priceNull?: boolean;
    name?:string;
    product?: string;
  };
  setSelectedRowId: (id: number | null) => void;
  setShowModal: (show: boolean) => void;
  setShowDeleteModal: (show: boolean) => void;
  props: typeof pageProps[0];
}

export function TableContainer({
  reload,
  setReload,
  rows,
  setRows,
  filters,
  setSelectedRowId,
  setShowModal,
  setShowDeleteModal,
  props
}: TableContainerProps) {
  return (
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
  );
}

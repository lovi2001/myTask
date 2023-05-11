import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import "../style/table.css";
import Checkbox from "./Checkbox";

const TableData = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, allColumns, getToggleHideAllColumnsProps } =
    tableInstance;
  return (
    <>
      <div>
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
        </div>
        {
          allColumns.map(column=>(
            <div key={column.id}>
              <label>
                <input type="checkbox" {...column.getToggleHiddenProps()} />
                {column.Header}
              </label>
            </div>
          ))
        }
      </div>
      <div className="tbl-container">
        <div className="tbl-sticky">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => {
                return (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => {
                      return (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableData;

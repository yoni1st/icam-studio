import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   { field: "id", headerName: "ID" },
//   { field: "city", headerName: "City", width: 300 },
//   { field: "district", headerName: "District", width: 600 },
//   { field: "branch", headerName: "branch", width: 600 },
//   { field: "atm-name", headerName: "Atm name", width: 600 },
//   { field: "atm-ip", headerName: "Atm IP", width: 600 },
// ];
const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 600 },
];

const UserTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  return (
    <div className="absolute md:h-4/5 md:w-9/12">
      <DataGrid rows={tableData} columns={columns} pageSize={12} />
    </div>
  );
};
export default UserTable;

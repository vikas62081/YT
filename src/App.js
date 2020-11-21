import React, { useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import  RowGroupingModule  from 'ag-grid-community';
function App() {
  const [gridApi,setGridApi]=useState()
  const columnDefs = [
    { headerName: "ID", field: "id",checkboxSelection:true,headerCheckboxSelection:true,},
    { headerName: "Name", field: "name",},
    { headerName: "Email", field: "email", },
    { headerName: "Body", field: "body" },
    
  ]  

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1, filter: true,
    floatingFilter: true, 
  }

  const onGridReady = (params) => {
    setGridApi(params)
    fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json())
      .then(resp => {
        params.api.applyTransaction({ add: resp }) //adding API data to grid
        params.api.paginationGoToPage(10)
      })
     
  }
 const onPaginationChange=(pageSize)=>{
   gridApi.api.paginationSetPageSize(Number(pageSize))
 }
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h3>Student Details</h3>
      <select onChange={(e)=>onPaginationChange(e.target.value)}>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
      <div className="ag-theme-alpine" style={{ height: '400px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={10}
          // paginationAutoPageSize={true}
          >
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
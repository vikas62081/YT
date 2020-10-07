import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import  RowGroupingModule  from 'ag-grid-community';
function App() {
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
    fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json())
      .then(resp => {
        params.api.applyTransaction({ add: resp }) //adding API data to grid
        params.api.paginationGoToPage(4)
      })
     
  }
 
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h3>Student Details</h3>
      <div className="ag-theme-alpine" style={{ height: '400px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          // paginationAutoPageSize={true}
          // suppressPaginationPanel
          paginationPageSize={5}
          >
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
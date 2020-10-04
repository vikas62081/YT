import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  const columnDefs = [
    { headerName: "ID", field: "id",checkboxSelection:true,headerCheckboxSelection:true },
    { headerName: "Name", field: "name", },
    { headerName: "Email", field: "email", },
    { headerName: "Body", field: "body" },
  ]

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1, filter: true,
    floatingFilter: true
  }

  const onGridReady = (params) => {
    console.log("grid is ready")
    fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        params.api.applyTransaction({ add: resp }) //adding API data to grid
      })
  }
  //define selection type single or multiple
  const rowSelectionType='multiple'

  //function will trigger once selection changed
  const onSelectionChanged=(event)=>{
    console.log(event.api.getSelectedRows())
  }

  //function to allow selection to row
  const isRowSelectable=(node)=>{
    return node.data?(node.data.id%2===0|| node.data.email.includes('.org')):false 
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
          rowSelection={rowSelectionType}
          onSelectionChanged={onSelectionChanged}
          rowMultiSelectWithClick={true}
          isRowSelectable={isRowSelectable}
          >
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
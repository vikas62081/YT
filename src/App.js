import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function App() {
  const columnDefs= [
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age",tooltipField: 'name',}, 
    {headerName: "Birth Year",field: "birthYear", tooltipField: 'name',},
    { headerName: "Phone Number", field: "phoneNumber" },
   
    ]
  const rowData= [
    { name: "Rahul", age: 19, phoneNumber: 9876543210, birthYear:2001}, 
    { name: "David", age: 17, phoneNumber: 9827654310,birthYear:2003}, 
    { name: "Dan", age: 25, phoneNumber: 9765438210,birthYear:1995 }]

const defaultColDef={
  sortable:true,
  editable:true,
  flex:1,filter:true,
  floatingFilter:true
}

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h3>Student Details</h3>
      <div className="ag-theme-alpine" style={ {height: '400px'} }>
        <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            enableBrowserTooltips={true} 
             tooltipShowDelay={{tooltipShowDelay:0}}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
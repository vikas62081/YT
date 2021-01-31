import React,{useState} from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


function App() {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [hideColumn,setHideColumn]=useState(false)
  const [rowData, setRowData] = useState([
      { id: 1,name:"Neeraj",email:"neeraj2020@gmail.com",dob:"23/01/1996"},
      { id: 2,name:"Raj",email:"raj@gmail.com",dob:"08/07/1996"},
      { id: 3,name:"Mayank",email:"mayank@gmail.com",dob:"09/09/1964"},
      { id: 4,name:"Vishal",email:"vk462@gmail.com",dob:"15/01/2020"},
  ]);
  const columnDefs=[
    {field:"id",headerName:"ID"},
    {field:"name",headerName:"Name"},
    {field:"email",headerName:"Email"},   
    {field:"dob",headerName:"Date of Birth"}

  ]

  function onGridReady(params) {
      setGridApi(params.api);
      setGridColumnApi(params.columnApi);
  }  
 const showColumn=()=>{
   // for single column
  // gridColumnApi.setColumnVisible('dob',hideColumn) 
  
  // for multiple columns
gridColumnApi.setColumnsVisible(['dob','email'],hideColumn)
  setHideColumn(!hideColumn)
  // to fit the size of column
  gridApi.sizeColumnsToFit()
 }
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Hide and Show column in Ag Grid</h4>
      <button onClick={showColumn}>Show DOB</button>
        <div className="ag-theme-alpine" style={{ height: 300}}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={{flex:1}}
               />
        </div>
  
};
    </div>
  );
}

export default App;

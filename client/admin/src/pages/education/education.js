import React,{useEffect,useState} from 'react';

//import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';
import DataGrid, {
    Column,
    Button,
    Pager,
    Paging,
    FilterRow,
    Lookup,
    Editing
  } from 'devextreme-react/data-grid';
// import 'whatwg-fetch';




export default function Education() {
  
  return (
    <DataGrid
      id="gridContainer"
      dataSource=""
      showBorders={true}
      remoteOperations={true}
      repaintChangesOnly={true}
      onSaving="">
      <Editing
        mode="batch"
        allowAdding={true}
        allowDeleting={true}
        allowUpdating={true}
        editRowKey=""
      />
      <Column dataField="id" value="" width={90} allowEditing={false}></Column>
      
    </DataGrid>
  );
}

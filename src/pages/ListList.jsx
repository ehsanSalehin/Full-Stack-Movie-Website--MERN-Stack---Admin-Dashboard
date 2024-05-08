import "./listList.css"
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import {useContext } from "react";
import  {ListContext}  from "../pages/ListContext";
import { useEffect } from "react";
import {deleteList, getLists} from "../pages/apiCallsL";

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };
    const columns: GridColDef[] = [
        {field: "_id", headerName: 'Id', width:250},
        { field: 'genre', headerName: 'Genre', width: 250 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
        {
            field: 'action',
            headderName:'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link 
                      to={{ pathname: "/list/" + params.row._id, list: params.row }}                    >
                    {/*<button className="productlistedit">Edit</button>*/}
                    </Link>
                    <DeleteOutlineIcon className="productlisteditdelete" onClick={()=>handleDelete(params.row._id)}/>
                    </>
                )
            }
        }
      ];


  return (
    <div className="productList">

        <DataGrid
        rows={lists}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={r=>r._id}
      />
    </div>
  );
}
import "./userlist.css"
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {useContext } from "react";
import {getUsers} from "../pages/apiCallsU";
import { UserContext } from "../pages/UserContext";

export default function Userlist() {
  const {users, dispatch} = useContext(UserContext);

  useEffect (()=>{
    getUsers(dispatch);
  },[dispatch]);

    const columns: GridColDef[] = [
        { field: 'username', headerName: 'User name', width: 200, renderCell:(params)=>{
            return(
                <div className="userlistuser">
                    <img className="avatar" src={params.row.profilePicuser ||"https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"} alt="no pics"/>
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 120 },
        {/*{
            field: 'action',
            headderName:'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={{pathname:"/users/"+params.row.id, user: params.row}}>
                    <button className="userlistedit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon className="userlisteditdelete" />
                    </>
                )
            }
        }*/}
      ];
      

  return (
    <div className="productList">

      {users && (
        <DataGrid
          rows={users}
          disableRowSelectionOnClick
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowId={r => r._id}
        />
      )}
    </div>
  );
}

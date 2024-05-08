import "./product.css"
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import {useContext } from "react";
import  {MovieContext}  from "../pages/MovieContext";
import { useEffect } from "react";
import {deleteMovie, getMovies} from "../pages/apiCallsM";

export default function Product() {
    const {movies, dispatch} = useContext(MovieContext)
    useEffect (()=>{
      getMovies(dispatch);
    },[dispatch]);
    const handleDelete =(id)=>{
      deleteMovie(id, dispatch);
    };
    const columns: GridColDef[] = [
        {field: "_id", headerName: 'Id', width:90},
        { field: 'movie', headerName: 'Movie', width: 200, renderCell:(params)=>{
            return(
                <div className="productrlistuser">
                    <img className="img" src={params.row.img} alt="no pics"/>
                    {params.row.title}
                </div>
            )
        }},
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'Year', width: 120 },
        { field: 'limit', headerName: 'Limit', width: 120 },
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
        {
            field: 'action',
            headderName:'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link 
                    to={{ pathname: "/products/" + params.row._id, movie: params.row }}
                    >
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
        rows={movies}
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
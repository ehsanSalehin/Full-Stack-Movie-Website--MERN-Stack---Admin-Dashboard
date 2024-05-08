import { useEffect, useState } from "react"
import "./widgetsmall.css"
import axios from "axios"

export default function Widgetsmall() {
    const [newUsers,setNewUsers]=useState([])

    useEffect(()=>{
        const getNewUsers = async()=>{
            try{
         const res = await axios.get("/users?new=true",{
            headers: {
                token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDZkNDI5NjgzNzg2Y2Y0OTRhMmZiZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMTcyMzk4NywiZXhwIjoxNzE0MzE1OTg3fQ.R-neRtemAgYMXws2ZGfvMJAzxVmN5sZJA5Ak8uhj6Nw",
              },
         });
         setNewUsers(res.data)
        }catch(err){
            console.log(err);
        } 
        };
        getNewUsers()
    }, []);

  return (
    <div className="widgetsm">
        <span className="widgetsmalltitle">New Joined Members</span>
        <ul className="widgetsmlist">
            {newUsers.map(user=>(
            <li className="itemsm">
                <img src={user.profilePic ||"https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png" } alt="no pic" className="widgetsmallimg" />
                <div className="widgetsmuser">
                    <span className="usernamesm">{user.username}</span>
                </div>
            </li>
           ))} 
        </ul>
    </div>
  )
}

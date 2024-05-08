import { LocationSearching, MailOutline, PhoneAndroid } from "@mui/icons-material";
import "./edit.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";


export default function Edit() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="usertitle">Edit User</h1>
        <Link to="/newUser"><button className="userAddButton">Create</button></Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="" alt="no pic" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowName">John</span>
                    <span className="userShowTitle">software engineer</span>
                </div>
            </div>
            <div className="userShowBottom"></div>
                <span className="userShowTitle">Account Details</span>

                <div className="userShowInfo">
                <PermIdentityIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">here's johnny</span>
                </div>

                <div className="userShowInfo">
                <CalendarTodayIcon className="userShowIcon"/>
                <span className="userShowInfoTitle">1998.16.11</span>
                </div>

                <span className="userShowTitle">Contact Details</span>


                <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon"/>
                <span className="userShowInfoTitle">7097097788</span>
                </div>

                <div className="userShowInfo">
                <MailOutline className="userShowIcon"/>
                <span className="userShowInfoTitle">jognny@gmail.com</span>
                </div>

                <div className="userShowInfo">
                <LocationSearching className="userShowIcon"/>
                <span className="userShowInfoTitle">st.john's | canada </span>
                </div>

        </div>
        <div className="userUpdate">
        <span className="userUpdateTitle"></span>
        <form action="" className="userUpdateFORM">
          <div className="USERuPDATElEFT">
            <div className="userUpdateItem">
              <label htmlFor="" className="Username">Username</label>
              <input type="text" placeholder="here's johnny" className="userUpdateInput"/>
            </div>

            <div className="userUpdateItem">
              <label htmlFor="" className="Username">Full Name</label>
              <input type="text" placeholder="John" className="userUpdateInput"/>
            </div>

            <div className="userUpdateItem">
              <label htmlFor="" className="Username">Email</label>
              <input type="text" placeholder="jognny@gmail.com" className="userUpdateInput"/>
            </div>

            <div className="userUpdateItem">
              <label htmlFor="" className="Username">Phone</label>
              <input type="text" placeholder="7097097788" className="userUpdateInput"/>
            </div>

            <div className="userUpdateItem">
              <label htmlFor="" className="Username">Address</label>
              <input type="text" placeholder="st.john's | canada" className="userUpdateInput"/>
            </div>

          </div>
          <div className="USERuPDATERIGHT">
            <div className="userUpdateUpload">
              <img src="" alt="no pics" className="userUpdateImage"/>
              <label htmlFor="file"><PublishIcon className="userUpdatebu"/>
              <input type="file" id="file" style={{display:"none"}} /></label>
            </div>
            <button className="userUpdtee">Update</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

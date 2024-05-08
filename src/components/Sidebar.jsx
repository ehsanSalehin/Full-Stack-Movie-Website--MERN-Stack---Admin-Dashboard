import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp} from '@mui/icons-material';
import { Link } from "react-router-dom";
import MovieIcon from '@mui/icons-material/Movie';
import ListIcon from '@mui/icons-material/List';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarwrapper">
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Dashboard</h3>
                <ul className="sidebarlist">
                    <Link to="/" className="link">
                    <li className="sidebarlistitem">
                        <LineStyle classNmae="icons"/> Home
                    </li></Link>
                    
                    <Link to="/Newproduct" className="link">
                    <li className="sidebarlistitem">
                        <AddBoxIcon classNmae="icons"/> Create Movie
                    </li></Link>

                    <Link to="/Newlist" className="link">
                    <li className="sidebarlistitem">
                        <PlaylistAddIcon classNmae="icons"/> Create List
                    </li></Link>
 
                </ul>
            </div>

            <div className="sidebarmenu">
                <h3 className="sidebartitle">Quick Menu</h3>
                <ul className="sidebarlist">

                    <Link to="/users" className="link">
                    <li className="sidebarlistitem">
                        <PeopleAltIcon classNmae="icons"/> Users
                    </li></Link>

                    <Link to="/movies"className="link">
                    <li className="sidebarlistitem">
                        <MovieIcon classNmae="icons"/> Movies
                    </li></Link>

                    <Link to="/lists"className="link">
                    <li className="sidebarlistitem">
                        <ListIcon classNmae="icons"/> Lists
                    </li></Link>

                </ul>
            </div>

        </div>
    </div>
  )
}

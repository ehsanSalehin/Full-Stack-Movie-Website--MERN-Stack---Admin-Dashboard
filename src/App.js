import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar"
import "./app.css"
import Home from "./pages/Home";
import ListList from "./pages/ListList"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Userlist from "./pages/Userlist";
import Edit from "./pages/Edit";
import Newuser from "./pages/Newuser";
import Product from "./pages/Product";
import Productedit from "./pages/Productedit";
import Newproduct from "./pages/Newproduct";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./pages/AuthContext";
import List from "./pages/List";
import Newlist from "./pages/Newlist";


function App() {
const {user} = useContext(AuthContext);
  return (
    <Router>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route exact path="/login" element={user ? <Home/>:<Login/> }/>
        {user && (
          <>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Userlist/>}/>
        <Route path="/users/:usersId" element={<Edit/>}/>
        <Route path="/newuser" elem ent={<Newuser/>}/>
        <Route path="/movies" element={<Product/>}/>
        <Route path="/products/:productsId" element={<Productedit/>}/>
        <Route path="/newproduct" element={<Newproduct/>}/>
        <Route path="/lists" element={<ListList/>}/>
       <Route path="/list/:listId" element={<List/>}/>
       <Route path="/newlist" element={<Newlist/>}/>
        </>
        )}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
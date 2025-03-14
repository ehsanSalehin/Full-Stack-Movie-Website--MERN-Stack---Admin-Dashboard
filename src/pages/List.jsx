import "./list.css"
import { Link, useLocation } from "react-router-dom"

export default function List() {
    
  const location = useLocation();
  const list = location.list;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list && list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list && list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list && list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list && list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list && list.title} />
            <label>Type</label>
            <input type="text" placeholder={list && list.type} />
            <label>Genre</label>
            <input type="text" placeholder={list && list.genre} />
          </div>
          <div className="productFormRight">
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
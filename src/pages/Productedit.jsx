import "./productedit.css"
import { Link, useLocation } from "react-router-dom"
import { Publish } from "@mui/icons-material"

export default function Productedit() {
    
    const location = useLocation();
    const movie = location.movie;
    return (
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Movie</h1>
          <Link to="/newproduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              {movie && <img src={movie.img} alt="" className="productInfoImg" />}
              <span className="productName">{movie && movie.title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{movie && movie._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">genre:</span>
                <span className="productInfoValue">{movie && movie.genre}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">year:</span>
                <span className="productInfoValue">{movie && movie.year}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">limit:</span>
                <span className="productInfoValue">{movie && movie.limit}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Movie Title</label>
              <input type="text" placeholder={movie && movie.title} />
              <label>Year</label>
              <input type="text" placeholder={movie && movie.year} />
              <label>Genre</label>
              <input type="text" placeholder={movie && movie.genre} />
              <label>Limit</label>
              <input type="text" placeholder={movie && movie.limit} />
              <label>Trailer</label>
              <input type="file" placeholder={movie && movie.trailer} />
              <label>Video</label>
              <input type="file" placeholder={movie && movie.video} />
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img
                  src={movie && movie.img}
                  alt=""
                  className="productUploadImg"
                />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
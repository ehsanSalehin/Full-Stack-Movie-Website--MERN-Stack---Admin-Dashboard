import "./featuredinfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Featuredinfo() {
  return (
    <div className="featured">
        <div className="items">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className="feicon negative"/></span>
        </div>    
            <span className="featuredSub">Compare to last month</span>  
    </div>


        <div className="items">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className="feicon negative"/></span>
        </div>    
            <span className="featuredSub">Compare to last month</span>  
    </div>

        <div className="items">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2</span>
            <span className="featuredMoneyRate">+11.4 <ArrowUpwardIcon className="feicon"/></span>
        </div>    
            <span className="featuredSub">Compare to last month</span>  
    </div>

</div>
  )
}

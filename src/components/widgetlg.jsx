import "./widgetlg.css"

export default function Widgetlg() {
    const Button =({type})=>{
        return <button className={"widgetlgbutton " +type}>{type}</button>
    }
  return (
    <div className="widgetlg">
        <h3 className="widgetlgtitle">Latest Transaction</h3>
        <table className="widgetlgtable">
            <tbody>
            <tr className="widgettr">
                <th className="widgetth">Customer</th>
                <th className="widgetth">Date</th>
                <th className="widgetth">Amount</th>
                <th className="widgetth">Status</th>
            </tr>
            <tr className="widgettr">
                <td className="widgetlguser">
                    <img src="" alt="no pics" className="widgetlgimg" />
                    <span className="widgetlgname">Susan</span>
                </td>
                <td className="widgetld">2 june 2021</td>
                <td className="widgetamount">$222</td>
                <td className="widgetstatus"><Button type="Approved"/></td>
            </tr>
            <tr className="widgettr">
                <td className="widgetlguser">
                    <img src="" alt="no pics" className="widgetlgimg" />
                    <span className="widgetlgname">Susan</span>
                </td>
                <td className="widgetld">2 june 2021</td>
                <td className="widgetamount">$222</td>
                <td className="widgetstatus"><Button type="Declined"/></td>
            </tr>
            <tr className="widgettr">
                <td className="widgetlguser">
                    <img src="" alt="no pics" className="widgetlgimg" />
                    <span className="widgetlgname">Susan</span>
                </td>
                <td className="widgetld">2 june 2021</td>
                <td className="widgetamount">$222</td>
                <td className="widgetstatus"><Button type="Pending"/></td>
            </tr>

            <tr className="widgettr">
                <td className="widgetlguser">
                    <img src="" alt="no pics" className="widgetlgimg" />
                    <span className="widgetlgname">Susan</span>
                </td>
                <td className="widgetld">2 june 2021</td>
                <td className="widgetamount">$222</td>
                <td className="widgetstatus"><Button type="Approved"/></td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}
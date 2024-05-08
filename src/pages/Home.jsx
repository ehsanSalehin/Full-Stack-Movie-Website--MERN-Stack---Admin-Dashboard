import Charts from "../components/Charts";
import "./home.css";
import Widgetsmall from "../components/Widgetsmall";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDZkNDI5NjgzNzg2Y2Y0OTRhMmZiZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMTcyMzk4NywiZXhwIjoxNzE0MzE1OTg3fQ.R-neRtemAgYMXws2ZGfvMJAzxVmN5sZJA5Ak8uhj6Nw",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
      <Charts data = {userStats} title="User Analytics" grid datakey="New User"/>
      <div className="homedigits">
        <Widgetsmall/>
      </div>

    </div>
  )
} 

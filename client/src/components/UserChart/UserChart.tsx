import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart } from "@mui/x-charts";

interface User {
  name: string;
  value: number;
}

const UserChart = () => {
  const [chartData, setChartData] = useState<User[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/calorie/");
      if (res.data) {
        const userData = res.data;

        const chartData2 = userData.map((user: any) => {
          return {
            name: user.username,
            value: user.calories,
          };
        });

        setChartData(chartData2); // Update chartData state with fetched data
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App" >
      <h4> Calorie per user</h4>
      <div style={{ justifyContent: "center", display: "flex",marginLeft:100 }}>
        <PieChart
          series={[{ data: chartData }]}
          colors={["#00B7CD", "#C100FF", "#003BCD"]}
          width={400}
          height={200}
        />
      </div>
      <hr />
    </div>
  );
};

export default UserChart;

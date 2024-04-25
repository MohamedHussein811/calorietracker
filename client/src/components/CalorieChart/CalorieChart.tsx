import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart } from "@mui/x-charts";

const CalorieChart = () => {
  const [chartData, setChartData] = useState<{ labels: string[], datasets: { label: string, data: number[], backgroundColor: string[] }[] }>({ labels: [], datasets: [] });

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:5000/calorie/");
        const foodCal: string[] = [];
        const caloriesCal: number[] = [];
        for (let dataObj of res.data) {
          foodCal.push(dataObj.description);
          caloriesCal.push(parseInt(dataObj.calories));
        }
        setChartData({
          labels: foodCal,
          datasets: [
            {
              label: "Cal",
              data: caloriesCal,
              backgroundColor: [
                "#f42f42",
                "#5ab950",
                "#fe812a",
                "#ffc748",
                "#6b71c7",
                "#8661d1",
                "#8a2cba",
              ],
            },
          ],
        });

      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div className="App">
      <h4>Food</h4>
      <h5 style={{ fontSize: "20px", textAlign: "center", marginBottom: "1em" }}>Calorie Intake per each Food</h5>
      <div style={{justifyContent:"center", display:"flex"}}>
        <BarChart
          xAxis={[{ scaleType: "band", data: chartData.labels }]}
          series={chartData.datasets.map((dataset) => ({ data: dataset.data }))}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default CalorieChart;

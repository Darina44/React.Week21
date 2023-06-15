import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Frontend", 4],
  ["English", 1],
  ["Chores", 2],
  ["Lovely fucking Children", 10],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;

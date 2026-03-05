import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts"

const data = [
  { day: "Mon", fraud: 3 },
  { day: "Tue", fraud: 6 },
  { day: "Wed", fraud: 4 },
  { day: "Thu", fraud: 7 },
  { day: "Fri", fraud: 5 }
]

function FraudChart() {

  return (

    <div className="bg-white shadow rounded p-5">

      <h2 className="text-lg font-bold mb-4">
        Weekly Fraud Detection
      </h2>

      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="fraud" stroke="#ef4444" />
      </LineChart>

    </div>

  )
}

export default FraudChart
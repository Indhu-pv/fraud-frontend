import StatCard from "../components/StatCard"
import FraudChart from "../components/FraudChart"

function Dashboard() {

  return (

    <div>

      <h2 className="text-2xl font-bold mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-3 gap-6 mb-6">

        <StatCard title="Total Transactions" value="12,450" />
        <StatCard title="Fraud Detected" value="245" />
        <StatCard title="Safe Transactions" value="12,205" />

      </div>

      <FraudChart />

    </div>

  )
}

export default Dashboard
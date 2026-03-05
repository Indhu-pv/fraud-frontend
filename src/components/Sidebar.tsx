import { Link } from "react-router-dom"

function Sidebar() {

  return (

    <div className="w-64 bg-gray-900 text-white p-5">

      <h2 className="text-xl font-bold mb-6">Fraud System</h2>

      <ul className="space-y-4">

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/transactions">Transactions</Link>
        </li>

        <li>
          <Link to="/fraud-alerts">Fraud Alerts</Link>
        </li>

      </ul>

    </div>

  )
}

export default Sidebar
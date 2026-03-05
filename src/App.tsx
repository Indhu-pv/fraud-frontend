import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import FraudAlerts from "./pages/FraudAlerts"
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route element={<MainLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/fraud-alerts" element={<FraudAlerts />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
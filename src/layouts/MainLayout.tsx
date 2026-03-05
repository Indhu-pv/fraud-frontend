import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function MainLayout() {

  return (

    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>

  )
}

export default MainLayout
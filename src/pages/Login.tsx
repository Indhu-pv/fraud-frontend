import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const handleLogin = () => {
    // later we will add authentication here
    navigate("/dashboard")
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded shadow w-80">

        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login
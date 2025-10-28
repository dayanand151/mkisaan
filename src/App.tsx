function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-200">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        Welcome to M-Kisaan 🌾
      </h1>
      <p className="text-gray-700 mb-6">
        Empowering Farmers, Connecting Markets
      </p>
      <div className="flex gap-4">
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
          Login
        </button>
        <button className="bg-white text-green-700 border border-green-700 px-4 py-2 rounded-lg hover:bg-green-100">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default App
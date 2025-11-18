import { useNavigate } from "react-router-dom";

export default function App() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">

      Title box
      <div className="text-3xl font-bold bg-white px-10 py-6 rounded-xl shadow-md mb-10 text-center">
        Welcome to My App
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => nav("/a")}
        >
          Go to Page A
        </button>

        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => nav("/b")}
        >
          Go to Page B
        </button>

        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => nav("/c")}
        >
          Go to Page C
        </button>

        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => nav("/d")}
        >
          Go to Page D
        </button>
      </div>

    </div>
  );
}

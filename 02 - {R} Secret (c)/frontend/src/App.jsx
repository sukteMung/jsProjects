import { useNavigate } from "react-router-dom";
import bg from "./assets/bg.png";

export default function App() {
  const nav = useNavigate();
  const pages = ["ImagesPage", "QuotesPage"];
  return (
    <div className="h-screen w-screen relative flex flex-col justify-center items-center px-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10 opacity-80"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Title */}
      <div className="text-8xl font-bold px-10 py-6 rounded-xl mb-10 text-center text-white opacity-75">
        L and L's memories!
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs bg-white p-6 rounded-xl shadow-md">
        {pages.map((page) => (
          <button 
            key={page}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => nav(`/${page}.jsx`)}>
            Go to Page {page.toUpperCase()}
            </button>
        ))}
      </div>
    </div>
  );
}

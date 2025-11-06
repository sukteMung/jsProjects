import HomePage from "./pages/HomePage";

function App() {
  function handleSearch() {
    fetch("http://localhost:5000/account/LickWidFyre/Licky")
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <HomePage onSearch={handleSearch} />
    </div>
  );
}

export default App;

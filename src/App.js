import React from "react";
const api = {
  key: "c6025b7db0567223f5820225d0b250dd",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;

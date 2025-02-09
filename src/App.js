import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [artists] = useState([]);
  const API_URL = "http://localhost:3001/artists";

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setSearchResults([]);
      return;
    }

    fetch(`${API_URL}?name_like=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.log("Error fetching search results:", error));
  };

  return (
    <div>
      <Sidebar />
      <Header onSearch={handleSearch} />
      <Main
        searchResults={searchResults.length > 0 ? searchResults : artists}
      />
      <Footer />
    </div>
  );
}

export default App;

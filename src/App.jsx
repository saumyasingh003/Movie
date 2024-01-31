import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import ShowList from "./component/ShowList";
import ShowSummary from "./component/ShowSummary";

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ShowList shows={shows} />} />
            <Route
              path="/summary/:id"
              element={<ShowSummary shows={shows} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;

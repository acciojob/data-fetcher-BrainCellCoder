import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data"); // Ensure error handling for non-200 status
        }
        return res.json();
      })
      .then((json) => {
        setData(JSON.stringify(json, null, 2));
        setLoading(false);
        setError(false); // Reset error if successful
      })
      .catch((err) => {
        console.error("An error occurred:", err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      {loading && <p>Loading...</p>}
      {error && <p>An error occurred:</p>} {/* Ensure this message renders */}
      {data && (
        <>
          <h1>Data Fetched from API</h1>
          <pre>{data}</pre>
        </>
      )}
    </div>
  );
};

export default App;

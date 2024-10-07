import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(JSON.stringify(json));
        setLoading(false);
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
      {error && <p>An error occurred:</p>}
      {data && (
        <>
          <h1>Data Fetched from API</h1>
          <p>{data}</p>
        </>
      )}
    </div>
  );
};

export default App;

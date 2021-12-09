import React, { useEffect } from "react";
import Autocomplete from "./Autocomplete";

function App() {
  const [data, setData] = React.useState([]);
  function loadData() {
    fetch("./data.json").then(function (response) {
      var contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function (json) {
          setData(json.data);
        });
      } else {
        console.log("Oops, we haven't got JSON!");
      }
    });
  }

  useEffect(function() {
    loadData();
  })

  return (
    <div>
      <h1>React Autocomplete Demo</h1>
      <h2>Start typing to see it working:</h2>
      <Autocomplete suggestions={data} />
    </div>
  );
}

export default App;

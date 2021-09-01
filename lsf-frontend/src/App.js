import React, { useState, useEffect } from "react";
import "./App.css";
import { Streamer } from "./components/Streamer";
import { Dimmer, Loader } from "semantic-ui-react";

function App() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => setInitialData(data.data));
  }, []);
  console.log(initialData[0]);
  var streamers = initialData[0];
  var categories = initialData[1];
  var dramaCount = initialData[2];
  var urls = initialData[3];

  if (
    streamers !== undefined &&
    categories !== undefined &&
    dramaCount !== undefined &&
    urls !== undefined
  ) {
    return (
      <div className="App">
        <Streamer streamer={streamers} />
      </div>
    );
  } else {
    return (
      <div className="Loader">
        <Dimmer active inverted size="massive">
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </div>
    );
  }
}

export default App;

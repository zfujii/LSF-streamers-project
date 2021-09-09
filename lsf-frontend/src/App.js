import React, { useState, useEffect } from "react";
import "./App.css";
import { Streamer } from "./components/Streamer";
import { Dimmer, Loader, Header } from "semantic-ui-react";
import { Categories } from "./components/Categories";
import { Drama } from "./components/Drama";

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

  var streamers = initialData[0];
  var categories = initialData[1];
  var dramaCount = initialData[2];
  var urls = initialData[3];
  var dramaList = initialData[4];

  if (
    streamers !== undefined &&
    categories !== undefined &&
    dramaCount !== undefined &&
    urls !== undefined
  ) {
    return (
      <div className="app">
        <div className="main-header">
          <Header as="h1" inverted>
            LSF Popularity Metrics
          </Header>
          <Header as="h3" inverted>
            Streamer's popularity according to the ever-changing subreddit,
            LiveStreamFails!
          </Header>
        </div>
        <div className="drama-div">
          <Drama drama={dramaCount} dramaList={dramaList} />
        </div>
        <div className="list-parent">
          <Streamer streamer={streamers} />
          <Categories category={categories} />
        </div>
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

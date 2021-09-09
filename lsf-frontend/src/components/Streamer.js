import React from "react";
import { List, Header, Segment } from "semantic-ui-react";

export const Streamer = ({ streamer }) => {
  //sorts streamers by most to least
  var streamerList = Object.keys(streamer).map(function (key) {
    return [key, streamer[key]];
  });

  streamerList.sort(function (first, second) {
    return second[1] - first[1];
  });
  return (
    <div className="list-child">
      <Segment>
        <Header as="h1">Top 3 Streamers of the Month by # of Clips</Header>
        <List celled size="huge" relaxed>
          <List.Item key={streamerList[0]}>
            {streamerList[0][0]} with {streamerList[0][1]} clips
          </List.Item>
          <List.Item key={streamerList[1]}>
            {streamerList[1][0]} with {streamerList[1][1]} clips
          </List.Item>
          <List.Item key={streamerList[2]}>
            {streamerList[2][0]} with {streamerList[2][1]} clips
          </List.Item>
        </List>
        <Header as="h3">Full List of Top Streamers of the Month</Header>
        <List celled size="medium" relaxed>
          {streamerList.map(function (arr, index) {
            return (
              <List.Item key={arr[0]}>
                {arr[0]} : {arr[1]} clips
              </List.Item>
            );
          })}
        </List>
      </Segment>
    </div>
  );
};

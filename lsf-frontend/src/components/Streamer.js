import React from "react";
import { List } from "semantic-ui-react";

export const Streamer = ({ streamer }) => {
  //sorts streamers by most to least
  var streamerList = Object.keys(streamer).map(function (key) {
    return [key, streamer[key]];
  });

  streamerList.sort(function (first, second) {
    return second[1] - first[1];
  });

  return (
    <List ordered>
      {streamerList.map(function (arr, index) {
        return (
          <List.Item key={arr[0]}>
            <li>
              {arr[0]} : {arr[1]}
            </li>
          </List.Item>
        );
      })}
    </List>
  );
};

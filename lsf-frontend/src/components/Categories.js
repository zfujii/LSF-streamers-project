import React from "react";
import { List, Header, Segment } from "semantic-ui-react";

export const Categories = ({ category }) => {
  //sorts categorys by most to least
  var categoryList = Object.keys(category).map(function (key) {
    return [key, category[key]];
  });

  categoryList.sort(function (first, second) {
    return second[1] - first[1];
  });

  return (
    <div className="list-child">
      <Segment>
        <Header as="h1">Top 3 Categories of the Month by # of Clips</Header>
        <List celled size="huge" relaxed>
          <List.Item key={categoryList[0]}>
            {categoryList[0][0]} with {categoryList[0][1]} clips
          </List.Item>
          <List.Item key={categoryList[1]}>
            {categoryList[1][0]} with {categoryList[1][1]} clips
          </List.Item>
          <List.Item key={categoryList[2]}>
            {categoryList[2][0]} with {categoryList[2][1]} clips
          </List.Item>
        </List>
        <Header as="h3">Full List of Top Categories of the Month</Header>
        <List celled size="medium" relaxed>
          {categoryList.map(function (arr, index) {
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

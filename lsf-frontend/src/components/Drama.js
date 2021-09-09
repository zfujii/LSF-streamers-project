import React from "react";
import { List, Header, Segment } from "semantic-ui-react";

export const Drama = ({ drama, dramaList }) => {
  if (drama !== 0) {
    return (
      <div>
        <Segment>
          <Header as="h1">Drama of the Month</Header>
          <Header as="h3">There were {drama} drama posts this month</Header>
          <List celled size="huge" relaxed>
            {dramaList.map((dramaTitle) => {
              return <List.Item key={dramaTitle}>{dramaTitle}</List.Item>;
            })}
          </List>
        </Segment>
      </div>
    );
  } else {
    return (
      <div>
        <Segment>
          <Header as="h1">Drama of the Month</Header>
          <Header as="h3">There were {drama} drama posts this month</Header>
        </Segment>
      </div>
    );
  }
};

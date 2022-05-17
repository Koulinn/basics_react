import React from "react";
import { Link } from "react-router-dom";
import RenderChildren from "./RenderChildren";
import TitleComponent from "./TitleComponent";

const USERS = [
  {
    id: 1,
    name: "user 1",
  },
  {
    id: 2,
    name: "user 2",
  },
  {
    id: 3,
    name: "user 3",
  },
  {
    id: 4,
    name: "user 4",
  },
];

function GenericView(props) {
  console.log(props, "props1");
  return (
    <main>
      <RenderChildren testprops="testprops">
        <TitleComponent text={props.title} />

        <div>{props.heroText}</div>
        {USERS.map((user) => (
          <Link to={`/detailed${user.id}`}>{user.name}</Link>
        ))}
      </RenderChildren>
    </main>
  );
}

export default GenericView;

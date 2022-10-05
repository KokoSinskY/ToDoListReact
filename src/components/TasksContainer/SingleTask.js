import React from "react";

const SingleTask = (props) => {
  return (
    <li>
      <p>{props.task.title}</p>
    </li>
  );
};

export default SingleTask;

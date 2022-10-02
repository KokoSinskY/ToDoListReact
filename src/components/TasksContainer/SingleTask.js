import React from "react";

const data = [
  {
    title: "jazdunia",
  },
  {
    title: "drugi task",
  },
  {
    title: "trzecie zadanko do zrobienia",
  },
  {
    title: "i kolejny task",
  },
  {
    title: "jeszcze następne zadanko dla Ciebie",
  },
];

const SingleTask = () => {
  return <li>{data.title}</li>;
};

export default SingleTask;

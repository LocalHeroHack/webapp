import React from "react";
import useFetch from "react-fetch-hook";

function About() {
  const { isLoading, data } = useFetch("/usps");

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    data.map((usp) => {
      return <div>usp.title</div>;
    })
  );
}

export default About;

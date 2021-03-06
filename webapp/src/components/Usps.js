import React from "react";
import useFetch from "react-fetch-hook";
import { STRAPI_URL } from "../constants";

function About() {
  const { isLoading, data } = useFetch(STRAPI_URL + "/pages/1");

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="usps mb2 br10 shadow1 bg-white pa2">
      <h1 className="tc">{data.title}</h1>
      <div className="flex">
        {data.usps.map((usp) => {
          return (
            <div className="usp">
              {usp.image && <img src={STRAPI_URL + usp.image.url} alt="usp" />}
              <h3>{usp.description}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;

import React from "react";
import useFetch from "react-fetch-hook";
import { STRAPI_URL } from "../constants";

function About() {
  const { isLoading, data } = useFetch(STRAPI_URL + "/usps");

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="vmin100 w100 flex align-center justify-center">
      {data.map((usp) => {
        return (
          <div className="usp">
            <div
              className="img"
              style={{
                backgroundImage: "url(" + STRAPI_URL + usp.image.url + ")",
              }}
              alt="usp"
            ></div>
            <h3>{usp.heading}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default About;

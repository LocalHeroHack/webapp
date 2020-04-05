import React, { Fragment } from "react";
import useFetch from "react-fetch-hook";
import { STRAPI_URL } from "../constants";

function About() {
  const { isLoading, data } = useFetch(STRAPI_URL + "/pages/1");

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="usps mb2 br10 shadow1">
      <h1 className="tc">{data.title}</h1>
      <div className="flex">
        {data.usps.map((usp) => {
          return (
            <div className="usp">
              {usp.image && (
                <div
                  className="img"
                  style={{
                    backgroundImage: "url(" + STRAPI_URL + usp.image.url + ")",
                  }}
                  alt="usp"
                ></div>
              )}
              <h3>{usp.heading}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;

import React from "react";
import useFetch from "react-fetch-hook";
import Usps from "./Usps";
import SelectCity from "./SelectCity";
import { STRAPI_URL } from "../constants";

function Home() {
  const { isLoading, data } = useFetch(STRAPI_URL + "/pages/1");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div
      style={{
        backgroundImage: "url(" + STRAPI_URL + data.background.url + ")",
      }}
      className="vmin100 w100 flex flex-col align-center justify-center"
    >
      <div>
        <Usps />
      </div>
      <div>
        <SelectCity />
      </div>
    </div>
  );
}

export default Home;

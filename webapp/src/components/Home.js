import React from "react";
import useFetch from "react-fetch-hook";
import Usps from "./Usps";
import SelectCity from "./SelectCity";

function Home() {
  return (
    <div className="vmin100 w100 flex flex-col align-center justify-center">
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

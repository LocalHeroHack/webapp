import React from "react";
import useFetch from "react-fetch-hook";

function Farmers() {
  const { isLoading, data } = useFetch("/farmers");

  return isLoading ? <div>Loading...</div> : JSON.stringify(data);
}

export default Farmers;

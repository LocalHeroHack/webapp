import React from "react";
import Select from "react-select";
import useFetch from "react-fetch-hook";

function SelectCity() {
  const { isLoading, data } = useFetch("/cities");

  if (isLoading) return <div>Loading...</div>;

  return <Select options={data} />;
}

export default SelectCity;

import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import useFetch from "react-fetch-hook";

function SelectCity() {
  const { isLoading, data } = useFetch("https://getlocals.se/data&facet=city");

  if (isLoading) return <div>Loading...</div>;
  const options = [];
  data.value.forEach((farmer) => {
    if (!options.find((option) => farmer.postalCode === option.value)) {
      options.push({
        value: farmer.postalCode,
        label: `${farmer.postalCode} ${farmer.city}`,
      });
    }
  });

  return (
    <div
      className="select-city br10 shadow1"
      style={{ width: "300px", textAlign: "right" }}
    >
      <Select
        style={{ minWidth: "300px" }}
        options={options}
        onChange={(val) => {
          localStorage.setItem("postalCode", val.value);
        }}
      />
      <Link to="/farmers">
        <button style={{ marginTop: 20 }}>Continue</button>
      </Link>
    </div>
  );
}

export default SelectCity;

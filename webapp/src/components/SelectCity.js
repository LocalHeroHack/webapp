import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

function SelectCity() {
  const options = [{ value: "442 90", label: "Kungälv" }];

  return (
    <div className="vmin100 w100 flex align-center justify-center">
      <div style={{ width: "300px", textAlign: "right" }}>
        <Select
          style={{ minWidth: "300px" }}
          options={options}
          onChange={(val) => {
            localStorage.setItem("postalCode", val.value);
          }}
        />
        <Link to="/about">
          <button style={{ marginTop: 20 }}>Continue</button>
        </Link>
      </div>
    </div>
  );
}

export default SelectCity;

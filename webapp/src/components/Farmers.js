import React, { Component } from "react";

class Farmers extends Component {
  constructor() {
    super();
    this.reFetch = this.reFetch.bind(this);
    this.fetchPostalCodes = this.fetchPostalCodes.bind(this);
    this.state = {
      farmers: [],
      postalCodes: [],
      loaded: false,
      activePostalCode: localStorage.getItem("postalCode"),
    };
  }

  componentWillMount() {
    this.reFetch();
    this.fetchPostalCodes();
  }

  reFetch(_postalCode) {
    const postalCode =
      _postalCode || encodeURIComponent(localStorage.getItem("postalCode"));
    const url =
      "https://getlocals.se/data&search=filter%3ApostalCode%3A" + postalCode;
    fetch(url)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        this.setState({ farmers: JSON.parse(result).value, loaded: true });
      })
      .catch((error) => console.log("error", error));
  }

  fetchPostalCodes() {
    fetch("https://getlocals.se/data&facet=city")
      .then((response) => response.json())
      .then((result) => {
        const postalCodes = [];
        result.value.forEach((farmer) => {
          if (!postalCodes.includes(farmer.postalCode)) {
            postalCodes.push(farmer.postalCode);
          }
        });
        this.setState({ postalCodes, loaded: true });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    const { farmers, loaded } = this.state;
    if (!loaded) {
      return <div>Loading...</div>;
    } else {
      const listFarmers = farmers.map((farmer) => (
        <li key={farmer["id"]}>
          <div>{farmer["name"]} has to offer</div>
          <ul>
            {farmer["products"].map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </li>
      ));
      return (
        <div className="vmin100 w100 flex flex-col align-center justify-center ">
          <div className="br10 shadow1 bg-white">
            <ul className="tabs flex">
              {this.state.postalCodes.map((code) => {
                return (
                  <li
                    key={code}
                    className={`tab ${
                      this.state.activePostalCode === code ? "active" : ""
                    }`}
                    onClick={() => {
                      this.setState({
                        activePostalCode: code,
                      });
                      this.reFetch(code);
                    }}
                  >
                    {code}
                  </li>
                );
              })}
            </ul>
            <ul className="pa3">{listFarmers}</ul>
          </div>
        </div>
      );
    }
  }
}

export default Farmers;

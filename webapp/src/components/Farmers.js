import React, { Component } from "react";

class Farmers extends Component {
  constructor() {
    super();
    this.reFetch = this.reFetch.bind(this);
    this.state = {
      data: [],
      loaded: false,
      //placeholder: "Loading...",
    };
  }

  componentWillMount() {
    this.reFetch();
  }

  reFetch() {
    fetch(
      "https://getlocals.se/data&search=filter%3ApostalCode%3A" +
        encodeURIComponent(localStorage.getItem("postalCode"))
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        this.setState({ data: JSON.parse(result), loaded: true });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    const { data, loaded, placeholder } = this.state;
    if (!loaded) {
      return <div>Loading...</div>;
    } else {
      const farmers = data["value"];
      console.log(farmers);
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
        <div>
          <h3>Farmers close by:</h3>
          <ul>{listFarmers}</ul>
        </div>
      );
    }
  }
}

export default Farmers;

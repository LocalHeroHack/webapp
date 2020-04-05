import React, {Component} from "react";
import useFetch from "react-fetch-hook";

class Farmers extends Component {
  constructor() {
    super()
    this.reFetch = this.reFetch.bind(this)
    this.state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
    }
  }

  componentWillMount() {
    this.reFetch()
  }

  reFetch() {
    var myHeaders = new Headers()
    myHeaders.append("api-key", "0776D72F8B5B9A97D475B08F1090FFF5")

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    fetch("https://localfarmer-search-dev.search.windows.net/indexes/cosmosdb-index/docs?api-version=2019-05-06&search=filter%3ApostalCode%3A442%2090", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        this.setState({ data: JSON.parse(result), loaded: true })
      })
      .catch(error => console.log('error', error))
  }

  render() {
    const { data, loaded, placeholder } = this.state
    if (!loaded){
        return <div>Loading...</div> 
    } else {
        const farmers = data['value']
        console.log(farmers)
        const listFarmers = farmers.map((farmer) => 
        <li key={farmer['id']}> 
        <div>{ farmer['name'] } has to offer</div>
        <ul>{ farmer['products'].map(product => <li key={product}>{product}</li>) }</ul>
        </li>)
    return  (
      <div>
      <h3>Farmers close by:</h3>
      <ul>{listFarmers}</ul> 
      </div>
      )
    }
  }
}

export default Farmers;

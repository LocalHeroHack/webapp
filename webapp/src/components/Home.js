import React from "react";
import useFetch from "react-fetch-hook";

function Home() {
  const { isLoading, data } = useFetch("/pages/start");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <img src={data.img} alt="welcome" />
    </div>
  );
}

export default Home;

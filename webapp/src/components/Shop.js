import React from "react";

function Shop() {
  const { isLoading, data } = useFetch("/farmers");

  if (isLoading) return <div>Loading...</div>;
  return data.map((farmer) => {
    return (
      <div>
        <div>farmer.heading</div>
        <img scr={farmer.img} />
        <div>farmer.title</div>
        <div>farmer.description</div>
        <div>farmer.hours</div>
        <h3>Products:</h3>
        {farmer.products.map((product) => {
          return <img src={product.img} />;
        })}
      </div>
    );
  });
}

export default Shop;

import React, { useState } from "react";
import Loader from "react-loader-spinner";

function Cart() {
  const { isLoading, data } = useFetch("/sections/cart");
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState(localStorage.getItem("cart"));

  if (isLoading)
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );

  return (
    <div>
      <img
        onClick={() => {
          setOpenCart(!openCart);
        }}
        src={data.img}
      />
      {openCart && (
        <div>
          <span
            onClick={() => {
              setOpenCart(false);
            }}
          >
            Close
          </span>
          {cart.products.map((product) => {
            return (
              <div>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cart;

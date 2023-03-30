import React from "react";
import "./cart.css";
import Silla from '../../assets/multimedia/silla.webp'

const Cart = () => {
  return (
   <div className="container-cart">
        <div className="marco-cart">
            <div class="cart-items">
              <div class="imagen-cart">
                  <img src={Silla} alt="" />
              </div>
              <div class="producto">
                  <p>MATTÉ WOOD CHAIR</p>
              </div>
              <div class="precio">
                  <p>288</p>
              </div>
              <div class="cancelar">
                  <button>X</button>
              </div>
            </div>
        </div>
   </div>
  );
};

export default Cart;

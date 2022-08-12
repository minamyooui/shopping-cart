import CartContent from "./CartContent";

function Cart({toggleCart, content, increment, decrement}) {
  const createContents = () => {
    const contents = [];
    content.sort((a, b) => a.name.localeCompare(b.name));
    content.forEach((e, i) => {
      const product = <CartContent product={e} index={i} increment={increment} decrement={decrement}/>;
      contents.push(product);
    });
    return contents;
  }
  return (
    <div id='cart-hide' className="hide">
      <div id="cart">
        <h2>Your shopping cart</h2>
        <div id="cart-contents">
          {createContents()}
        </div>
        <div>Total: {}</div>
        <div>
          <button>Checkout</button>
          <button onClick={toggleCart}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;
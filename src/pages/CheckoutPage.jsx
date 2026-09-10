import { useCart } from "../hook/useCart";
import Checkout from "../component/Checkout";

function CheckoutPage() {
  const { cart, cartTotal } = useCart();

  const tax = cartTotal * 0.15;
  const delivery = cartTotal > 0 ? 5 : 0;
  const orderTotal = cartTotal + tax + delivery;

  return (
    <Checkout
      cart={cart}
      total={orderTotal}
      onClose={() => window.history.back()}
    />
  );
}

export default CheckoutPage;
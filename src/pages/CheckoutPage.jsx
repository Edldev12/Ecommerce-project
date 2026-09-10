import { useState } from "react";
import Checkout from "../component/Checkout";

function CheckoutPage() {
  const [showCheckout, setShowCheckout] = useState(true);

  const handleClose = () => {
    setShowCheckout(false);
  };

  if (!showCheckout) {
    return <h1>Checkout closed</h1>;
  }

  return (
    <Checkout
      cart={[]}
      total={0}
      onClose={handleClose}
    />
  );
}

export default CheckoutPage;
import * as React from "react";

// Event handlers live INSIDE the component but are NOT part of the render output.
// They "do things" in response to user actions — this is intentional side effect territory.
// Rule #1: if a side effect is triggered by an event, put it in an event handler.

export default function ShoppingCart() {
  const [cart, setCart] = React.useState([]);
  const [lastAction, setLastAction] = React.useState(null);

  // ── handleAddItem START ──────────────────────────────────────────────────────
  // EVENT HANDLER: triggered by a button click.
  // Allowed to cause side effects — here it mutates state and logs to console.
  const handleAddItem = (item) => {
    setCart((prev) => [...prev, item]); // state update (side effect)
    console.log(`Added ${item} to cart`);  // logging (side effect)
  };
  // ── handleAddItem END ────────────────────────────────────────────────────────

  // ── handleCheckout START ─────────────────────────────────────────────────────
  // EVENT HANDLER: submits a form — the classic "do something" moment.
  // Side effects here: network request + state update.
  const handleCheckout = async (e) => {
    e.preventDefault();
    setLastAction("Submitting order...");

    await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({ cart }),
    });

    setLastAction("Order placed!");
    setCart([]);
  };
  // ── handleCheckout END ───────────────────────────────────────────────────────

  return (
    <div>
      <button onClick={() => handleAddItem("Apple")}>Add Apple</button>
      <button onClick={() => handleAddItem("Banana")}>Add Banana</button>

      <form onSubmit={handleCheckout}>
        <button type="submit">Checkout ({cart.length} items)</button>
      </form>

      {lastAction && <p>{lastAction}</p>}
    </div>
  );
}

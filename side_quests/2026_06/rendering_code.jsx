import * as React from "react";

// Rendering code lives at the TOP LEVEL of the component.
// It takes props and state as INPUT and returns JSX as OUTPUT.
// It must be PURE — same inputs always produce the same output, no side effects.
// Think of it like a math formula: f(props, state) = JSX

// ─── PROPS vs STATE ───────────────────────────────────────────────────────────
//
// PROPS  — data passed IN from a parent component.
//          This component doesn't own it and cannot change it.
//          If the parent re-renders with new props, this component re-renders too.
//          Think of props as function arguments.
//
// STATE  — data owned and managed by THIS component via React.useState.
//          Only this component can update it (via its setter).
//          Changing state triggers a re-render of this component.
//          Think of state as a component's private memory.
//
// Key difference:
//   Props  → set by the PARENT,  read-only here
//   State  → set by THIS component, can be updated here
// ─────────────────────────────────────────────────────────────────────────────

// `items` and `discountPercent` are PROPS — the parent decides these values.
// OrderSummary has no say in what they are; it just uses them.
export default function OrderSummary({ items, discountPercent }) {

  // STATE — this component owns `isExpanded`. The parent doesn't know or care.
  // Toggling it only affects this component's render, not the parent.
  const [isExpanded, setIsExpanded] = React.useState(false);

  // PURE COMPUTATION from PROPS — derived values, no side effects.
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const discount = subtotal * (discountPercent / 100); // discountPercent is a PROP
  const total = subtotal - discount;

  // PURE TRANSFORMATION from PROPS — new arrays, originals never mutated.
  const sortedItems = [...items].sort((a, b) => a.price - b.price);
  const expensiveItems = sortedItems.filter((item) => item.price > 10);

  // CONDITIONAL RENDERING using PROPS — items came from the parent.
  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Order Summary</h2>

      {/* STATE drives this toggle — clicking changes isExpanded, triggering a re-render */}
      <button onClick={() => setIsExpanded((prev) => !prev)}>
        {isExpanded ? "Hide" : "Show"} items
      </button>

      {/* STATE used in rendering — same pattern as props, just owned locally */}
      {isExpanded && (
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              {item.name} — ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      {expensiveItems.length > 0 && (
        <p>{expensiveItems.length} premium item(s) in your cart.</p>
      )}

      {/* PROPS used directly in the output */}
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Discount ({discountPercent}%): -${discount.toFixed(2)}</p>
      <strong>Total: ${total.toFixed(2)}</strong>
    </div>
  );
}

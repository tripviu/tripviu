export type Order = {
  id: string;
  hotelId: string;
  createdAt: string;
};

const ORDERS: Order[] = [];

/** Maak boeking (alleen in memory tijdens dev). */
export function createOrder(hotelId: string): Order {
  const id = Math.random().toString(36).slice(2);
  const order: Order = { id, hotelId, createdAt: new Date().toISOString() };
  ORDERS.push(order);
  return order;
}

/** Lijst (optioneel voor debug/admin). */
export function listOrders(): Order[] {
  return ORDERS;
}

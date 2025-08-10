/** Start lokale (test) boeking zonder externe provider. */
export async function startLocalBooking(hotelId: string) {
  const res = await fetch("/api/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hotelId }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Failed to book");
  }
  const data = await res.json();
  const bookingId = data.bookingId || "";
  const hotelName = data.hotel?.name || "";
  window.location.href = `/book/success?bookingId=${encodeURIComponent(bookingId)}&hotel=${encodeURIComponent(hotelName)}`;
}

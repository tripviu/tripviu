export type WishlistItem = { id: string; addedAt: number };
const KEY = "tripviu_wishlist_v1";

export function getWishlist(): WishlistItem[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}
export function isSaved(id: string){ return getWishlist().some(x=>x.id===id); }
export function toggleWishlist(id: string){
  if (typeof window === "undefined") return;
  const cur = getWishlist();
  const exists = cur.find(x=>x.id===id);
  const next = exists ? cur.filter(x=>x.id!==id) : [{id, addedAt: Date.now()}, ...cur].slice(0,500);
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent("tripviu:wishlist:changed"));
}
export function onWishlistChange(handler: ()=>void){
  if (typeof window === "undefined") return () => {};
  const fn = () => handler();
  window.addEventListener("tripviu:wishlist:changed", fn);
  return () => window.removeEventListener("tripviu:wishlist:changed", fn);
}

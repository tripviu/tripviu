export function buildAffiliateUrl(base: string, opts?: { marker?: string; subId?: string }) {
  const marker = opts?.marker || process.env.NEXT_PUBLIC_AFF_MARKER || "TRIPVIU";
  const subId = opts?.subId;

  try {
    const url = new URL(base);
    // Zet of behoud bestaande query, voeg marker + subId toe
    if (marker) url.searchParams.set("marker", marker);
    if (subId) url.searchParams.set("sub_id", subId);
    return url.toString();
  } catch {
    // Als base géén geldige URL is, return gewoon base (fail-safe)
    return base;
  }
}

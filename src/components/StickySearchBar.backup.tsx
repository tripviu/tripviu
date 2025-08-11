"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function StickySearchBar() {
  const sp = useSearchParams();
  const router = useRouter();
  const city = sp.get("city") || "";
  const [count, setCount] = useState<number | null>(null);
  const sort = sp.get("sort") || "relevance";

  const qs = useMemo(() => {
    const p = new URLSearchParams(sp as any);
    return p.toString();
  }, [sp]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/search-count?${qs}`, { cache: "no-store" });
        const json = await res.json();
        if (!cancelled) setCount(json.count ?? null);
      } catch {
        if (!cancelled) setCount(null);
      }
    })();
    return () => { cancelled = true; };
  }, [qs]);

  function updateSort(next: string) {
    const p = new URLSearchParams(sp as any);
    p.set("sort", next);
    router.push(`/search?${p.toString()}`);
  }

  return (
    <div className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center gap-3">
        <div className="text-sm text-gray-800">
          {city ? <strong>{city}</strong> : "All destinations"}
          {typeof count === "number" ? ` · ${count} results` : ""}
        </div>
        <div className="md:ml-auto flex items-center gap-2">
          <label className="text-sm text-gray-600">Sort</label>
          <select
            value={sort}
            onChange={(e) => updateSort(e.target.value)}
            className="text-sm border rounded-md px-2 py-1 bg-white"
          >
            <option value="relevance">Relevance</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="stars-desc">Stars: High to Low</option>
            <option value="halal-desc">Halal score: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

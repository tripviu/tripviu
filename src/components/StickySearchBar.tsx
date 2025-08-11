"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PriceField from "@/components/PriceField";

export default function StickySearchBar() {
  const sp = useSearchParams();
  const router = useRouter();

  const [city, setCity] = useState(sp.get("city") || "");
  const [minStars, setMinStars] = useState(parseInt(sp.get("minStars") || "0", 10));
  const [maxPrice, setMaxPrice] = useState(parseInt(sp.get("maxPrice") || "0", 10));
  const [halalScore, setHalalScore] = useState(parseInt(sp.get("halalScore") || "0", 10));
  const [sort, setSort] = useState(sp.get("sort") || "relevance");
  const [count, setCount] = useState<number | null>(null);

  // URL-sync
  useEffect(() => {
    setCity(sp.get("city") || "");
    setMinStars(parseInt(sp.get("minStars") || "0", 10));
    setMaxPrice(parseInt(sp.get("maxPrice") || "0", 10));
    setHalalScore(parseInt(sp.get("halalScore") || "0", 10));
    setSort(sp.get("sort") || "relevance");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sp]);

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

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const p = new URLSearchParams();
    if (city.trim()) p.set("city", city.trim());
    if (minStars > 0) p.set("minStars", String(minStars));
    if (maxPrice > 0) p.set("maxPrice", String(maxPrice));
    if (halalScore > 0) p.set("halalScore", String(halalScore));
    if (sort) p.set("sort", sort);
    router.push(`/search?${p.toString()}`);
  }

  function onReset() {
    router.push(`/search${city ? `?city=${encodeURIComponent(city)}` : ""}`);
  }

  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="leading-tight">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700/90">Refine results</div>
            <div className="text-sm text-gray-800">
              {city ? <strong>{city}</strong> : "All destinations"}
              {typeof count === "number" ? ` · ${count} results` : ""}
            </div>
          </div>
        </div>

        {/* Form card */}
        <form
          onSubmit={onSubmit}
          className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-3 items-end bg-white border rounded-xl p-3 md:p-4 shadow-sm"
        >
          {/* Destination */}
          <div className="md:col-span-4">
            <label className="block text-xs font-medium text-gray-600 mb-1">📍 Destination</label>
            <input
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              placeholder="Where do you want to stay?"
              className="w-full border rounded-lg px-3 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              aria-label="Destination"
            />
          </div>

          {/* Min stars */}
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-600 mb-1">⭐ Min stars</label>
            <input
              type="number" min={0} max={5}
              value={Number.isFinite(minStars) ? minStars : 0}
              onChange={(e)=>setMinStars(parseInt(e.target.value||"0",10))}
              className="w-full border rounded-lg px-3 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              aria-label="Minimum stars"
            />
          </div>

          {/* Price */}
          <div className="md:col-span-3">
            <label className="block text-xs font-medium text-gray-600 mb-1">💶 Price</label>
            <div className="border rounded-lg px-3 py-2 shadow-inner focus-within:ring-2 focus-within:ring-emerald-600/30">
              <PriceField
                name="maxPrice"
                defaultValue={Number.isFinite(maxPrice) ? maxPrice : 0}
                min={0}
                max={1000}
                step={10}
                onChange={(v)=>setMaxPrice(v)}
              />
            </div>
          </div>

          {/* Halal score */}
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-600 mb-1">🌙 Halal score</label>
            <select
              value={Number.isFinite(halalScore) ? halalScore : 0}
              onChange={(e)=>setHalalScore(parseInt(e.target.value||"0",10))}
              className="w-full border rounded-lg px-3 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-600/30 bg-white"
              aria-label="Minimum halal score"
            >
              <option value="0">Any</option>
              <option value="1">≥ 1/5</option>
              <option value="2">≥ 2/5</option>
              <option value="3">≥ 3/5</option>
              <option value="4">≥ 4/5</option>
              <option value="5">= 5/5</option>
            </select>
          </div>

          {/* Sort */}
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-600 mb-1">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full text-sm border rounded-lg px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              aria-label="Sort results"
            >
              <option value="relevance">Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="stars-desc">Stars: High to Low</option>
              <option value="halal-desc">Halal score: High to Low</option>
            </select>
          </div>

          {/* Actions (Apply + Reset) */}
          <div className="md:col-span-12 flex gap-2">
            <button
              className="flex-1 rounded-lg px-4 py-2 text-white bg-gradient-to-r from-emerald-700 to-emerald-600 shadow hover:opacity-95 active:opacity-90"
              aria-label="Apply filters"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={onReset}
              className="rounded-lg px-4 py-2 border bg-white hover:bg-gray-50"
              aria-label="Reset filters"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

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
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Kop + context */}
        <div className="flex items-end justify-between">
          <div className="leading-tight">
            <div className="text-xs uppercase tracking-wide text-gray-500">Refine results</div>
            <div className="text-sm text-gray-800">
              {city ? <strong>{city}</strong> : "All destinations"}
              {typeof count === "number" ? ` · ${count} results` : ""}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm border rounded-md px-2 py-1 bg-white"
              aria-label="Sort results"
            >
              <option value="relevance">Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="stars-desc">Stars: High to Low</option>
              <option value="halal-desc">Halal score: High to Low</option>
            </select>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
          <div className="md:col-span-4">
            <label className="block text-xs font-medium text-gray-600 mb-1">�� Destination</label>
            <input
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              placeholder="Where do you want to stay?"
              className="w-full border rounded px-3 py-2"
              aria-label="Destination"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-600 mb-1">⭐ Min stars</label>
            <input
              type="number" min={0} max={5}
              value={Number.isFinite(minStars) ? minStars : 0}
              onChange={(e)=>setMinStars(parseInt(e.target.value||"0",10))}
              className="w-full border rounded px-3 py-2"
              aria-label="Minimum stars"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-medium text-gray-600 mb-1">💶 Price</label>
            <div className="border rounded px-3 py-2">
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

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-600 mb-1">🕋 Halal score</label>
            <select
              value={Number.isFinite(halalScore) ? halalScore : 0}
              onChange={(e)=>setHalalScore(parseInt(e.target.value||"0",10))}
              className="w-full border rounded px-3 py-2"
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

          <div className="md:col-span-1 flex gap-2">
            <button className="flex-1 bg-black text-white rounded px-4 py-2" aria-label="Apply filters">Apply</button>
            <button type="button" onClick={onReset} className="hidden md:block border rounded px-3 py-2" aria-label="Reset filters">Reset</button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm border rounded-md px-2 py-1 bg-white"
              aria-label="Sort results mobile"
            >
              <option value="relevance">Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="stars-desc">Stars: High to Low</option>
              <option value="halal-desc">Halal score: High to Low</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

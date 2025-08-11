"use client";
import { useState, useEffect } from "react";

export default function PriceField({
  name = "maxPrice",
  defaultValue = 0,
  min = 0,
  max = 1000,
  step = 10,
  onChange,
}: {
  name?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}) {
  const [val, setVal] = useState<number>(defaultValue);

  useEffect(() => {
    setVal(defaultValue);
  }, [defaultValue]);

  function handle(v: number) {
    setVal(v);
    onChange?.(v);
  }

  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={(e)=>handle(parseInt(e.target.value,10))}
        className="w-40"
      />
      <span className="text-sm text-gray-700 whitespace-nowrap">Max €{val}</span>
      <input type="hidden" name={name} value={val} />
    </div>
  );
}

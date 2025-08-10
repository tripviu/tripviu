export default function Stars({ value=0 }:{ value?: number }){
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="text-amber-500" aria-label={`${full} stars`}>
      {"★".repeat(full)}{"☆".repeat(5-full)}
    </div>
  );
}

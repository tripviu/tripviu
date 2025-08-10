export default function Stars({ value=0 }:{value?:number}){
  const v=Math.round(value??0);
  return <span className="text-amber-500" aria-label={`${v} stars`}>{"★".repeat(v) || "—"}</span>;
}

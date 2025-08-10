export default function Badge({children}:{children:React.ReactNode}){
  return <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs px-2 py-1 rounded">{children}</span>;
}

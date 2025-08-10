export default function Badge({children}:{children:React.ReactNode}){
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs border border-gray-200 bg-white text-gray-800">
      {children}
    </span>
  );
}

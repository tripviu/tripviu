export default function Loading() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-7 bg-gray-200 rounded w-64" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-72 bg-gray-200 rounded" />
          <div className="h-72 bg-gray-200 rounded" />
          <div className="h-72 bg-gray-200 rounded" />
        </div>
      </div>
    </main>
  );
}

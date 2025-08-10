import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="mt-2 text-gray-600">We couldn't find that page.</p>
          <a href="/" className="mt-6 inline-block bg-black text-white rounded-md px-4 py-2">Back to home</a>
        </div>
      </main>
    </>
  );
}

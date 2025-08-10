import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export const metadata = {
  title: "Contact — Tripviu",
  description: "Get in touch with Tripviu.",
};

export default function ContactPage(){
  return (
    <>
      <Navbar />
      <main className="py-12">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Questions, feedback, or partnership ideas? We’d love to hear from you.
          </p>

          <div className="mt-8 max-w-xl bg-white border rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Your name</label>
                <input className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input className="mt-1 w-full border rounded-md px-3 py-2" placeholder="you@example.com" type="email" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea className="mt-1 w-full border rounded-md px-3 py-2" rows={5} placeholder="How can we help?" />
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-black text-white rounded-md px-4 py-2" disabled>
                  Send (coming soon)
                </button>
                <a href="mailto:hello@tripviu.com" className="text-sm underline">
                  or email us: hello@tripviu.com
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

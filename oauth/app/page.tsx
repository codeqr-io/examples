import { LinksDemo } from "@/components/links-demo";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="container mx-auto max-w-4xl py-8 md:py-16 mt-8">
      <section className="w-full px-4 md:px-6 flex flex-col items-center text-center gap-6">
        <div className="max-w-lg">
          <h1 className="font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
            Kickstart your
            <br />
            <span className="bg-gradient-to-r py-1 from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              CodeQR Integration
            </span>
          </h1>
          <h2 className="mt-5 text-gray-600 sm:text-xl">
            Integrate CodeQR&apos;s powerful infrastructure into your
            applications: dynamic QR code generation, link management, feedback
            pages, and real-time monitoring.
          </h2>
        </div>

        <div className="flex gap-2">
          <Link
            href="https://codeqr.mintlify.app/integrations/quickstart"
            target="_blank"
            className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-gray-300 border-black bg-black text-white"
          >
            Read the docs
          </Link>
          <Link
            href="https://github.com/codeqr-io/examples/tree/main/oauth"
            target="_blank"
            className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-gray-200 border-gray-200 bg-white hover:border-gray-400 hover:text-gray-800 text-gray-500"
          >
            View the code
          </Link>
        </div>

        <LinksDemo />
      </section>
    </main>
  );
}

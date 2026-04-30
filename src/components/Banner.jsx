import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="mt-6">
      <div className="px-3">
        <div className="mx-auto max-w-7xl">
          <div className="relative w-full overflow-hidden rounded-2xl border border-[color:var(--brand-500-20)] bg-white">
            <div className="absolute inset-0 bg-[url('/banner.png')] bg-cover bg-center" />

            <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/65 to-white/85" />
            <div className="absolute inset-0 bg-[color:var(--brand-500)] opacity-[0.06]" />

            <div className="relative px-6 py-16 md:py-20 min-h-[60vh] flex items-center">
              <div className="text-black max-w-2xl">
                <p className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium mb-5 bg-[color:var(--brand-500-10)] border border-[color:var(--brand-500-20)] text-[color:var(--brand-500)]">
                  Online Book Borrowing Platform
                </p>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Find Your Next Read
                </h1>

                <p className="text-base md:text-lg mt-4 text-black/65 max-w-xl">
                  Explore a curated collection, filter by category, and borrow your next favorite book in minutes.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/all-books" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[color:var(--brand-500)] text-white hover:brightness-95 active:brightness-90">
                      Browse Now
                    </Button>
                  </Link>

                  <Link href="/pricing" className="w-full sm:w-auto">
                    <Button
                      variant="bordered"
                      className="w-full sm:w-auto border-[color:var(--brand-500)] text-[color:var(--brand-500)] hover:bg-[color:var(--brand-500)] hover:text-white"
                    >
                      Membership
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
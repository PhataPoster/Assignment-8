import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="px-3">
        <div className="mx-auto max-w-7xl rounded-2xl border border-[color:var(--brand-500-20)] bg-white">
          <div className="px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-5 space-y-4">
                <Link href="/" className="flex items-center gap-2 w-fit">
                  <Image
                    src="/logo2.png"
                    alt="BookLoop logo"
                    width={32}
                    height={32}
                  />
                  <h2 className="text-xl font-semibold tracking-tight">
                    BookLoop
                  </h2>
                </Link>

                <p className="text-sm leading-relaxed text-black/65 max-w-sm">
                  A modern online library experience—browse books, filter by
                  category, and borrow titles securely.
                </p>

                <div className="pt-2">
                  <h3 className="text-sm font-semibold">Social</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { href: "https://facebook.com", label: "Facebook" },
                      { href: "https://x.com", label: "X" },
                      { href: "https://linkedin.com", label: "LinkedIn" },
                      { href: "https://github.com", label: "GitHub" },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium transition bg-[color:var(--brand-500-10)] border border-[color:var(--brand-500-20)] text-[color:var(--brand-500)] hover:bg-[color:var(--brand-500-15)]"
                        aria-label={item.label}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <h3 className="text-sm font-semibold mb-4">Explore</h3>
                <ul className="space-y-3 text-sm text-black/65">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-[color:var(--brand-500)] transition"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/all-books"
                      className="hover:text-[color:var(--brand-500)] transition"
                    >
                      All Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      className="hover:text-[color:var(--brand-500)] transition"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="hover:text-[color:var(--brand-500)] transition"
                    >
                      Membership
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
                <div className="space-y-2 text-sm text-black/65">
                  <p>
                    Email: {" "}
                    <a
                      href="mailto:support@bookloop.com"
                      className="hover:text-[color:var(--brand-500)] transition"
                    >
                      support@bookloop.com
                    </a>
                  </p>
                  <p>
                    Phone: {" "}
                    <a
                      href="tel:+8801000000000"
                      className="hover:text-[color:var(--brand-500)] transition"
                    >
                      +880 10 0000 0000
                    </a>
                  </p>
                  <p>Hours: Sat–Thu, 10:00 AM – 7:00 PM</p>
                </div>

                <div className="mt-5">
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white transition hover:brightness-95 active:brightness-90 bg-[color:var(--brand-500)]"
                  >
                    Login to Borrow
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-[color:var(--brand-500-20)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-black/55">
            <p>© {new Date().getFullYear()} BookLoop. All rights reserved.</p>
            <p>Built for a seamless borrowing experience.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
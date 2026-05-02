"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLogin } from "react-icons/ci";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/all-books", label: "All Books" },
  { href: "/profile", label: "My Profile" },
];

const Navbar = () => {
  const pathname = usePathname();
  const userData = authClient.useSession();
  const user = userData?.data?.user;

  console.log(user);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="px-3">
        <div className="mx-auto max-w-7xl mt-3 rounded-2xl border border-(--brand-500-20) backdrop-blur supports-backdrop-filter:bg-white/70 bg-white/80">
          <nav className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <Image
                src="/logo2.png"
                alt="BookLoop logo"
                loading="eager"
                width={40}
                height={40}
                className="object-cover h-auto w-auto"
              />
              <h3 className="font-black text-lg tracking-tight">BookLoop.</h3>
            </Link>

            <ul className="flex flex-wrap items-center justify-start sm:justify-center gap-x-2 gap-y-2 text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`inline-flex items-center rounded-full px-3 py-1.5 transition ${isActive
                          ? "bg-[color:var(--brand-500)] text-white"
                          : "text-black/70 hover:text-[color:var(--brand-500)]"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {!user ? <div className="flex justify-start sm:justify-end gap-2">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white transition hover:brightness-95 active:brightness-90 bg-[color:var(--brand-500)] gap-2"
              >
                Login
                <CiLogin className="text-lg" />
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white transition hover:brightness-95 active:brightness-90 bg-[color:var(--brand-500)] gap-2"
              >
                sign up
              </Link>
            </div> :
              <div className="flex justify-center items-center gap-4">
                <p className="text-sm text-gray-500">Welcome, {user.name}!</p>
                <Avatar>
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                    referrerPolicy="no-referrer" />
                  <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <Button variant="danger" onClick={() => authClient.signOut()}>
                  Logout
                </Button>
              </div>}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
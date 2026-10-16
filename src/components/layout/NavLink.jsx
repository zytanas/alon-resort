"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// A next/link that marks itself with aria-current="page" on its own section
// (e.g. /rooms and /rooms/beach-villa both mark the Rooms link).
export default function NavLink({ href, ...props }) {
  const pathname = usePathname();
  const current = pathname === href || pathname.startsWith(`${href}/`);

  return <Link href={href} aria-current={current ? "page" : undefined} {...props} />;
}

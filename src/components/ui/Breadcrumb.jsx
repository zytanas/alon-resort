import Link from "next/link";
import clsx from "clsx";

const homeItem = { label: "Home", href: "/" };

// "Home / Villas / Pool Villa". Pass the trail after Home; the last item is
// the current page and isn't a link.
export default function Breadcrumb({ items, className }) {
  const trail = [homeItem, ...items];

  return (
    <nav aria-label="Breadcrumb" className={clsx("text-sm text-ink-muted", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((item, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-ink">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="underline-offset-4 hover:text-ink hover:underline">
                    {item.label}
                  </Link>
                  <span aria-hidden="true" className="text-line">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

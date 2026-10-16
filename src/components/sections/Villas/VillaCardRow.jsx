import clsx from "clsx";
import Stagger from "@/components/motion/Stagger";
import VillaCard from "./VillaCard";

const columns = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

// Villa cards in a grid from md up. On mobile it's a horizontal scroll-snap
// row that runs to the screen edges, with the next card peeking in.
export default function VillaCardRow({ rooms, className }) {
  const count = rooms.length >= 4 ? 4 : 3;

  return (
    <Stagger
      as="ul"
      className={clsx(
        "-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 scrollbar-none sm:-mx-8 sm:scroll-px-8 sm:px-8",
        "md:mx-0 md:grid md:gap-x-6 md:gap-y-12 md:overflow-visible md:px-0 md:pb-0",
        columns[count],
        className,
      )}
    >
      {rooms.map((room) => (
        <li key={room.slug} className="w-[78%] shrink-0 snap-start sm:w-[55%] md:w-auto">
          <VillaCard room={room} />
        </li>
      ))}
    </Stagger>
  );
}

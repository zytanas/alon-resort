import { notFound } from "next/navigation";
import { rooms } from "@/content/rooms";
import OtherVillas from "@/components/sections/OtherVillas/OtherVillas";
import VillaDetail from "@/components/sections/VillaDetail/VillaDetail";

// Only slugs from content/rooms.js exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

function getRoom(slug) {
  return rooms.find((room) => room.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  return { title: room.name, description: room.shortDescription };
}

export default async function RoomPage({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  return (
    <>
      <VillaDetail room={room} />
      <OtherVillas currentSlug={room.slug} />
    </>
  );
}

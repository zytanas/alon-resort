import { notFound } from "next/navigation";
import ComingSoon from "@/components/layout/ComingSoon";
import { rooms } from "@/content/rooms";

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
  return { title: room ? room.name : "Room" };
}

export default async function RoomPage({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  return <ComingSoon title={room.name} />;
}

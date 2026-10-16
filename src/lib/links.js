import { site } from "@/config/site";

// whatsappLink("Hi!") → "https://wa.me/639175550142?text=Hi!" (message prefilled)
export function whatsappLink(message) {
  const url = new URL(site.whatsapp);
  url.searchParams.set("text", message);
  return url.toString();
}

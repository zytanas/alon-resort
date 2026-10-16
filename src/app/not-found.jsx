import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-section">
      <p className="text-eyebrow font-medium uppercase text-accent-deep">404</p>
      <Heading as="h1" size="display" className="mt-4">
        Lost at <em>sea.</em>
      </Heading>
      <p className="mt-6 max-w-md text-lead text-ink-muted">
        The page you&apos;re looking for has drifted off. Let&apos;s get you
        back to shore.
      </p>
      <Button href="/" className="mt-10">
        Back to home
      </Button>
    </Container>
  );
}

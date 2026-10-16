import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

// Shared body for placeholder pages until their real sections are built.
export default function ComingSoon({ title }) {
  return (
    <Container className="py-section">
      <Heading as="h1">{title}</Heading>
      <p className="mt-4 text-lead text-ink-muted">Coming soon.</p>
    </Container>
  );
}

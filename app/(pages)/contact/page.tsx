export default function ContactPage() {
  return (
    <section className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Contact
      </p>
      <h1 className="text-4xl font-bold tracking-tight">Let&apos;s talk</h1>
      <p className="max-w-2xl text-lg leading-8 text-zinc-600">
        Reach out for collaborations, freelance work, or ideas worth building.
      </p>
      <a
        href="mailto:hello@example.com"
        className="inline-flex rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
      >
        hello@example.com
      </a>
    </section>
  );
}

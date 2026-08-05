interface Props {
  number: string;
  label: string;
}

export default function SectionEyebrow({ number, label }: Props) {
  return (
    <p className="mb-4 flex items-center justify-center gap-3 text-center text-sm font-semibold tracking-[0.3em] text-[var(--accent-600)] dark:text-[var(--accent-400)]">
      <span className="h-px w-8 bg-[var(--accent-600)]/40 dark:bg-[var(--accent-400)]/40" />
      {number} — {label.toUpperCase()}
      <span className="h-px w-8 bg-[var(--accent-600)]/40 dark:bg-[var(--accent-400)]/40" />
    </p>
  );
}

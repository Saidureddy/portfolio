interface Props {
  number: string;
  label: string;
}

export default function SectionEyebrow({ number, label }: Props) {
  return (
    <p className="mb-4 flex items-center justify-center gap-3 text-center text-sm font-semibold tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
      <span className="h-px w-8 bg-emerald-600/40 dark:bg-emerald-400/40" />
      {number} — {label.toUpperCase()}
      <span className="h-px w-8 bg-emerald-600/40 dark:bg-emerald-400/40" />
    </p>
  );
}

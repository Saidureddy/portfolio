interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-md">
      {children}
    </div>
  );
}
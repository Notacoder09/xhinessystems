interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-3 py-1">
      <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
      <span className="font-mono text-xs font-medium text-brand-accent uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
}

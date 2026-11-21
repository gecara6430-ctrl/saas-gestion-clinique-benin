export function Badge({
  className,
  variant = 'default',
  children,
}: {
  className?: string
  variant?: 'default' | 'success' | 'warning' | 'critical' | 'nsia' | 'sanlam' | 'prive' | 'mobilemoney'
  children: React.ReactNode
}) {
  const variants: Record<string, string> = {
    default: 'border-border text-slate-600 bg-slate-100',
    success: 'border-success/20 text-success bg-success/10',
    warning: 'border-warning/20 text-warning bg-warning/10',
    critical: 'border-critical/20 text-critical bg-critical/10',
    nsia: 'border-nsia/20 text-nsia bg-nsia/10',
    sanlam: 'border-sanlam/20 text-sanlam bg-sanlam/10',
    prive: 'border-prive/20 text-prive bg-prive/10',
    mobilemoney: 'border-mobilemoney/20 text-mobilemoney bg-mobilemoney/10',
  }

  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors',
        variants[variant],
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </span>
  )
}

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
    default: 'border-outline text-on-surface-variant bg-surface-container-lowest',
    success: 'border-success-border text-success bg-success-bg',
    warning: 'border-warning-border text-warning bg-warning-bg',
    critical: 'border-critical-border text-critical bg-critical-bg',
    nsia: 'border-nsia-border text-nsia bg-nsia-bg',
    sanlam: 'border-sanlam-border text-sanlam bg-sanlam-bg',
    prive: 'border-prive-border text-prive bg-prive-bg',
    mobilemoney: 'border-mobilemoney-border text-mobilemoney bg-mobilemoney-bg',
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

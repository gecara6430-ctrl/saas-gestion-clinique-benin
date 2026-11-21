export function Card({
  className,
  children,
  ...props
}: {
  className?: string
  children: React.ReactNode
  [key: string]: unknown
}) {
  return (
    <div
      className={[
        'rounded-lg border border-border bg-card text-on-surface shadow-sm',
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={['flex flex-col space-y-1.5 p-6', className].filter(Boolean).join(' ')}>{children}</div>
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={['headline-lg', className].filter(Boolean).join(' ')}>{children}</h3>
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={['p-6 pt-0', className].filter(Boolean).join(' ')}>{children}</div>
}

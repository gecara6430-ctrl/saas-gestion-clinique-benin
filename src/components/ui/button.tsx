export function Button({
  className,
  children,
  type = 'button',
  size = 'md',
  ...props
}: {
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  [key: string]: unknown
}) {
  const sizes: Record<string, string> = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 py-2 text-sm',
    lg: 'h-12 px-6 text-base',
  }

  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center rounded-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        'bg-primary text-primary-foreground hover:bg-primary-hover',
        sizes[size],
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

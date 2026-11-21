import { Button } from '@/components/ui/button'

export function PageLoading() {
  return (
    <div className="flex flex-col items-center justify-center h-96 text-slate-500">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      <p className="mt-3 text-sm">Chargement…</p>
    </div>
  )
}

export function PageEmpty({
  title = 'Aucune donnée',
  subtitle,
  action,
}: {
  title?: string
  subtitle?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center h-96 text-slate-500">
      <p className="text-sm font-medium">{title}</p>
      {subtitle && <p className="text-xs mt-1">{subtitle}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}

export function PageError({
  message = 'Une erreur est survenue',
  onRetry,
}: {
  message?: string
  onRetry?: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center h-96 text-slate-500">
      <p className="text-sm font-medium text-critical">{message}</p>
      {onRetry && (
        <Button key="retry" onClick={onRetry} className="mt-3 h-9 px-4">
          Réessayer
        </Button>
      )}
    </div>
  )
}

export function SkeletonLine({ className = '', h = '16px', w = '100%' }: { className?: string; h?: string; w?: string }) {
  return (
    <div
      className={[
        'animate-pulse rounded bg-slate-200',
        className,
      ].filter(Boolean).join(' ')}
      style={{ height: h, width: w }}
    />
  )
}

export function SkeletonTableRow() {
  return (
    <div className="border-b border-slate-100">
      <div className="px-4 py-4 flex gap-4">
        <SkeletonLine h="16px" w="40%" />
        <SkeletonLine h="16px" w="30%" />
        <SkeletonLine h="16px" w="30%" />
      </div>
    </div>
  )
}

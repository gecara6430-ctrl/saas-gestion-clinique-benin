import { Badge } from '@/components/ui/badge'

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  normal: { bg: '#ECFDF5', text: '#10B981', border: '#A7F3D0' },
  warning: { bg: '#FFFBEB', text: '#F59E0B', border: '#FDE68A' },
  critical: { bg: '#FEF2F2', text: '#EF4444', border: '#FECACA' },
}

export function VitalSignInput({
  label,
  value,
  unit,
  status = 'normal',
  onChange,
}: {
  label: string
  value: string
  unit: string
  status?: 'normal' | 'warning' | 'critical'
  onChange?: (value: string) => void
}) {
  const s = statusColors[status]

  return (
    <div className="p-4 rounded-lg border border-border bg-slate-50">
      <p className="text-xs font-semibold text-slate-500 uppercase">{label}</p>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
        <span className="text-sm text-slate-500">{unit}</span>
      </div>
      <Badge
        variant={status === 'normal' ? 'success' : status === 'warning' ? 'warning' : 'critical'}
        className="mt-2"
      >
        {status}
      </Badge>
      {onChange && (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-2 w-full rounded-sm border border-border bg-card px-2 py-1 text-xs font-mono text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="0"
        />
      )}
    </div>
  )
}

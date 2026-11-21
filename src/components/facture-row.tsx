import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const insurerStyles: Record<string, { bg: string; text: string; border: string }> = {
  NSIA: { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
  Sanlam: { bg: '#F0F9FF', text: '#0369A1', border: '#BAE6FD' },
  Privé: { bg: '#F8FAFC', text: '#475569', border: '#E2E8F0' },
  'Mobile Money': { bg: '#FFFBEB', text: '#D97706', border: '#FCD34D' },
}

const statusVariant: Record<string, 'default' | 'success' | 'warning' | 'critical'> = {
  payé: 'success',
  'en attente': 'warning',
}

export function FactureRow({
  id,
  patient,
  montant,
  mode,
  statut,
}: {
  id: string
  patient: string
  montant: string
  mode: string
  statut: string
}) {
  const ins = insurerStyles[mode] || { bg: '#F8FAFC', text: '#475569', border: '#E2E8F0' }

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="px-4 py-4 font-mono text-sm text-slate-900">{id}</td>
      <td className="px-4 py-4 text-slate-600">{patient}</td>
      <td className="px-4 py-4 font-mono text-sm text-slate-900">{montant}</td>
      <td className="px-4 py-4">
        <span
          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold border uppercase"
          style={{ backgroundColor: ins.bg, color: ins.text, borderColor: ins.border }}
        >
          {mode}
        </span>
      </td>
      <td className="px-4 py-4 text-right">
        <Badge variant={statusVariant[statut]}>
          {statut}
        </Badge>
      </td>
      <td className="px-4 py-4 text-right">
        <Button size="sm">Encaisser</Button>
      </td>
    </tr>
  )
}

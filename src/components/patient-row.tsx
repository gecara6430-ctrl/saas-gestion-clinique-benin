import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const insurerStyles: Record<string, { bg: string; text: string; border: string }> = {
  NSIA: { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
  Sanlam: { bg: '#F0F9FF', text: '#0369A1', border: '#BAE6FD' },
  Privé: { bg: '#F8FAFC', text: '#475569', border: '#E2E8F0' },
  'Mobile Money': { bg: '#FFFBEB', text: '#D97706', border: '#FCD34D' },
}

export function PatientRow({
  id,
  name,
  age,
  phone,
  lastVisit,
  nextVisit,
  insurer,
}: {
  id: string
  name: string
  age: number
  phone: string
  lastVisit: string
  nextVisit: string
  insurer: string
}) {
  const ins = insurerStyles[insurer]

  return (
    <tr className="border-b border-surface-container-low hover:bg-surface-container-low transition-colors group">
      <td className="px-4 py-4">
        <div className="font-medium text-on-surface">{name}</div>
        <div className="body-sm text-on-surface-variant">{id}</div>
      </td>
      <td className="px-4 py-4 text-on-surface-variant">{age} ans</td>
      <td className="px-4 py-4 font-mono text-sm text-on-surface-variant">{phone}</td>
      <td className="px-4 py-4 text-on-surface-variant">{lastVisit}</td>
      <td className="px-4 py-4 text-on-surface-variant">{nextVisit}</td>
      <td className="px-4 py-4">
        <span
          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold border uppercase"
          style={{ backgroundColor: ins.bg, color: ins.text, borderColor: ins.border }}
        >
          {insurer}
        </span>
      </td>
      <td className="px-4 py-4 text-right">
        <Button size="sm" className="h-8 px-3 text-xs">
          Voir dossier
        </Button>
      </td>
    </tr>
  )
}

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
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
      <td className="px-4 py-4">
        <div className="font-medium text-slate-900">{name}</div>
        <div className="text-xs text-slate-500">{id}</div>
      </td>
      <td className="px-4 py-4 text-slate-600">{age} ans</td>
      <td className="px-4 py-4 font-mono text-sm text-slate-600">{phone}</td>
      <td className="px-4 py-4 text-slate-600">{lastVisit}</td>
      <td className="px-4 py-4 text-slate-600">{nextVisit}</td>
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

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const insurerStyles: Record<string, { bg: string; text: string; border: string }> = {
  NSIA: { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
  Sanlam: { bg: '#F0F9FF', text: '#0369A1', border: '#BAE6FD' },
  Privé: { bg: '#F8FAFC', text: '#475569', border: '#E2E8F0' },
  'Mobile Money': { bg: '#FFFBEB', text: '#D97706', border: '#FCD34D' },
}

export function PatientIdentityCard({
  name,
  id,
  age,
  gender,
  phone,
  insurer,
  doctor,
  lastVisit,
  nextVisit,
}: {
  name: string
  id: string
  age: number
  gender: 'M' | 'F'
  phone: string
  insurer: string
  doctor: string
  lastVisit: string
  nextVisit: string
}) {
  const ins = insurerStyles[insurer]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dossier patient</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Nom</p>
            <p className="text-lg font-medium text-slate-900">{name}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Identifiant</p>
            <p className="text-lg font-medium text-slate-900">{id}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Âge / Genre</p>
            <p className="text-lg font-medium text-slate-900">
              {age} ans • {gender === 'M' ? 'H' : 'F'}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Prise en charge</p>
            <span
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold border uppercase"
              style={{ backgroundColor: ins.bg, color: ins.text, borderColor: ins.border }}
            >
              {insurer}
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Médecin traitant</p>
            <p className="text-lg font-medium text-slate-900">{doctor}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Dernière visite</p>
            <p className="text-lg font-medium text-slate-900">{lastVisit}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

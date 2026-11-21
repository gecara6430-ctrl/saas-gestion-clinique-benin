import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BordereauRow } from '@/components/bordereau-row'

const bordereaux = [
  { id: 'B-2026-011', patient: 'Mireille Dossou', assureur: 'NSIA', montant: '25 000 FCFA', statut: 'accepté', date: '14/11/2026' },
  { id: 'B-2026-012', patient: 'Jean-Baptiste Houngbédji', assureur: 'Sanlam', montant: '45 000 FCFA', statut: 'en attente', date: '14/11/2026' },
  { id: 'B-2026-013', patient: 'Fatoumata Traoré', assureur: 'Privé', montant: '12 000 FCFA', statut: 'accepté', date: '13/11/2026' },
  { id: 'B-2026-014', patient: 'Sanni Arouna', assureur: 'NSIA', montant: '85 000 FCFA', statut: 'refusé', date: '12/11/2026' },
  { id: 'B-2026-015', patient: 'Kémi Adebayo', assureur: 'Mobile Money', montant: '18 000 FCFA', statut: 'accepté', date: '11/11/2026' },
]

export default function AssurancesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Assurances & Tiers-payant</h1>
          <p className="text-slate-500 text-sm">Bordereaux, tiers-payant et suivi des assureurs régionaux</p>
        </div>
        <Button>Nouveau bordereau</Button>
      </div>

      {/* KPIs assurances */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICardStub title="Bordereaux en attente" value="1" subtext="En attente de réponse" trend="+0" trendType="neutral" />
        <KPICardStub title="Taux d'acceptation" value="87%" subtext="Sur 30 derniers jours" trend="+3.2%" trendType="positive" />
        <KPICardStub title="Montant à recouvrer" value="FCFA 45 000" subtext="Bordereaux impayés" trend="+12%" trendType="negative" />
        <KPICardStub title="Délai moyen" value="48h" subtext="Traitement assureur" trend="-6h" trendType="positive" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bordereaux de tiers-payant</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-slate-50">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Bordereau</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Patient</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Assureur</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Montant</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Date</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Statut</th>
                </tr>
              </thead>
              <tbody>
                {bordereaux.map((b) => (
                  <BordereauRow key={b.id} {...b} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>NSIA Assurances</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Bordereaux envoyés</span>
                <span className="font-mono text-slate-900">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Acceptés</span>
                <span className="font-mono text-slate-900">10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">En attente</span>
                <span className="font-mono text-slate-900">1</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Refusés</span>
                <span className="font-mono text-slate-900">1</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sanlam</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Bordereaux envoyés</span>
                <span className="font-mono text-slate-900">8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Acceptés</span>
                <span className="font-mono text-slate-900">7</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">En attente</span>
                <span className="font-mono text-slate-900">1</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Refusés</span>
                <span className="font-mono text-slate-900">0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Stub KPI card inline to avoid circular import complexity
function KPICardStub({ title, value, subtext, trend, trendType }: { title: string; value: string; subtext?: string; trend?: string; trendType: 'positive' | 'negative' | 'neutral' }) {
  const trendColors: Record<string, string> = {
    positive: 'text-success',
    negative: 'text-critical',
    neutral: 'text-slate-500',
  }
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-semibold text-slate-900 mt-1">{value}</p>
          {subtext && <p className="text-sm text-slate-400 mt-0.5">{subtext}</p>}
        </div>
        {trend && <Badge variant="default" className={`ml-auto mt-1 ${trendColors[trendType]}`}>{trend}</Badge>}
      </div>
    </Card>
  )
}

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
          <h1 className="headline-lg text-on-surface">Assurances & Tiers-payant</h1>
          <p className="body-sm text-on-surface-variant">Bordereaux, tiers-payant et suivi des assureurs régionaux</p>
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
                <tr className="border-b border-border bg-surface-container-low">
                  <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Bordereau</th>
                  <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Patient</th>
                  <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Assureur</th>
                  <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Montant</th>
                  <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Date</th>
                  <th className="px-4 py-3 label-sm text-on-surface-variant uppercase text-right">Statut</th>
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
              <div className="flex justify-between body-sm">
                <span className="text-on-surface-variant">Bordereaux envoyés</span>
                <span className="font-mono text-on-surface">12</span>
              </div>
              <div className="flex justify-between body-sm">
                <span className="text-on-surface-variant">Acceptés</span>
                <span className="font-mono text-on-surface">10</span>
              </div>
              <div className="flex justify-between body-sm">
                <span className="text-on-surface-variant">En attente</span>
                <span className="font-mono text-on-surface">1</span>
              </div>
              <div className="flex justify-between body-sm">
                <span className="text-on-surface-variant">Refusés</span>
                <span className="font-mono text-on-surface">1</span>
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
              <div className="flex justify-between body-sm">
                <span className="text-on-surface-variant">Bordereaux envoyés</span>
                <span className="font-mono text-on-surface">8</span>
              </div>
              <div className="flex justify-between body-sm">
                <span className="text-on-surface-variant">Acceptés</span>
                <span className="font-mono text-on-surface">7</span>
              </div>
              <div className="flex justify-between body-sm">
                <span className="text-on-surface-variant">En attente</span>
                <span className="font-mono text-on-surface">1</span>
              </div>
              <div className="flex justify-between body-sm">
                <span className="text-on-surface-variant">Refusés</span>
                <span className="font-mono text-on-surface">0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function KPICardStub({ title, value, subtext, trend, trendType }: { title: string; value: string; subtext?: string; trend?: string; trendType: 'positive' | 'negative' | 'neutral' }) {
  const trendColors: Record<string, string> = {
    positive: 'text-success',
    negative: 'text-critical',
    neutral: 'text-on-surface-variant',
  }
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="label-md text-on-surface-variant uppercase tracking-wider">{title}</p>
          <p className="headline-lg text-on-surface mt-1">{value}</p>
          {subtext && <p className="body-sm text-on-surface-variant mt-0.5">{subtext}</p>}
        </div>
        {trend && <Badge variant="default" className={`ml-auto mt-1 ${trendColors[trendType]}`}>{trend}</Badge>}
      </div>
    </Card>
  )
}

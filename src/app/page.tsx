import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { KPICard } from '@/components/kpi-card'
import { Sidebar, Header } from '@/components/layout'

const kpis: Array<{
  title: string
  value: string | number
  subtext?: string
  trend?: string
  trendType: 'positive' | 'negative' | 'neutral'
}> = [
  { title: 'Consultations en attente', value: '14', subtext: '+3 vs hier', trend: '+12.4%', trendType: 'positive' },
  { title: 'Patients aujourd\'hui', value: '32', subtext: '21 admis, 11 en attente', trend: '-2', trendType: 'negative' },
  { title: 'Encaissements du jour', value: 'FCFA 1 245 000', subtext: 'Espèces • Mobile Money', trend: '+8.1%', trendType: 'positive' },
  { title: 'Examens en attente', value: '6', subtext: 'Laboratoire • Imagerie', trend: '+1', trendType: 'neutral' },
]

const patients = [
  { id: 'P-001', name: 'Mireille Dossou', age: 34, gender: 'F', triage: 'rouge', time: '08:12', insurer: 'NSIA', doctor: 'Dr. A. Koffi', status: 'En attente' },
  { id: 'P-002', name: 'Jean-Baptiste Houngbédji', age: 58, gender: 'M', triage: 'jaune', time: '08:35', insurer: 'Sanlam', doctor: 'Dr. E. Mensah', status: 'En attente' },
  { id: 'P-003', name: 'Fatoumata Traoré', age: 27, gender: 'F', triage: 'vert', time: '08:50', insurer: 'Privé', doctor: 'Dr. A. Koffi', status: 'En cours' },
  { id: 'P-004', name: 'Kémi Adebayo', age: 45, gender: 'F', triage: 'vert', time: '09:05', insurer: 'Mobile Money', doctor: 'Dr. E. Mensah', status: 'En attente' },
  { id: 'P-005', name: 'Sanni Arouna', age: 61, gender: 'M', triage: 'rouge', time: '09:20', insurer: 'NSIA', doctor: 'Dr. A. Koffi', status: 'En attente' },
]

const alerts = [
  { type: 'critical', label: 'Triage niveau 1 — Sanni Arouna (P-005)', detail: 'Douleur thoracique, priorité immédiate' },
  { type: 'warning', label: 'Autorisation assurance — Jean-Baptiste Houngbédji (P-002)', detail: 'Sanlam — accord préalable requis' },
  { type: 'success', label: 'Sortie validée — Patient P-008', detail: 'Facture acquittée, patient libéré' },
]

const activities = [
  { time: '08:15', patient: 'Mireille Dossou', action: 'Admission aux urgences', status: 'terminé' },
  { time: '08:42', patient: 'Jean-Baptiste Houngbédji', action: 'Facture émise', status: 'en cours' },
  { time: '09:01', patient: 'Fatoumata Traoré', action: 'Résultat laboratoire', status: 'en attente' },
]

const triageStyles: Record<string, { bg: string; text: string; border: string; label: string }> = {
  vert: { bg: '#ECFDF5', text: '#10B981', border: '#A7F3D0', label: 'Standard' },
  jaune: { bg: '#FFFBEB', text: '#F59E0B', border: '#FDE68A', label: 'Modéré' },
  rouge: { bg: '#FEF2F2', text: '#EF4444', border: '#FECACA', label: 'Urgence' },
}

const insurerStyles: Record<string, { bg: string; text: string; border: string }> = {
  NSIA: { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
  Sanlam: { bg: '#F0F9FF', text: '#0369A1', border: '#BAE6FD' },
  Privé: { bg: '#F8FAFC', text: '#475569', border: '#E2E8F0' },
  'Mobile Money': { bg: '#FFFBEB', text: '#D97706', border: '#FCD34D' },
}

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6 lg:p-gutter">
          {/* Section 02 — KPI Métriques */}
          <Card className="mb-6">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {kpis.map((kpi, i) => (
                  <KPICard key={i} {...kpi} />
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* Section 03 — File d'attente */}
              <Card>
                <CardHeader>
                  <CardTitle>File d'attente — Consultations du jour</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border bg-surface-container-low">
                          <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Patient</th>
                          <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Triage</th>
                          <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Prise en charge</th>
                          <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Médecin</th>
                          <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Attente</th>
                          <th className="px-4 py-3 label-sm text-on-surface-variant uppercase text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patients.map((p) => {
                          const tc = triageStyles[p.triage]
                          const ins = insurerStyles[p.insurer]
                          return (
                            <tr key={p.id} className="border-b border-surface-container-low hover:bg-surface-container-low transition-colors group">
                              <td className="px-4 py-4">
                                <div className="font-medium text-on-surface">{p.name}</div>
                                <div className="body-sm text-on-surface-variant">{p.id} • {p.age} ans • {p.gender === 'M' ? 'H' : 'F'}</div>
                              </td>
                              <td className="px-4 py-4">
                                <span
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold border uppercase"
                                  style={{ backgroundColor: tc.bg, color: tc.text, borderColor: tc.border }}
                                >
                                  {tc.label}
                                </span>
                              </td>
                              <td className="px-4 py-4">
                                <span
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold border uppercase"
                                  style={{ backgroundColor: ins.bg, color: ins.text, borderColor: ins.border }}
                                >
                                  {ins.text === '#1E40AF' ? 'NSIA' : ins.text === '#0369A1' ? 'Sanlam' : ins.text === '#475569' ? 'Privé' : 'Mobile Money'}
                                </span>
                              </td>
                              <td className="px-4 py-4 text-on-surface-variant">{p.doctor}</td>
                              <td className="px-4 py-4 text-on-surface-variant font-mono text-xs">{p.time}</td>
                              <td className="px-4 py-4 text-right">
                                <Button size="sm">Admettre</Button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Section 04 — Alertes cliniques */}
              <Card>
                <CardHeader>
                  <CardTitle>Alertes cliniques</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  {alerts.map((a, i) => {
                    const isCritical = a.type === 'critical'
                    const isWarning = a.type === 'warning'
                    const isSuccess = a.type === 'success'
                    return (
                      <div
                        key={i}
                        className={`p-3 rounded-sm border-l-3 ${isCritical ? 'border-critical bg-critical-bg' : isWarning ? 'border-warning bg-warning-bg' : 'border-success bg-success-bg'}`}
                      >
                        <p className="text-sm font-medium text-on-surface">{a.label}</p>
                        <p className="body-sm text-on-surface-variant mt-0.5">{a.detail}</p>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Section 05 — Activité récente */}
              <Card>
                <CardHeader>
                  <CardTitle>Activité récente</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {activities.map((a, i) => (
                      <div key={i} className="border-b border-surface-container-low last:border-0">
                        <div className="flex items-start gap-3 p-4">
                          <div className="body-sm font-mono text-on-surface-variant w-16">{a.time}</div>
                          <div className="flex-1">
                            <div className="body-md text-on-surface">{a.patient}</div>
                            <div className="body-sm text-on-surface-variant">{a.action}</div>
                          </div>
                          <Badge
                            variant={a.status === 'terminé' ? 'success' : a.status === 'en cours' ? 'warning' : 'default'}
                            className="mt-0.5"
                          >
                            {a.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

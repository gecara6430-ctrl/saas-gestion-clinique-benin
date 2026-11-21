import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { KPICard } from '@/components/kpi-card'

export default function DashboardPage() {
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

  const triageColors: Record<string, { bg: string; text: string; border: string }> = {
    vert: { bg: '#ECFDF5', text: '#10B981', border: '#A7F3D0' },
    jaune: { bg: '#FFFBEB', text: '#F59E0B', border: '#FDE68A' },
    rouge: { bg: '#FEF2F2', text: '#EF4444', border: '#FECACA' },
  }

  const insurerStyles: Record<string, { bg: string; text: string; border: string }> = {
    NSIA: { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
    Sanlam: { bg: '#F0F9FF', text: '#0369A1', border: '#BAE6FD' },
    Privé: { bg: '#F8FAFC', text: '#475569', border: '#E2E8F0' },
    'Mobile Money': { bg: '#FFFBEB', text: '#D97706', border: '#FCD34D' },
  }

  return (
    <div className="space-y-6">
      {/* Section 02 — KPI Métriques */}
      <Card>
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
                    <tr className="border-b border-border bg-slate-50">
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Patient</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Triage</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Prise en charge</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Médecin</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Attente</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((p) => {
                      const tc = triageColors[p.triage]
                      const ins = insurerStyles[p.insurer]
                      return (
                        <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                          <td className="px-4 py-4">
                            <div className="font-medium text-slate-900">{p.name}</div>
                            <div className="text-xs text-slate-500">{p.id} • {p.age} ans • {p.gender === 'M' ? 'H' : 'F'}</div>
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold border"
                              style={{ backgroundColor: tc.bg, color: tc.text, borderColor: tc.border }}
                            >
                              {p.triage.charAt(0).toUpperCase() + p.triage.slice(1)}
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
                          <td className="px-4 py-4 text-slate-600">{p.doctor}</td>
                          <td className="px-4 py-4 text-slate-600 font-mono text-xs">{p.time}</td>
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
                    className={`p-3 rounded-sm border-l-3 ${isCritical ? 'border-critical bg-critical/5' : isWarning ? 'border-warning bg-warning/5' : 'border-success bg-success/5'}`}
                  >
                    <p className="text-sm font-semibold text-slate-900">{a.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{a.detail}</p>
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
                  <div key={i} className="border-b border-slate-50 last:border-0">
                    <div className="flex items-start gap-3 p-4">
                      <div className="text-xs font-mono text-slate-400 w-16">{a.time}</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-900">{a.patient}</div>
                        <div className="text-xs text-slate-500">{a.action}</div>
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
    </div>
  )
}

'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { KPICard } from '@/components/kpi-card'
import { FactureRow } from '@/components/facture-row'
import { useState } from 'react'

const factures = [
  { id: 'F-2026-001', patient: 'Mireille Dossou', montant: '25 000 FCFA', statut: 'payé', mode: 'Espèces' },
  { id: 'F-2026-002', patient: 'Jean-Baptiste Houngbédji', montant: '45 000 FCFA', statut: 'en attente', mode: 'Mobile Money' },
  { id: 'F-2026-003', patient: 'Fatoumata Traoré', montant: '12 000 FCFA', statut: 'payé', mode: 'Mobile Money' },
  { id: 'F-2026-004', patient: 'Sanni Arouna', montant: '85 000 FCFA', statut: 'en attente', mode: 'Assurance' },
]

export default function FacturationPage() {
  const [amount, setAmount] = useState('')
  const [mode, setMode] = useState('Espèces')
  const [processing, setProcessing] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [confirmedAmount, setConfirmedAmount] = useState('')

  const handleEncaisser = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!amount || parseFloat(amount) <= 0) return
    setProcessing(true)
    await new Promise((r) => setTimeout(r, 600))
    setProcessing(false)
    setConfirmed(true)
    setConfirmedAmount(amount)
    setAmount('')
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Caisse & Facturation</h1>
          <p className="text-slate-500 text-sm">Encaissements, factures et suivi des paiements — Jean-Baptiste Houngbédji</p>
        </div>
        <Button>Nouvelle facture</Button>
      </div>

      {confirmed && (
        <div className="rounded-lg border border-success/20 bg-success/5 p-4">
          <p className="text-sm text-success">
            Encaissement de <span className="font-mono">{confirmedAmount} FCFA</span> enregistré en mode <span className="font-medium">{mode}</span>.
          </p>
        </div>
      )}

      {/* KPIs financiers */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard title="Encaissements du jour" value="FCFA 1 245 000" subtext="Espèces • Mobile Money" trend="+8.1%" trendType="positive" />
        <KPICard title="Factures en attente" value="2" subtext="À encaisser aujourd'hui" trend="+1" trendType="neutral" />
        <KPICard title="Total encaissé mois" value="FCFA 12 450 000" subtext="Objectif: 15M" trend="-5.2%" trendType="negative" />
        <KPICard title="Taux de recouvrement" value="94%" subtext="Factures payées / émises" trend="+2.1%" trendType="positive" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Factures du jour</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-slate-50">
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Facture</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Patient</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Montant</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Mode</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {factures.map((f) => (
                      <FactureRow key={f.id} {...f} />
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Encaissement rapide</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEncaisser} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Montant (FCFA)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-lg border border-border bg-card px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Mode de paiement</label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full rounded-lg border border-border bg-card px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option>Espèces</option>
                    <option>Mobile Money (MTN MoMo)</option>
                    <option>Mobile Money (Moov Money)</option>
                    <option>Assurance (NSIA)</option>
                    <option>Assurance (Sanlam)</option>
                  </select>
                </div>
                <Button type="submit" className="w-full" disabled={processing || !amount || parseFloat(amount) <= 0}>
                  {processing ? 'Encaissement…' : 'Encaisser'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Répartition du jour</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Espèces</span>
                  <span className="font-mono text-slate-900">FCFA 450 000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Mobile Money</span>
                  <span className="font-mono text-slate-900">FCFA 320 000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Assurances</span>
                  <span className="font-mono text-slate-900">FCFA 475 000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

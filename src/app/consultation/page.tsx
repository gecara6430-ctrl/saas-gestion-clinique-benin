'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PatientIdentityCard } from '@/components/patient-identity-card'
import { VitalSignInput } from '@/components/vital-sign-input'
import { useState } from 'react'

type VitalSign = { label: string; value: string; unit: string; status: 'normal' | 'warning' | 'critical' }

const initialVitals: VitalSign[] = [
  { label: 'Tension artérielle', value: '128/84', unit: 'mmHg', status: 'normal' },
  { label: 'Fréquence cardiaque', value: '78', unit: 'bpm', status: 'normal' },
  { label: 'Température', value: '37.2', unit: '°C', status: 'normal' },
  { label: 'Saturation O₂', value: '98', unit: '%', status: 'normal' },
]

export default function ConsultationPage() {
  const [vitals, setVitals] = useState<VitalSign[]>(initialVitals)
  const [motif, setMotif] = useState('')
  const [observations, setObservations] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleVitalChange = (index: number, value: string) => {
    const next = [...vitals]
    next[index].value = value
    const label = next[index].label
    const num = parseFloat(value.replace(/[^\d.,]/g, '').replace(',', '.'))
    if (label === 'Température' && num > 38) next[index].status = 'critical'
    else if (label === 'Température' && num > 37.5) next[index].status = 'warning'
    else if (label === 'Saturation O₂' && num < 95) next[index].status = 'critical'
    else if (label === 'Fréquence cardiaque' && (num < 60 || num > 100)) next[index].status = 'warning'
    else next[index].status = 'normal'
    setVitals(next)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    await new Promise((r) => setTimeout(r, 800))
    setSaving(false)
    setSaved(true)
  }

  const allVitalsFilled = vitals.every((v) => v.value.trim().length > 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="headline-lg text-on-surface">Consultation médicale</h1>
          <p className="body-sm text-on-surface-variant">Saisie des constantes et du compte-rendu — Mireille Dossou (P-001)</p>
        </div>
        <Button onClick={handleSubmit} disabled={saving || !allVitalsFilled} className="w-full md:w-auto">
          {saving ? 'Enregistrement…' : 'Enregistrer la consultation'}
        </Button>
      </div>

      {saved && (
        <div className="rounded-lg border border-success-border bg-success-bg p-4">
          <p className="body-sm text-success">Consultation enregistrée avec succès pour Mireille Dossou (P-001).</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Section 01 suite — Fiche patient */}
          <PatientIdentityCard
            name="Mireille Dossou"
            id="P-001"
            age={34}
            gender="F"
            phone="+229 90 12 34 56"
            insurer="NSIA"
            doctor="Dr. A. Koffi"
            lastVisit="14/11/2026"
            nextVisit="21/11/2026"
          />

          {/* Constantes vitales */}
          <Card>
            <CardHeader>
              <CardTitle>Constantes vitales</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vitals.map((v, i) => (
                  <VitalSignInput
                    key={i}
                    label={v.label}
                    value={v.value}
                    unit={v.unit}
                    status={v.status}
                    onChange={(val) => handleVitalChange(i, val)}
                  />
                ))}
              </div>
              <div className="mt-6">
                <label className="label-md text-on-surface-variant uppercase block mb-2">Motif de consultation</label>
                <textarea
                  value={motif}
                  onChange={(e) => setMotif(e.target.value)}
                  className="w-full h-24 rounded-sm border border-outline bg-card p-3 body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Décrire le motif de consultation..."
                />
              </div>
              <div className="mt-6">
                <label className="label-md text-on-surface-variant uppercase block mb-2">Observations du médecin</label>
                <textarea
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  className="w-full h-32 rounded-sm border border-outline bg-card p-3 body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Compte-rendu médical, diagnostic, prescription..."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Récapitulatif */}
          <Card>
            <CardHeader>
              <CardTitle>Récapitulatif</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="body-sm text-on-surface-variant">Statut</span>
                  <Badge variant={saved ? 'success' : 'warning'}>
                    {saved ? 'Validée' : 'En attente'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="body-sm text-on-surface-variant">Niveau de triage</span>
                  <Badge variant="default">Standard</Badge>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="title-sm text-on-surface">Prochaine étape</span>
                  <span className="body-sm text-on-surface-variant">{saved ? 'Consultation terminée' : 'Saisie des constantes'}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <Button className="w-full" onClick={handleSubmit} disabled={saving || !allVitalsFilled}>
              {saving ? 'Enregistrement…' : 'Valider les constantes'}
            </Button>
            <Button
              className="w-full"
              style={{ background: 'transparent', border: '1px solid #E2E8F0', color: '#334155' }}
              onClick={() => {
                setMotif('')
                setObservations('')
                setVitals(initialVitals)
                setSaved(false)
              }}
            >
              Annuler
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

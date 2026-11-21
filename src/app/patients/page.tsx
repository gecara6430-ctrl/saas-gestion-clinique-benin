'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PatientRow } from '@/components/patient-row'
import { useState, useMemo } from 'react'

const allPatients = [
  { id: 'P-001', name: 'Mireille Dossou', age: 34, phone: '+229 90 12 34 56', lastVisit: '14/11/2026', nextVisit: '21/11/2026', insurer: 'NSIA' },
  { id: 'P-002', name: 'Jean-Baptiste Houngbédji', age: 58, phone: '+229 91 23 45 67', lastVisit: '14/11/2026', nextVisit: '—', insurer: 'Sanlam' },
  { id: 'P-003', name: 'Fatoumata Traoré', age: 27, phone: '+229 92 34 56 78', lastVisit: '13/11/2026', nextVisit: '20/11/2026', insurer: 'Privé' },
  { id: 'P-004', name: 'Kémi Adebayo', age: 45, phone: '+229 93 45 67 89', lastVisit: '11/11/2026', nextVisit: '18/11/2026', insurer: 'Mobile Money' },
  { id: 'P-005', name: 'Sanni Arouna', age: 61, phone: '+229 94 56 78 90', lastVisit: '10/11/2026', nextVisit: '17/11/2026', insurer: 'NSIA' },
]

export default function PatientsPage() {
  const [search, setSearch] = useState('')
  const [filterInsurer, setFilterInsurer] = useState('Tous')

  const filtered = useMemo(() => {
    return allPatients.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.id.toLowerCase().includes(search.toLowerCase())
      const matchInsurer = filterInsurer === 'Tous' || p.insurer === filterInsurer
      return matchSearch && matchInsurer
    })
  }, [search, filterInsurer])

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="headline-lg text-on-surface">Répertoire des patients</h1>
          <p className="body-sm text-on-surface-variant">Gestion du dossier patient et suivi des rendez-vous</p>
        </div>
        <Button>Nouveau patient</Button>
      </div>

      {/* Recherche et filtres */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="label-md text-on-surface-variant uppercase block mb-1">Rechercher un patient</label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-sm border border-outline bg-card p-3 body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nom, prénom ou identifiant..."
              />
            </div>
            <select
              value={filterInsurer}
              onChange={(e) => setFilterInsurer(e.target.value)}
              className="w-full md:w-48 rounded-sm border border-outline bg-card p-3 body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option>Tous les assureurs</option>
              <option>NSIA</option>
              <option>Sanlam</option>
              <option>Privé</option>
              <option>Mobile Money</option>
            </select>
          </div>
          <p className="body-sm text-on-surface-variant mt-3">
            {filtered.length} patient{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''} sur {allPatients.length}
          </p>
        </CardContent>
      </Card>

      {/* Liste des patients */}
      <Card>
        <CardHeader>
          <CardTitle>Patients enregistrés ({filtered.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {filtered.length === 0 ? (
            <div className="p-8 text-center">
              <p className="body-sm text-on-surface-variant">Aucun patient ne correspond à vos critères de recherche.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-surface-container-low">
                    <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Identité</th>
                    <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Âge</th>
                    <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Téléphone</th>
                    <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Dernière visite</th>
                    <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Prochain RDV</th>
                    <th className="px-4 py-3 label-sm text-on-surface-variant uppercase">Assureur</th>
                    <th className="px-4 py-3 label-sm text-on-surface-variant uppercase text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <PatientRow key={p.id} {...p} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

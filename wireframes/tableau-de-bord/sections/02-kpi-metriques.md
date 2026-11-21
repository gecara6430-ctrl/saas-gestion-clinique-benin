# Section — 02 · KPI Métriques

**Rôle dans l'écran** : Quatre cartes indicateurs en haut de page pour une lecture immédiate de l'activité du jour.

**Éléments** :
| id | élément | type |
|----|---------|------|
| kpi-consultations | "Consultations en attente" + chiffre + tendance | carte KPI |
| kpi-patients | "Patients aujourd'hui" + chiffre + tendance | carte KPI |
| kpi-encaissements | "Encaissements du jour" + montant FCFA + répartition | carte KPI |
| kpi-lab | "Examens en attente" + chiffre + tendance | carte KPI |

**Annotations** :
- `kpi-consultations` — Intent : prioriser le triage. Behavior : clic ouvre la file d'attente. Constraints : chiffre en `headline-lg`, tendance en `label-sm` avec couleur sémantique.
- `kpi-encaissements` — Intent : suivi financier rapide. Behavior : clic ouvre le module Caisse & Facturation. Constraints : montant en `data-mono`, répartition cash vs mobile money en micro-texte.
- Toutes cartes — Intent : scan visuel rapide. Behavior : effet de survol léger. Constraints : surface blanche, bordure 1px `#E2E8F0`, radius 1rem.

**États** :
- [x] Default — 4 cartes alignées horizontalement
- [x] Loading — placeholders gris animés sur chaque valeur
- [x] Empty — affiche "0" avec tendance neutre
- [x] Error — affiche "—" et une alerte discrète
- [x] Permission — cartes masquées selon les droits (ex: encaissements masqué si pas de rôle comptable)
- [x] Responsive — empilement vertical < 768px, 2 colonnes 768-1023px

**Composants** :
- `reuse` : `Card`, `KPICard`, `Badge` (tendance)
- `new-component` : `KPICard` (wrapper spécialisé clinique)

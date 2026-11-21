# Section — 05 · Activité récente

**Rôle dans l'écran** : Flux chronologique des dernières actions (admissions, encaissements, résultats de laboratoire).

**Éléments** :
| id | élément | type |
|----|---------|------|
| activity-header | Titre "Activité récente" | texte |
| activity-item-* | Ligne d'activité (heure, patient, action, statut) | ligne de liste |
| activity-time | Horodatage en `data-mono` | texte |
| activity-status | Badge de statut (terminé/en cours/en attente) | badge |

**Annotations** :
- `activity-item-*` — Intent : suivi de l'activité du service. Behavior : clic ouvre le dossier ou la facture concernée. Constraints : heure en `data-mono` (alignement tabulaire), nom patient en `body-md`, action en `label-md`.
- `activity-status` — Intent : état de l'action. Behavior : couleur selon le statut. Constraints : badge petit, `label-sm`.

**États** :
- [x] Default — liste des activités récentes
- [x] Loading — skeleton sur chaque item
- [x] Empty — "Aucune activité récente"
- [x] Error — message d'erreur de chargement
- [x] Permission — activités financières masquées selon le rôle
- [x] Responsive — texte tronqué avec `title` sur mobile

**Composants** :
- `reuse` : `Badge`, `Card`
- `new-component` : `ActivityItem`

# Section — 02 · Bordereaux de tiers-payant

**Rôle dans l'écran** : Liste des bordereaux envoyés aux assureurs avec patient, montant, date et statut.

**Éléments** :
| id | élément | type |
|----|---------|------|
| section-title | "Bordereaux de tiers-payant" | texte (h3) |
| table-header | En-têtes de colonnes | texte |
| table-row-* | Ligne par bordereau (ID, patient, assureur, montant, date, statut) | ligne |
| assureur-badge | Badge assureur coloré | badge |
| status-badge | Badge de statut (accepté/en attente/refusé) | badge |

**Annotations** :
- `table-row-*` — Intent : consulter un bordereau. Behavior : clic ouvre le détail du bordereau. Constraints : hauteur 60px, nom patient en `body-md`, montant en `font-mono`.
- `assureur-badge` — Intent : identifier l'assureur. Behavior : couleur selon l'assureur (NSIA bleu, Sanlam saphir, etc.). Constraints : `label-sm`, `rounded-full`, uppercase.
- `status-badge` — Intent : état du bordereau. Behavior : vert si accepté, amber si en attente, rouge si refusé. Constraints : `label-sm`.

**États** :
- [x] Default — liste des bordereaux
- [x] Loading — skeleton de lignes
- [x] Empty — "Aucun bordereau"
- [x] Error — message d'erreur
- [x] Permission — montants masqués selon le rôle
- [x] Responsive — scroll horizontal < 768px

**Composants** :
- `reuse` : `Badge`, `Card`
- `new-component` : `BordereauRow`

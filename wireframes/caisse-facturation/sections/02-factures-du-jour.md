# Section — 02 · Factures du jour

**Rôle dans l'écran** : Liste des factures émises aujourd'hui avec patient, montant, mode de paiement et statut.

**Éléments** :
| id | élément | type |
|----|---------|------|
| section-title | "Factures du jour" | texte (h3) |
| table-header | En-têtes de colonnes | texte |
| table-row-* | Ligne par facture (ID, patient, montant, mode, statut) | ligne |
| status-badge | Badge de statut (payé/en attente) | badge |

**Annotations** :
- `table-row-*` — Intent : consulter et encaisser une facture. Behavior : clic sur une ligne ouvre le détail ou marque comme payé. Constraints : hauteur 60px, nom patient en `body-md`, montant en `font-mono`.
- `status-badge` — Intent : état de paiement. Behavior : vert si payé, amber si en attente. Constraints : `label-sm`, `rounded-full`.
- Toutes — Intent : gestion de la caisse. Behavior : tri par colonnes. Constraints : scroll horizontal sur mobile.

**États** :
- [x] Default — liste des factures
- [x] Loading — skeleton de lignes
- [x] Empty — "Aucune facture aujourd'hui"
- [x] Error — message d'erreur de chargement
- [x] Permission — montants masqués selon le rôle
- [x] Responsive — colonnes empilées ou scroll < 768px

**Composants** :
- `reuse` : `Badge`, `Card`, `Button`
- `new-component` : `FactureRow`

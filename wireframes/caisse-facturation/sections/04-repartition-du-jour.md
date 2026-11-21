# Section — 04 · Répartition du jour

**Rôle dans l'écran** : Répartition visuelle des encaissements du jour par mode de paiement.

**Éléments** :
| id | élément | type |
|----|---------|------|
| section-title | "Répartition du jour" | texte (h3) |
| item-especes | Ligne Espèces avec montant | ligne |
| item-mobilemoney | Ligne Mobile Money avec montant | ligne |
| item-assurances | Ligne Assurances avec montant | ligne |

**Annotations** :
- `item-especes` — Intent : montant encaissé en espèces. Behavior : informatif. Constraints : montant en `font-mono`, aligné à droite.
- `item-mobilemoney` — Intent : montant encaissé par Mobile Money. Behavior : informatif. Constraints : même traitement.
- `item-assurances` — Intent : montant encaissé par assurances. Behavior : informatif. Constraints : même traitement.
- Toutes — Intent : ventilation du cash du jour. Behavior : clic peut filtrer le tableau par mode. Constraints : espacement régulier entre les lignes.

**États** :
- [x] Default — 3 lignes de répartition
- [x] Loading — N/A
- [x] Empty — affiche "FCFA 0" pour chaque mode
- [x] Error — N/A
- [x] Permission — N/A
- [x] Responsive — texte tronqué sur mobile

**Composants** :
- `reuse` : `Card`
- `new-component` : Aucun

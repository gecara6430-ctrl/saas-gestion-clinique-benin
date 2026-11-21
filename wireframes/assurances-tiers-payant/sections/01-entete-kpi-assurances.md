# Section — 01 · En-tête et KPIs assurances

**Rôle dans l'écran** : Indicateurs de suivi des assureurs et des bordereaux en attente.

**Éléments** :
| id | élément | type |
|----|---------|------|
| page-title | "Assurances & Tiers-payant" | texte (h1) |
| page-subtitle | Sous-titre explicatif | texte |
| kpi-bordereaux-attente | Nombre de bordereaux en attente | carte KPI |
| kpi-taux-acceptation | Pourcentage d'acceptation | carte KPI |
| kpi-montant-recouvrer | Montant total à recouvrer | carte KPI |
| kpi-delai-moyen | Délai moyen de traitement | carte KPI |

**Annotations** :
- `kpi-bordereaux-attente` — Intent : prioriser les relances. Behavior : clic filtre les bordereaux en attente. Constraints : chiffre en `headline-lg`.
- `kpi-taux-acceptation` — Intent : performance des assureurs. Behavior : couleur selon le seuil. Constraints : pourcentage.
- `kpi-montant-recouvrer` — Intent : trésorerie attendue. Behavior : montant en `data-mono`, FCFA. Constraints : couleur rouge si montant élevé.
- `kpi-delai-moyen` — Intent : réactivité des assureurs. Behavior : affichage en heures. Constraints : comparaison avec la semaine précédente.

**États** :
- [x] Default — 4 cartes alignées
- [x] Loading — placeholders
- [x] Empty — affiche "0"
- [x] Error — message d'erreur
- [x] Permission — montants masqués selon le rôle
- [x] Responsive — empilement < 768px

**Composants** :
- `reuse` : `KPICard`, `Card`
- `new-component` : Aucun

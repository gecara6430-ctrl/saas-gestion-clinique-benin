# Section — 01 · En-tête et KPIs financiers

**Rôle dans l'écran** : Indicateurs financiers clés pour une lecture immédiate de l'activité de caisse.

**Éléments** :
| id | élément | type |
|----|---------|------|
| page-title | "Caisse & Facturation" | texte (h1) |
| page-subtitle | Sous-titre explicatif | texte |
| kpi-encaissements-jour | Montant encaissé aujourd'hui | carte KPI |
| kpi-factures-attente | Nombre de factures en attente | carte KPI |
| kpi-total-mois | Total encaissé ce mois | carte KPI |
| kpi-taux-recouvrement | Pourcentage de recouvrement | carte KPI |

**Annotations** :
- `kpi-encaissements-jour` — Intent : suivi du cash du jour. Behavior : clic ouvre le détail des encaissements. Constraints : montant en `data-mono`, FCFA.
- `kpi-factures-attente` — Intent : prioriser les encaissements à faire. Behavior : clic filtre le tableau sur "en attente". Constraints : chiffre en `headline-lg`.
- `kpi-total-mois` — Intent : suivi mensuel vs objectif. Behavior : affiche l'objectif en micro-texte. Constraints : comparaison avec objectif.
- `kpi-taux-recouvrement` — Intent : performance de recouvrement. Behavior : couleur selon le seuil (vert si >90%). Constraints : pourcentage avec signe %.

**États** :
- [x] Default — 4 cartes alignées
- [x] Loading — placeholders sur les montants
- [x] Empty — affiche "0" ou "FCFA 0"
- [x] Error — message d'erreur de chargement des KPIs
- [x] Permission — KPIs financiers masqués selon le rôle
- [x] Responsive — empilement < 768px, 2-col 768-1023px

**Composants** :
- `reuse` : `KPICard`, `Card`
- `new-component` : Aucun

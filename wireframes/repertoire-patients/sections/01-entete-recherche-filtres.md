# Section — 01 · En-tête, recherche et filtres

**Rôle dans l'écran** : Barre de recherche et filtre par assureur pour trouver rapidement un patient.

**Éléments** :
| id | élément | type |
|----|---------|------|
| page-title | "Répertoire des patients" | texte (h1) |
| page-subtitle | Sous-titre explicatif | texte |
| search-label | "Rechercher un patient" | label |
| search-input | Champ de texte | input |
| filter-label | Filtre assureur | label |
| filter-select | Sélecteur d'assureur | select |
| btn-nouveau | "Nouveau patient" | bouton primaire |

**Annotations** :
- `search-input` — Intent : rechercher par nom, prénom ou identifiant. Behavior : filtrage en temps réel à la frappe. Constraints : placeholder explicite, focus automatique.
- `filter-select` — Intent : filtrer par assureur. Behavior : options "Tous", "NSIA", "Sanlam", "Privé", "Mobile Money". Constraints : sélection requise pour appliquer le filtre.
- `btn-nouveau` — Intent : créer un nouveau dossier patient. Behavior : ouvre le formulaire de création. Constraints : bouton primaire teal, toujours visible.

**États** :
- [x] Default — barre de recherche et filtres affichés
- [x] Loading — N/A
- [x] Empty — N/A
- [x] Error — N/A
- [x] Permission — bouton Nouveau masqué selon le rôle
- [x] Responsive — champs empilés sur mobile, côte à côte sur desktop

**Composants** :
- `reuse` : `Button`, `Card`
- `new-component` : Aucun

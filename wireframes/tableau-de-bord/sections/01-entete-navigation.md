# Section — 01 · En-tête et navigation globale

**Rôle dans l'écran** : Barre supérieure avec titre, profil utilisateur et actions rapides ; sidebar de navigation principale vers les 5 modules de la clinique.

**Éléments** :
| id | élément | type |
|----|---------|------|
| nav-logo | Logo "Sainte-Marie" | texte/lien |
| nav-title | "Tableau de bord" | texte (h2) |
| user-profile | Nom + rôle + avatar | texte + image |
| sidebar-link-* | 5 liens de module (Dashboard, Consultation, Facturation, Assurances, Patients) | lien |
| menu-toggle | Bouton hamburger (mobile) | bouton |

**Annotations** :
- `nav-logo` — Intent : identifier la clinique immédiatement. Behavior : clic renvoie à l'accueil. Constraints : toujours visible, ne jamais masquer.
- `sidebar-link-*` — Intent : navigation entre modules. Behavior : surligner l'item actif. Constraints : libellés en français, majuscule de début de phrase.
- `user-profile` — Intent : identifier le praticien connecté. Behavior : clic ouvre le menu utilisateur. Constraints : nom complet + rôle, avatar cercle 32px.

**États** :
- [x] Default — affiché en permanence
- [x] Loading — skeleton sur les libellés de lien
- [x] Empty — N/A (toujours présent)
- [x] Error — N/A
- [x] Permission — items masqués selon le rôle (ex: facturation masqué pour un infirmier)
- [x] Responsive — sidebar se replie en drawer/bottom sheet < 768px

**Composants** :
- `reuse` : `Badge` (état de connexion)
- `new-component` : `Sidebar`, `Header`, `UserAvatar`

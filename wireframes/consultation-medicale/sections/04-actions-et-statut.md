# Section — 04 · Actions et statut

**Rôle dans l'écran** : Boutons d'action et indicateur de statut de la consultation en cours.

**Éléments** :
| id | élément | type |
|----|---------|------|
| btn-valider | "Valider la consultation" | bouton primaire |
| btn-annuler | "Annuler" | bouton secondaire |
| status-pill | Statut (En attente / Validée / Archivée) | badge |
| progress-indicator | Étapes de la consultation | texte petit |

**Annotations** :
- `btn-valider` — Intent : enregistrer la consultation. Behavior : sauvegarde constantes + observations, passe le statut à "Validée", revient au tableau de bord. Constraints : bouton primaire teal, désactivé si constantes manquantes.
- `btn-annuler` — Intent : abandonner la saisie. Behavior : demande confirmation si des données ont été saisies. Constraints : bouton secondaire outline.
- `status-pill` — Intent : état actuel de la consultation. Behavior : couleur selon statut (vert=validé, amber=en attente). Constraints : `rounded-full`, `label-sm`.
- `progress-indicator` — Intent : situer dans le flux. Behavior : "Étape 3/4 — Saisie terminée". Constraints : texte `data-mono` xs.

**États** :
- [x] Default — boutons actifs, statut affiché
- [x] Loading — bouton Valider en état chargement
- [x] Empty — N/A
- [x] Error — message si échec d'enregistrement
- [x] Permission — bouton Valider masqué si pas de rôle médical
- [x] Responsive — boutons empilés verticalement < 640px

**Composants** :
- `reuse` : `Button`, `Badge`
- `new-component` : `ConsultationActions`

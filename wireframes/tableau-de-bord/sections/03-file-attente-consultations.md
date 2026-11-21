# Section — 03 · File d'attente — Consultations du jour

**Rôle dans l'écran** : Liste des patients en attente avec niveau de triage, assureur, médecin assigné et temps d'attente.

**Éléments** :
| id | élément | type |
|----|---------|------|
| queue-header | En-tête de tableau (colonnes) | texte |
| queue-row-* | Ligne par patient (identité, triage, assureur, médecin, attente, actions) | ligne de tableau |
| triage-dot | Point coloré (Vert/Jaune/Rouge) | indicateur |
| insurer-chip | Badge assureur (NSIA/Sanlam/Privé/Mobile Money) | badge |
| action-btn | Boutons contextuels (Admettre, Ordonnance) | bouton |

**Annotations** :
- `triage-dot` — Intent : signaler l'urgence visuellement. Vert = standard, Jaune = modéré, Rouge = urgence. Behavior : couleur sémantique. Constraints : micro-point 8px, radius full.
- `insurer-chip` — Intent : identifier le mode de prise en charge. Behavior : clic peut ouvrir les détails d'assurance. Constraints : badge arrondi, texte uppercase `label-sm`.
- `queue-row-*` — Intent : consulter un patient. Behavior : surlignage au survol, clic ouvre le dossier. Constraints : hauteur 60px, nom en `title-sm`, ID/âge/genre en `body-sm`.
- `action-btn` — Intent : action rapide sur le patient. Behavior : "Admettre" ouvre la consultation, "Ordonnance" ouvre la prescription. Constraints : hauteur 32px, padding 0 0.75rem.

**États** :
- [x] Default — liste des patients en attente
- [x] Loading — skeleton de lignes de tableau
- [x] Empty — état vide : "Aucune consultation en attente aujourd'hui"
- [x] Error — message d'erreur de chargement de la file
- [x] Permission — actions masquées selon le rôle (ex: pas d'ordonnance pour un réceptionniste)
- [x] Responsive — colonnes empilées ou scroll horizontal < 768px

**Composants** :
- `reuse` : `Card`, `Badge`, `Button` (clinical fast-action)
- `new-component` : `PatientQueueRow`, `TriageIndicator`, `InsurerChip`

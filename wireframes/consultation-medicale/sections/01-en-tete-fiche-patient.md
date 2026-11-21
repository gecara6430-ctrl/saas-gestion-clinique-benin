# Section — 01 · En-tête et fiche patient

**Rôle dans l'écran** : Identifier le patient en cours de consultation et afficher ses informations administratives clés.

**Éléments** :
| id | élément | type |
|----|---------|------|
| page-title | "Consultation médicale" | texte (h1) |
| page-subtitle | Nom du patient + identifiant | texte |
| patient-name | Nom complet | texte (titre) |
| patient-id | Identifiant P-xxx | texte |
| patient-age-gender | Âge et genre | texte |
| patient-phone | Téléphone | texte |
| patient-insurer | Badge assureur (NSIA/Sanlam/Privé/Mobile Money) | badge |
| patient-doctor | Médecin traitant | texte |
| patient-last-visit | Date dernière visite | texte |
| patient-next-visit | Date prochain RDV | texte |

**Annotations** :
- `page-title` — Intent : situer l'utilisateur dans le flux. Behavior : fixe. Constraints : `text-2xl font-bold`.
- `patient-name` — Intent : identification rapide du patient. Behavior : clic peut ouvrir le dossier complet. Constraints : toujours visible en haut.
- `patient-insurer` — Intent : connaître le mode de prise en charge. Behavior : couleur selon l'assureur (design system). Constraints : badge `label-sm` uppercase.
- `patient-age-gender` — Intent : contexte clinique rapide. Behavior : informatif. Constraints : `body-sm`, gris slate.

**États** :
- [x] Default — fiche complète affichée
- [x] Loading — skeleton sur les champs d'identité
- [x] Empty — N/A (patient toujours sélectionné)
- [x] Error — message si dossier introuvable
- [x] Permission — champs financiers masqués selon le rôle
- [x] Responsive — fiche empilée verticalement < 768px

**Composants** :
- `reuse` : `Badge`, `Card`
- `new-component` : `PatientIdentityCard`

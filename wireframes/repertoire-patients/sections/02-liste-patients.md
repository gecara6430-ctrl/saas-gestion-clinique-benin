# Section — 02 · Liste des patients

**Rôle dans l'écran** : Tableau complet des patients avec identité, âge, téléphone, visites, assureur et action d'ouverture du dossier.

**Éléments** :
| id | élément | type |
|----|---------|------|
| section-title | "Patients enregistrés (N)" | texte (h3) |
| table-header | En-têtes de colonnes | texte |
| table-row-* | Ligne par patient (identité, âge, téléphone, dernières visites, assureur, action) | ligne |
| patient-link | Lien "Voir dossier" | bouton/lien |
| assureur-badge | Badge assureur coloré | badge |

**Annotations** :
- `table-row-*` — Intent : ouvrir le dossier patient. Behavior : clic sur "Voir dossier" navigue vers le détail. Constraints : hauteur 60px, nom en `body-md`, téléphone en `font-mono`.
- `patient-link` — Intent : navigation vers le dossier complet. Behavior : changement de page. Constraints : bouton `size="sm"`, hauteur 32px.
- `assureur-badge` — Intent : identifier le mode de prise en charge. Behavior : couleur selon l'assureur. Constraints : `label-sm`, `rounded-full`.

**États** :
- [x] Default — liste des patients
- [x] Loading — skeleton de lignes
- [x] Empty — "Aucun patient trouvé" avec bouton Nouveau
- [x] Error — message d'erreur de chargement
- [x] Permission — actions masquées selon le rôle
- [x] Responsive — scroll horizontal < 768px, colonnes empilées sur mobile

**Composants** :
- `reuse` : `Badge`, `Button`, `Card`
- `new-component` : `PatientRow`

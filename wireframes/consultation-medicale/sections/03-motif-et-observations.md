# Section — 03 · Motif et observations

**Rôle dans l'écran** : Zones de texte pour le motif de consultation et le compte-rendu médical du médecin.

**Éléments** :
| id | élément | type |
|----|---------|------|
| motif-label | "Motif de consultation" | texte (label) |
| motif-field | Zone de texte libre | textarea |
| observations-label | "Observations du médecin" | texte (label) |
| observations-field | Zone de texte libre étendue | textarea |

**Annotations** :
- `motif-field` — Intent : capturer la raison de la venue. Behavior : texte libre, auto-hauteur. Constraints : hauteur minimale 4 lignes, placeholder explicite en français.
- `observations-field` — Intent : diagnostic, prescription, recommandations. Behavior : texte libre, plus grand que le motif. Constraints : hauteur minimale 6 lignes, police lisible pour saisie prolongée.
- Toutes — Intent : documentation médicale. Behavior : sauvegarde à la validation. Constraints : pas de perte de saisie si navigation accidentelle (confirmation requise).

**États** :
- [x] Default — zones de texte vides ou pré-remplies
- [x] Loading — N/A
- [x] Empty — zones vides, bouton Valider désactivé si obligatoire
- [x] Error — message si champ obligatoire manquant
- [x] Permission — N/A
- [x] Responsive — zones pleine largeur sur mobile

**Composants** :
- `reuse` : `Card`
- `new-component` : `ClinicalTextArea`

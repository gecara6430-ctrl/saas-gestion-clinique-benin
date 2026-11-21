# Section — 02 · Constantes vitales

**Rôle dans l'écran** : Saisie et affichage des quatre constantes vitales de triage (tension, pouls, température, SpO2) avec seuils d'alerte visuels.

**Éléments** :
| id | élément | type |
|----|---------|------|
| section-title | "Constantes vitales" | texte (h3) |
| vital-bp | Tension artérielle (mmHg) | champ + valeur |
| vital-hr | Fréquence cardiaque (bpm) | champ + valeur |
| vital-temp | Température (°C) | champ + valeur |
| vital-spo2 | Saturation O₂ (%) | champ + valeur |
| alert-threshold | Indicateur de valeur hors norme | badge coloré |

**Annotations** :
- `vital-bp` — Intent : surveiller la tension. Behavior : bordure passe en amber/rouge si hors norme (>140/90 ou <90/60). Constraints : valeur en `font-mono`, alignement tabulaire.
- `vital-hr` — Intent : surveiller le pouls. Behavior : alerte si <60 ou >100 bpm. Constraints : même traitement visuel que BP.
- `vital-temp` — Intent : détecter la fièvre. Behavior : alerte si >38°C. Constraints : une décimale, unité °C.
- `vital-spo2` — Intent : surveiller l'oxygénation. Behavior : alerte si <95%. Constraints : %, badge vert/rouge.
- Toutes — Intent : saisie rapide par l'infirmier/médecin. Behavior : focus automatique sur le champ suivant après saisie. Constraints : hauteur 42px, radius 0.5rem.

**États** :
- [x] Default — 4 constantes en grille 2x2
- [x] Loading — placeholders sur chaque valeur
- [x] Empty — champs vides, pas d'alerte
- [x] Error — message si valeur invalide (non numérique)
- [x] Permission — N/A
- [x] Responsive — grille 1-col sur mobile, 2-col sur tablet+

**Composants** :
- `reuse` : `Badge` (statut normal/warning/critical)
- `new-component` : `VitalSignInput`

# Wireframe — Consultation Médicale · Mireille Dossou (P-001)

**Objectif** : Saisie des constantes vitales, motif de consultation et compte-rendu médical pour un patient donné. Écran de travail du médecin pendant la consultation.

**Flux** : Sélection patient depuis le tableau de bord → affichage fiche identité → saisie constantes vitales → saisie motif et observations → validation/enregistrement.

**Layout ordonné des sections** :
1. En-tête et fiche patient (identité, assureur, médecin traitant, dernières visites)
2. Constantes vitales (tension, pouls, température, SpO2 avec seuils d'alerte)
3. Motif de consultation et observations du médecin (zones de texte)
4. Actions et statut (boutons valider / annuler, indicateur de progression)

**États globaux** : Default, Loading, Empty, Error, Permission, Responsive

**Breakpoints** : Mobile (1-col), Tablet (2-col), Desktop (3-col avec fiche à gauche, contenu au centre, actions à droite)

**Source** : Maquette Stitch `fdf423d689494b54bb5b567b36f06cbd` — 1280 × 1914

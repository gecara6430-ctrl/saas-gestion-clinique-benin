# Wireframe — Assurances & Tiers-payant

**Objectif** : Suivi des bordereaux de tiers-payant envoyés aux assureurs régionaux (NSIA, Sanlam, Privé, Mobile Money) avec statut d'acceptation.

**Flux** : Consultation des bordereaux → filtrage par assureur → suivi des montants à recouvrer.

**Layout ordonné des sections** :
1. En-tête et KPIs assurances (bordereaux en attente, taux d'acceptation, montant à recouvrer, délai moyen)
2. Bordereaux de tiers-payant (tableau avec assureur, patient, montant, date, statut)
3. Détails par assureur (résumé NSIA et Sanlam)

**États globaux** : Default, Loading, Empty, Error, Permission, Responsive

**Breakpoints** : Mobile (1-col), Tablet (2-col), Desktop (3-col avec tableau à gauche, détails à droite)

**Source** : Maquette Stitch `693abae043314f32b46a1453253d55a6` — 1280 × 1640

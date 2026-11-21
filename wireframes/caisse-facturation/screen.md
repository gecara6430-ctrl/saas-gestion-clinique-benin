# Wireframe — Caisse & Facturation · Jean-Baptiste Houngbédji

**Objectif** : Encaissement des factures, suivi des paiements et répartition par mode de paiement pour la caisse de la clinique.

**Flux** : Sélection d'une facture en attente → saisie du montant et mode de paiement → encaissement → mise à jour du statut.

**Layout ordonné des sections** :
1. En-tête et KPIs financiers (encaissements du jour, factures en attente, total mois, taux de recouvrement)
2. Factures du jour (tableau avec statut, montant, patient, mode)
3. Encaissement rapide (formulaire montant + mode de paiement)
4. Répartition du jour (ventilation espèces / mobile money / assurances)

**États globaux** : Default, Loading, Empty, Error, Permission, Responsive

**Breakpoints** : Mobile (1-col), Tablet (2-col), Desktop (3-col avec tableau à gauche, encaissement + répartition à droite)

**Source** : Maquette Stitch `e27486e3036c45499fbd8065064d0afc` — 1280 × 1024

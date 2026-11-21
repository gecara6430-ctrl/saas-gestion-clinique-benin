# Section — 03 · Encaissement rapide

**Rôle dans l'écran** : Formulaire pour encaisser une facture en saisissant le montant et le mode de paiement.

**Éléments** :
| id | élément | type |
|----|---------|------|
| section-title | "Encaissement rapide" | texte (h3) |
| amount-label | "Montant (FCFA)" | label |
| amount-input | Champ numérique | input |
| mode-label | "Mode de paiement" | label |
| mode-select | Sélecteur de mode | select |
| btn-encaisser | "Encaisser" | bouton primaire |

**Annotations** :
- `amount-input` — Intent : saisir le montant à encaisser. Behavior : validation numérique, format FCFA. Constraints : placeholder "0", focus automatique.
- `mode-select` — Intent : choisir le mode de paiement. Behavior : liste déroulante (Espèces, Mobile Money MTN, Mobile Money Moov, NSIA, Sanlam). Constraints : sélection requise.
- `btn-encaisser` — Intent : confirmer l'encaissement. Behavior : marque la facture comme payée, met à jour les KPIs. Constraints : désactivé si montant invalide ou mode non sélectionné.

**États** :
- [x] Default — formulaire vide, prêt à saisir
- [x] Loading — bouton en état chargement pendant l'enregistrement
- [x] Empty — N/A
- [x] Error — message si montant invalide ou échec d'enregistrement
- [x] Permission — bouton masqué si pas de rôle comptable
- [x] Responsive — champs empilés sur mobile

**Composants** :
- `reuse` : `Button`, `Card`
- `new-component` : Aucun

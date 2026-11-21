# Section — 04 · Alertes cliniques et triage

**Rôle dans l'écran** : Bande d'alertes pour les cas critiques, allergies, contraindications et paiements en défaut.

**Éléments** :
| id | élément | type |
|----|---------|------|
| alert-critical | Alerte rouge (triage niveau 1, allergie, défaut de paiement) | badge/alerte |
| alert-warning | Alerte amber (examen en attente, autorisation assurance) | badge/alerte |
| alert-success | Alerte verte (sortie validée, facture acquittée) | badge/alerte |
| insurer-badge-* | Badges NSIA, Sanlam, Privé, Mobile Money | badge |

**Annotations** :
- `alert-critical` — Intent : attirer l'attention immédiate sur une urgence. Behavior : couleur crimson, clic ouvre le dossier concerné. Constraints : arrière-plan `#FEF2F2`, texte `#EF4444`, bordure `#FECACA`.
- `alert-warning` — Intent : signaler une attente ou une autorisation en cours. Behavior : couleur amber. Constraints : arrière-plan `#FFFBEB`, texte `#F59E0B`.
- `alert-success` — Intent : confirmer une action réussie. Behavior : couleur emerald. Constraints : arrière-plan `#ECFDF5`, texte `#10B981`.
- `insurer-badge-*` — Intent : identifier l'assureur du patient. Behavior : clic peut ouvrir les détails de prise en charge. Constraints : voir design system (NSIA bleu royal, Sanlam saphir, Privé ardoise, Mobile Money ocre).

**États** :
- [x] Default — alertes affichées par priorité (critique d'abord)
- [x] Loading — N/A
- [x] Empty — "Aucune alerte active"
- [x] Error — N/A
- [x] Permission — alertes financières masquées selon le rôle
- [x] Responsive — badges empilés verticalement sur mobile

**Composants** :
- `reuse` : `Badge` (variantes success/warning/critical/nsia/sanlam/prive/mobilemoney)
- `new-component` : `ClinicalAlert`, `InsurerBadge`

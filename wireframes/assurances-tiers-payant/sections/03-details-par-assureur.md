# Section — 03 · Détails par assureur

**Rôle dans l'écran** : Résumé par assureur avec nombre de bordereaux envoyés, acceptés, en attente et refusés.

**Éléments** :
| id | élément | type |
|----|---------|------|
| card-nsia | Résumé NSIA Assurances | carte |
| card-sanlam | Résumé Sanlam | carte |
| card-prive | Résumé Privé | carte |
| card-mobilemoney | Résumé Mobile Money | carte |

**Annotations** :
- `card-nsia` — Intent : suivi NSIA. Behavior : clic filtre le tableau sur NSIA. Constraints : badge bleu royal en en-tête.
- `card-sanlam` — Intent : suivi Sanlam. Behavior : clic filtre le tableau sur Sanlam. Constraints : badge saphir en en-tête.
- `card-prive` — Intent : suivi prise en charge privée. Behavior : clic filtre sur Privé. Constraints : badge ardoise.
- `card-mobilemoney` — Intent : suivi Mobile Money. Behavior : clic filtre sur Mobile Money. Constraints : badge ocre.

**États** :
- [x] Default — 4 cartes de résumé
- [x] Loading — placeholders
- [x] Empty — affiche "0" pour chaque indicateur
- [x] Error — message d'erreur
- [x] Permission — N/A
- [x] Responsive — 2-col sur tablet, 1-col sur mobile

**Composants** :
- `reuse` : `Badge`, `Card`
- `new-component` : Aucun

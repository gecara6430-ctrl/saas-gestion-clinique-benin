# Wireframe — Tableau de bord · Clinique Sainte-Marie

**Objectif** : Vue d'ensemble opérationnelle pour le personnel médical et administratif — files d'attente, KPI de la journée, alertes cliniques, accès rapide aux modules (consultation, facturation, assurances, répertoire patients).

**Flux** : Connexion → atterrissage sur le tableau de bord → scan des KPI → triage de la file d'attente → accès à un dossier patient ou module métier.

**Layout ordonné des sections** :
1. En-tête et navigation globale (topbar + sidebar)
2. KPI Métriques (cartes horizontales, 4 indicateurs)
3. File d'attente — Consultations du jour (tableau avec triage)
4. Alertes cliniques et triage (badges d'état, insureurs régionaux)
5. Activité récente (dernières admissions, encaissements)

**États globaux** : Default, Loading, Empty (aucune consultation), Error (erreur API), Permission (accès restreint), Responsive (mobile < 768px, tablet 768-1023px, desktop ≥ 1024px)

**Breakpoints** : Mobile (4-col), Tablet (8-col), Desktop (12-col avec sidebar fixe 240px), Wide (≥1440px, sidebar 280px, 3 panneaux)

**Source** : Maquette Stitch `ed6461595cf748e2a5cf78b191ca7ed3` — 1280 × 1796

'use client';

import { useEffect, useState } from 'react';

const TAB_ACTIVE = "tab-btn px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all";
const TAB_INACTIVE = "tab-btn px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant font-label-md text-label-md flex items-center gap-2 transition-all";
const BADGE_ACTIVE = "px-1.5 py-0.2 rounded-full bg-white/20 text-white font-data-mono text-[11px]";
const BADGE_INACTIVE = "px-1.5 py-0.2 rounded-full bg-surface-container text-secondary font-data-mono text-[11px]";

export default function AssurancesPage() {
  const [insurer, setInsurer] = useState('all');
  const [status, setStatus] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.querySelectorAll<HTMLElement>('#claims-table .claim-row').forEach((row) => {
      const rowInsurer = row.getAttribute('data-insurer');
      const rowStatus = row.getAttribute('data-status');
      const rowText = (row.innerText || '').toLowerCase();
      const matchesInsurer = insurer === 'all' || rowInsurer === insurer;
      const matchesStatus = status === 'all' || rowStatus === status;
      const matchesSearch = !query || rowText.includes(query);
      row.style.display = matchesInsurer && matchesStatus && matchesSearch ? '' : 'none';
    });
  }, [insurer, status, query]);

  return (
    <>
<div className="flex flex-col w-full">
<div className="p-space-lg flex flex-col gap-space-lg">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-headline-lg text-headline-lg text-on-surface">Gestion des Bordereaux &amp; Tiers-Payant</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">calendar_month</span>
            Période active : Octobre 2024
          </span>
<span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
            Taux de recouvrement : 52.8%
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Supervision financière, télétransmission et suivi du recouvrement auprès des assureurs partenaires agréés de la Clinique Sainte-Marie.
        </p>
</div>
<div className="flex items-center gap-space-sm flex-wrap shrink-0">
<button className="h-10 px-3.5 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">cloud_upload</span>
<span>Télétransmettre lots</span>
</button>
<button className="h-10 px-3.5 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">account_balance</span>
<span>Rapprocher les virements</span>
</button>
<button className="h-10 px-space-md bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg flex items-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99]" type="button">
<span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
<span>Générer le Bordereau Mensuel</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Total à recouvrer ce mois</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-display-lg text-display-lg text-on-surface font-data-mono">2 450 000</span>
<span className="font-label-lg text-label-lg text-secondary">FCFA</span>
</div>
</div>
<div className="w-11 h-11 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">receipt_long</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            18 dossiers en cours
          </span>
<span className="font-data-mono text-[12px] text-primary font-semibold">Échéance 31 Oct</span>
</div>
</div>

<div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Bordereaux envoyés</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-display-lg text-display-lg text-on-surface font-data-mono">1 800 000</span>
<span className="font-label-lg text-label-lg text-secondary">FCFA</span>
</div>
</div>
<div className="w-11 h-11 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[24px]">forward_to_inbox</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-outline"></span>
            4 bordereaux transmis
          </span>
<span className="font-data-mono text-[12px] text-secondary">Liquidation en cours</span>
</div>
</div>

<div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Remboursements reçus</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-display-lg text-display-lg text-on-surface font-data-mono">950 000</span>
<span className="font-label-lg text-label-lg text-secondary">FCFA</span>
</div>
</div>
<div className="w-11 h-11 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg">
<span className="flex items-center gap-1 text-tertiary font-semibold">
<span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            +12% vs mois précédent
          </span>
<span className="font-data-mono text-[12px] text-on-surface-variant">BOA / Ecobank</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col overflow-hidden">

<div className="p-space-md flex flex-col xl:flex-row xl:items-center justify-between gap-space-md bg-surface-container-low/50">

<div className="flex items-center gap-1.5 overflow-x-auto pb-1 xl:pb-0" id="insurance-tabs">
<button className={insurer === 'all' ? TAB_ACTIVE : TAB_INACTIVE} data-insurer="all" type="button" onClick={() => setInsurer('all')}>
<span>Toutes</span>
<span className={insurer === 'all' ? BADGE_ACTIVE : BADGE_INACTIVE}>18</span>
</button>
<button className={insurer === 'nsia' ? TAB_ACTIVE : TAB_INACTIVE} data-insurer="nsia" type="button" onClick={() => setInsurer('nsia')}>
<span>NSIA</span>
<span className={insurer === 'nsia' ? BADGE_ACTIVE : BADGE_INACTIVE}>8</span>
</button>
<button className={insurer === 'sanlam' ? TAB_ACTIVE : TAB_INACTIVE} data-insurer="sanlam" type="button" onClick={() => setInsurer('sanlam')}>
<span>Sanlam</span>
<span className={insurer === 'sanlam' ? BADGE_ACTIVE : BADGE_INACTIVE}>5</span>
</button>
<button className={insurer === 'atlantique' ? TAB_ACTIVE : TAB_INACTIVE} data-insurer="atlantique" type="button" onClick={() => setInsurer('atlantique')}>
<span>Atlantique</span>
<span className={insurer === 'atlantique' ? BADGE_ACTIVE : BADGE_INACTIVE}>3</span>
</button>
<button className={insurer === 'ascoma' ? TAB_ACTIVE : TAB_INACTIVE} data-insurer="ascoma" type="button" onClick={() => setInsurer('ascoma')}>
<span>Ascoma</span>
<span className={insurer === 'ascoma' ? BADGE_ACTIVE : BADGE_INACTIVE}>2</span>
</button>
</div>

<div className="flex items-center gap-space-sm flex-wrap">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-2.5 text-outline text-[18px]">search</span>
<input className="w-64 h-9 pl-8 pr-space-sm bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" id="filter-search" placeholder="Rechercher patient, N° carte, facture..." type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
</div>
<div className="relative">
<select className="h-9 pl-3 pr-8 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" id="filter-status" value={status} onChange={(e) => setStatus(e.target.value)}>
<option value="all">Tous les statuts</option>
<option value="pret">Prêt à facturer</option>
<option value="envoye">Envoyé</option>
<option value="paye">Payé</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-2.5 text-outline text-[16px] pointer-events-none">expand_more</span>
</div>
<div className="relative">
<select className="h-9 pl-3 pr-8 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
<option>Octobre 2024</option>
<option>Septembre 2024</option>
<option>Août 2024</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-2.5 text-outline text-[16px] pointer-events-none">expand_more</span>
</div>
</div>
</div>

<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse" id="claims-table">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-4 font-semibold">Date</th>
<th className="py-3 px-4 font-semibold">N° Facture</th>
<th className="py-3 px-4 font-semibold">Patient</th>
<th className="py-3 px-4 font-semibold">Assurance &amp; Prise en Charge</th>
<th className="py-3 px-4 font-semibold text-right">Montant Total</th>
<th className="py-3 px-4 font-semibold text-right">Part Assurance</th>
<th className="py-3 px-4 font-semibold text-center">Statut Liquidation</th>
<th className="py-3 px-4 font-semibold text-center">Actions</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface font-body-md text-body-md" id="table-body">

<tr className="hover:bg-surface-container-low transition-colors claim-row" data-insurer="atlantique" data-status="pret">
<td className="py-3.5 px-4 font-data-mono text-data-mono text-secondary">24 Oct 2024</td>
<td className="py-3.5 px-4">
<span className="font-data-mono text-data-mono font-medium text-primary bg-surface-container px-2 py-0.5 rounded">#FAC-2024-1042</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center">
                    JH
                  </div>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm leading-tight text-on-surface">Jean-Baptiste Houngbédji</span>
<span className="font-body-sm text-body-sm text-secondary">IPU-88219 • Cardiologie</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col gap-0.5">
<span className="px-2.5 py-0.5 rounded-full w-max bg-surface-container-high text-on-secondary-container font-label-sm text-label-sm font-medium">
                    Atlantique Assurances
                  </span>
<span className="font-data-mono text-[12px] text-secondary pl-1">#ATL-88412</span>
</div>
</td>
<td className="py-3.5 px-4 text-right font-data-mono text-data-mono text-on-surface">
                40 000 FCFA
              </td>
<td className="py-3.5 px-4 text-right">
<div className="flex flex-col items-end">
<span className="font-data-mono text-data-mono font-semibold text-primary">32 000 FCFA</span>
<span className="font-label-sm text-label-sm text-secondary">80% couvert</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Prêt à facturer
                </span>
</td>
<td className="py-3.5 px-4 text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Consulter la prise en charge" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Télécharger le récapitulatif" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors claim-row bg-surface-container-low/20" data-insurer="sanlam" data-status="envoye">
<td className="py-3.5 px-4 font-data-mono text-data-mono text-secondary">23 Oct 2024</td>
<td className="py-3.5 px-4">
<span className="font-data-mono text-data-mono font-medium text-primary bg-surface-container px-2 py-0.5 rounded">#FAC-2024-1038</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md flex items-center justify-center">
                    MD
                  </div>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm leading-tight text-on-surface">Mireille Dossou</span>
<span className="font-body-sm text-body-sm text-secondary">IPU-49102 • Échographie</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col gap-0.5">
<span className="px-2.5 py-0.5 rounded-full w-max bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-medium">
                    Sanlam Bénin
                  </span>
<span className="font-data-mono text-[12px] text-secondary pl-1">#SAN-99301</span>
</div>
</td>
<td className="py-3.5 px-4 text-right font-data-mono text-data-mono text-on-surface">
                65 000 FCFA
              </td>
<td className="py-3.5 px-4 text-right">
<div className="flex flex-col items-end">
<span className="font-data-mono text-data-mono font-semibold text-primary">52 000 FCFA</span>
<span className="font-label-sm text-label-sm text-secondary">80% couvert</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  Envoyé (En attente)
                </span>
</td>
<td className="py-3.5 px-4 text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Consulter la prise en charge" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Télécharger le récapitulatif" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors claim-row" data-insurer="nsia" data-status="paye">
<td className="py-3.5 px-4 font-data-mono text-data-mono text-secondary">22 Oct 2024</td>
<td className="py-3.5 px-4">
<span className="font-data-mono text-data-mono font-medium text-primary bg-surface-container px-2 py-0.5 rounded">#FAC-2024-1025</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center">
                    KA
                  </div>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm leading-tight text-on-surface">Koffi Agossou</span>
<span className="font-body-sm text-body-sm text-secondary">IPU-10294 • Laboratoire Analyses</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col gap-0.5">
<span className="px-2.5 py-0.5 rounded-full w-max bg-surface-container-high text-on-secondary-container font-label-sm text-label-sm font-medium">
                    NSIA Assurances
                  </span>
<span className="font-data-mono text-[12px] text-secondary pl-1">#NSI-44210</span>
</div>
</td>
<td className="py-3.5 px-4 text-right font-data-mono text-data-mono text-on-surface">
                120 000 FCFA
              </td>
<td className="py-3.5 px-4 text-right">
<div className="flex flex-col items-end">
<span className="font-data-mono text-data-mono font-semibold text-tertiary">96 000 FCFA</span>
<span className="font-label-sm text-label-sm text-secondary">80% couvert</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-medium">
<span className="material-symbols-outlined text-[14px]">done_all</span>
                  Payé (Remboursé)
                </span>
</td>
<td className="py-3.5 px-4 text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Consulter la prise en charge" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Télécharger le récapitulatif" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors claim-row bg-surface-container-low/20" data-insurer="nsia" data-status="pret">
<td className="py-3.5 px-4 font-data-mono text-data-mono text-secondary">20 Oct 2024</td>
<td className="py-3.5 px-4">
<span className="font-data-mono text-data-mono font-medium text-primary bg-surface-container px-2 py-0.5 rounded">#FAC-2024-1011</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center">
                    AB
                  </div>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm leading-tight text-on-surface">Aïcha Bello</span>
<span className="font-body-sm text-body-sm text-secondary">IPU-33290 • Consultation Pédiatrie</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col gap-0.5">
<span className="px-2.5 py-0.5 rounded-full w-max bg-surface-container-high text-on-secondary-container font-label-sm text-label-sm font-medium">
                    NSIA Assurances
                  </span>
<span className="font-data-mono text-[12px] text-secondary pl-1">#NSI-33189</span>
</div>
</td>
<td className="py-3.5 px-4 text-right font-data-mono text-data-mono text-on-surface">
                35 000 FCFA
              </td>
<td className="py-3.5 px-4 text-right">
<div className="flex flex-col items-end">
<span className="font-data-mono text-data-mono font-semibold text-primary">24 500 FCFA</span>
<span className="font-label-sm text-label-sm text-secondary">70% couvert</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Prêt à facturer
                </span>
</td>
<td className="py-3.5 px-4 text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Consulter la prise en charge" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Télécharger le récapitulatif" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors claim-row" data-insurer="ascoma" data-status="envoye">
<td className="py-3.5 px-4 font-data-mono text-data-mono text-secondary">18 Oct 2024</td>
<td className="py-3.5 px-4">
<span className="font-data-mono text-data-mono font-medium text-primary bg-surface-container px-2 py-0.5 rounded">#FAC-2024-0994</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center justify-center">
                    FH
                  </div>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm leading-tight text-on-surface">Félix Houeto</span>
<span className="font-body-sm text-body-sm text-secondary">IPU-55018 • Hospitalisation 48h</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col gap-0.5">
<span className="px-2.5 py-0.5 rounded-full w-max bg-surface-container-high text-on-secondary-container font-label-sm text-label-sm font-medium">
                    Ascoma Bénin
                  </span>
<span className="font-data-mono text-[12px] text-secondary pl-1">#ASC-00214</span>
</div>
</td>
<td className="py-3.5 px-4 text-right font-data-mono text-data-mono text-on-surface">
                210 000 FCFA
              </td>
<td className="py-3.5 px-4 text-right">
<div className="flex flex-col items-end">
<span className="font-data-mono text-data-mono font-semibold text-primary">168 000 FCFA</span>
<span className="font-label-sm text-label-sm text-secondary">80% couvert</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  Envoyé (En attente)
                </span>
</td>
<td className="py-3.5 px-4 text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Consulter la prise en charge" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Télécharger le récapitulatif" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors claim-row bg-surface-container-low/20" data-insurer="sanlam" data-status="paye">
<td className="py-3.5 px-4 font-data-mono text-data-mono text-secondary">15 Oct 2024</td>
<td className="py-3.5 px-4">
<span className="font-data-mono text-data-mono font-medium text-primary bg-surface-container px-2 py-0.5 rounded">#FAC-2024-0982</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center">
                    SD
                  </div>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm leading-tight text-on-surface">Sèdami Dossou</span>
<span className="font-body-sm text-body-sm text-secondary">IPU-77218 • Petite Chirurgie</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col gap-0.5">
<span className="px-2.5 py-0.5 rounded-full w-max bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-medium">
                    Sanlam Bénin
                  </span>
<span className="font-data-mono text-[12px] text-secondary pl-1">#SAN-55219</span>
</div>
</td>
<td className="py-3.5 px-4 text-right font-data-mono text-data-mono text-on-surface">
                80 000 FCFA
              </td>
<td className="py-3.5 px-4 text-right">
<div className="flex flex-col items-end">
<span className="font-data-mono text-data-mono font-semibold text-tertiary">56 000 FCFA</span>
<span className="font-label-sm text-label-sm text-secondary">70% couvert</span>
</div>
</td>
<td className="py-3.5 px-4 text-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-medium">
<span className="material-symbols-outlined text-[14px]">done_all</span>
                  Payé (Remboursé)
                </span>
</td>
<td className="py-3.5 px-4 text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Consulter la prise en charge" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Télécharger le récapitulatif" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-surface-container-low/40 flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="font-body-md text-body-md text-secondary">
            18 factures affichées — Total part assurance :
          </span>
<span className="font-data-mono text-title-sm text-on-surface font-semibold bg-surface-container-lowest px-2.5 py-1 rounded shadow-sm">
            1 845 000 FCFA
          </span>
</div>
<div className="flex items-center gap-space-md self-end md:self-auto">
<button className="h-9 px-3 bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px] text-secondary">table_view</span>
<span>Exporter CSV / Excel</span>
</button>
<div className="flex items-center gap-1 font-label-md text-label-md text-secondary">
<button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors disabled:opacity-40" disabled type="button">
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<span className="px-2 font-data-mono text-[12px] text-on-surface font-medium">Page 1 sur 3</span>
<button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">hub</span>
            Protocoles Télétransmission
          </span>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">Actifs</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Flux EDI direct et passerelle sécurisée avec les serveurs d'agrément NSIA Santé Bénin et Sanlam Africa Cotonou.
        </p>
<div className="flex flex-col gap-2 mt-2">
<div className="flex items-center justify-between text-body-sm bg-surface-container-low p-2 rounded-lg">
<span className="font-label-md text-label-md text-on-surface">NSIA EDI Direct</span>
<span className="font-data-mono text-[11px] text-tertiary font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Opérationnel
            </span>
</div>
<div className="flex items-center justify-between text-body-sm bg-surface-container-low p-2 rounded-lg">
<span className="font-label-md text-label-md text-on-surface">Sanlam WebServices</span>
<span className="font-data-mono text-[11px] text-tertiary font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Synchronisé 14:15
            </span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-error text-[20px]">warning</span>
            Alertes Rejets / Pièces Manquantes
          </span>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm">1 Dossier</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Dossiers nécessitant une régularisation de volet médical ou bon de prise en charge avant forclusion.
        </p>
<div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-1 mt-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">#FAC-2024-0941 • 45 000 FCFA</span>
<span className="font-label-sm text-label-sm text-error font-medium">Ascoma</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Manque signature médecin prescripteur (Dr. Mensah)</span>
<button className="text-primary font-label-sm text-label-sm self-start mt-1 hover:underline" type="button">
            Régulariser la pièce →
          </button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">payments</span>
            Derniers Virements Reçus
          </span>
<span className="font-label-sm text-label-sm text-secondary">Octobre</span>
</div>
<div className="flex flex-col gap-2 mt-1">
<div className="flex items-center justify-between text-body-sm pb-2 border-b-0">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Virement NSIA #VIR-8831</span>
<span className="font-body-sm text-body-sm text-secondary font-data-mono">18 Oct • Ecobank Bénin</span>
</div>
<span className="font-data-mono text-data-mono font-semibold text-tertiary">+620 000 FCFA</span>
</div>
<div className="flex items-center justify-between text-body-sm pt-1">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Virement Sanlam #VIR-7729</span>
<span className="font-body-sm text-body-sm text-secondary font-data-mono">12 Oct • BOA Cotonou</span>
</div>
<span className="font-data-mono text-data-mono font-semibold text-tertiary">+330 000 FCFA</span>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}

'use client';

import { useState } from 'react';

const NET_TO_PAY = 8000;

export default function FacturationPage() {
  const [method, setMethod] = useState('especes');
  const [tx, setTx] = useState('');
  const [validated, setValidated] = useState(false);

  const isCash = method === 'especes';
  const received = parseInt(tx, 10);
  const showChange = isCash && !isNaN(received) && received >= NET_TO_PAY;
  const changeText = showChange ? (received - NET_TO_PAY).toLocaleString('fr-FR') + ' FCFA' : '0 FCFA';

  return (
    <>
<div className="flex flex-col w-full">
<div className="px-space-xl py-space-lg flex flex-col gap-space-lg">

<div className="flex flex-wrap items-center justify-between gap-space-md">
<div className="flex flex-col gap-space-xxs">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary bg-primary-fixed/40 px-space-sm py-0.5 rounded-full">Facturation &amp; Encaissement</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">Guichet 01</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Caisse &amp; Facturation Médicale</h1>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-primary">point_of_sale</span>
<span>Guichet Accueil • Facture <span className="font-data-mono text-data-mono text-on-surface font-semibold">#FAC-2024-1042</span> • Aujourd'hui</span>
</p>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex items-center gap-space-xs h-10 px-space-md bg-surface-container-lowest text-on-surface rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">print</span>
<span>Aperçu Proforma</span>
</button>
<button className="flex items-center gap-space-xs h-10 px-space-md bg-surface-container-lowest text-on-surface rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">history</span>
<span>Historique</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-lg min-w-0">

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-wrap items-start justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[28px]">person</span>
</div>
<div className="flex flex-col gap-space-xxs min-w-0">
<div className="flex items-center gap-space-sm flex-wrap">
<h2 className="font-headline-md text-headline-md text-on-surface truncate">Jean-Baptiste Houngbédji</h2>
<span className="font-data-mono text-data-mono text-on-surface-variant bg-surface-container-low px-space-sm py-0.5 rounded-md">IPU #SM-2024-7105</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-space-sm">
<span>48 ans</span>
<span className="text-outline">•</span>
<span>Masculin</span>
<span className="text-outline">•</span>
<span>+229 97 42 18 90</span>
</p>
</div>
</div>
<span className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-error-container/60 text-on-error-container font-label-md text-label-md shrink-0">
<span className="w-2 h-2 rounded-full bg-error"></span>
              En attente de règlement
            </span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-md flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-tertiary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Couverture &amp; Tiers-Payant</span>
<span className="font-label-lg text-label-lg text-on-surface">Atlantique Assurances • Tiers-payant 80% validé</span>
</div>
</div>
<span className="inline-flex items-center gap-space-xxs px-space-sm py-1 rounded-full bg-tertiary-fixed/50 text-on-tertiary-fixed-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
              Accord #ATL-88412
            </span>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">medical_services</span>
<h3 className="font-title-sm text-title-sm text-on-surface">Liste détaillée des actes médicaux</h3>
</div>
<span className="font-label-md text-label-md text-on-secondary-container bg-secondary-container px-space-sm py-0.5 rounded-full" id="acts-count-badge">2 actes</span>
</div>

<div className="bg-surface-container-low rounded-lg px-space-md py-space-sm grid grid-cols-12 gap-space-sm items-center">
<span className="col-span-7 font-label-sm text-label-sm uppercase text-on-surface-variant">Acte médical / Service</span>
<span className="col-span-2 font-label-sm text-label-sm uppercase text-on-surface-variant text-center">Qté</span>
<span className="col-span-3 font-label-sm text-label-sm uppercase text-on-surface-variant text-right">Montant</span>
</div>

<div className="flex flex-col gap-space-xs" id="acts-list">
<div className="px-space-md py-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-container-low/60 transition-colors grid grid-cols-12 gap-space-sm items-center">
<div className="col-span-7 flex flex-col min-w-0">
<span className="font-title-sm text-title-sm text-on-surface truncate">Consultation Spécialiste</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Cardiologie / Médecine interne • Dr. Mensah</span>
</div>
<div className="col-span-2 text-center font-data-mono text-data-mono text-on-surface-variant">01</div>
<div className="col-span-3 text-right font-data-mono text-data-mono text-on-surface font-semibold">15 000 FCFA</div>
</div>
<div className="px-space-md py-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-container-low/60 transition-colors grid grid-cols-12 gap-space-sm items-center">
<div className="col-span-7 flex flex-col min-w-0">
<span className="font-title-sm text-title-sm text-on-surface truncate">Échographie</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Échographie abdominale • Imagerie Médicale</span>
</div>
<div className="col-span-2 text-center font-data-mono text-data-mono text-on-surface-variant">01</div>
<div className="col-span-3 text-right font-data-mono text-data-mono text-on-surface font-semibold">25 000 FCFA</div>
</div>
</div>

<div className="pt-space-xs flex items-center justify-between">
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-low text-primary font-label-lg text-label-lg hover:bg-surface-container transition-colors" id="add-act-btn" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>+ Ajouter un acte</span>
</button>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tarifs conventionnés Clinique Sainte-Marie</span>
</div>
</section>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-lg min-w-0">

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-title-sm text-title-sm text-on-surface">Répartition Assurance</h3>
<span className="font-label-sm text-label-sm text-primary bg-primary-fixed/40 px-space-sm py-0.5 rounded-full">Calcul automatique</span>
</div>

<div className="flex flex-col gap-space-xs">
<div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden flex">
<div className="h-full bg-tertiary transition-all duration-300" style={{width: "80%"}}></div>
<div className="h-full bg-primary transition-all duration-300" style={{width: "20%"}}></div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Assurance : 80%</span>
<span>Patient : 20%</span>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface-variant">Total des actes</span>
<span className="font-data-mono text-data-mono text-on-surface font-semibold" id="total-amount">40 000 FCFA</span>
</div>
<div className="flex items-center justify-between gap-space-sm">
<span className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-tertiary-fixed/50 text-on-tertiary-fixed-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-[15px]">shield</span>
                Atlantique Assurances (80%)
              </span>
<span className="font-data-mono text-data-mono text-tertiary font-semibold" id="insurance-amount">- 32 000 FCFA</span>
</div>
</div>
<div className="bg-primary-fixed/30 rounded-xl p-space-md flex items-center justify-between gap-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-on-primary-fixed-variant">Net à payer Patient</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Part restante (20%)</span>
</div>
<span className="font-display-lg text-display-lg text-primary font-data-mono" id="patient-net-amount">8 000 FCFA</span>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<h3 className="font-title-sm text-title-sm text-on-surface">Sélecteur de mode de paiement</h3>
<div className="grid grid-cols-2 gap-space-sm" id="payment-methods">
<button className={'payment-btn flex items-center gap-space-sm p-space-md rounded-xl transition-all text-left ' + (method === 'especes' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'bg-surface-container-low text-on-surface hover:bg-surface-container')} data-method="especes" type="button" onClick={() => setMethod('especes')}>
<span className="material-symbols-outlined text-[22px]">payments</span>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg truncate">Espèces</span>
<span className="font-label-sm text-label-sm opacity-80 truncate">Caisse directe</span>
</div>
</button>
<button className={'payment-btn flex items-center gap-space-sm p-space-md rounded-xl transition-all text-left ' + (method === 'mtn' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'bg-surface-container-low text-on-surface hover:bg-surface-container')} data-method="mtn" type="button" onClick={() => setMethod('mtn')}>
<span className="material-symbols-outlined text-[22px] text-secondary">smartphone</span>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg truncate">MTN MoMo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Mobile Money</span>
</div>
</button>
<button className={'payment-btn flex items-center gap-space-sm p-space-md rounded-xl transition-all text-left ' + (method === 'moov' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'bg-surface-container-low text-on-surface hover:bg-surface-container')} data-method="moov" type="button" onClick={() => setMethod('moov')}>
<span className="material-symbols-outlined text-[22px] text-primary">phone_android</span>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg truncate">Moov Money</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Flooz Bénin</span>
</div>
</button>
<button className={'payment-btn flex items-center gap-space-sm p-space-md rounded-xl transition-all text-left ' + (method === 'carte' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'bg-surface-container-low text-on-surface hover:bg-surface-container')} data-method="carte" type="button" onClick={() => setMethod('carte')}>
<span className="material-symbols-outlined text-[22px] text-on-surface-variant">credit_card</span>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg truncate">Carte Bancaire</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">TPE Visa / GIM</span>
</div>
</button>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="tx-input" id="ref-label">{isCash ? 'Montant reçu en espèces (pour rendu de monnaie)' : 'Référence de transaction (optionnel)'}</label>
<div className="relative flex items-center">
<input className="w-full h-11 px-space-md bg-surface-container-low text-on-surface placeholder:text-outline font-data-mono text-data-mono rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors" id="tx-input" placeholder={isCash ? 'Ex: 10000' : 'Ex: TXN-8849201'} type={isCash ? 'number' : 'text'} value={tx} onChange={(e) => setTx(e.target.value)}/>
<span className={'absolute right-3 font-label-sm text-label-sm text-on-surface-variant' + (isCash ? '' : ' hidden')} id="tx-suffix">FCFA</span>
</div>
<div className={(showChange ? 'flex ' : 'hidden ') + 'items-center justify-between px-space-sm py-space-xs rounded-lg bg-tertiary-fixed/40 text-on-tertiary-fixed-variant font-label-md text-label-md'} id="change-display">
<span>Monnaie à rendre :</span>
<span className="font-data-mono text-data-mono font-semibold" id="change-amount">{changeText}</span>
</div>
</div>

<button className={'w-full h-12 px-space-lg bg-primary text-on-primary rounded-xl font-label-lg text-label-lg shadow-md hover:bg-on-primary-fixed-variant active:scale-[0.99] transition-all flex items-center justify-center gap-space-sm' + (validated ? ' opacity-90' : '')} id="validate-payment-btn" onClick={() => setValidated(true)} type="button">
<span className="material-symbols-outlined text-[20px]">receipt_long</span>
<span>Valider l'encaissement &amp; Générer le Reçu</span>
</button>

<div className={(validated ? 'flex ' : 'hidden ') + 'items-center gap-space-sm p-space-md rounded-xl bg-tertiary-fixed/50 text-on-tertiary-fixed-variant'} id="payment-success-banner">
<span className="material-symbols-outlined text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg">Encaissement validé avec succès</span>
<span className="font-body-sm text-body-sm">Reçu #REC-2024-1042 prêt pour impression.</span>
</div>
</div>
</section>
</div>
</div>
</div>
</div>

    </>
  );
}

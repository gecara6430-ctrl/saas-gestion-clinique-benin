'use client';

import { useEffect, useRef, useState } from 'react';

type SaveState = 'idle' | 'saving' | 'saved';

export default function ParametresPage() {
  const [saveState, setSaveState] = useState<SaveState>('idle');
  const t1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (t1.current) clearTimeout(t1.current);
      if (t2.current) clearTimeout(t2.current);
    };
  }, []);

  const onSave = () => {
    if (saveState !== 'idle') return;
    setSaveState('saving');
    t1.current = setTimeout(() => {
      setSaveState('saved');
      t2.current = setTimeout(() => setSaveState('idle'), 2400);
    }, 750);
  };

  return (
    <>
<div className="flex flex-col w-full">
<div className="w-full max-w-[1184px] mx-auto px-space-md lg:px-space-xl py-space-lg space-y-space-lg">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-space-xxs">
<span>Administration générale</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-bold">Configuration établissement</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Paramètres</h1>
<p className="font-body-md text-body-md text-secondary mt-space-xxs">
          Gestion centrale de l'entité clinique, protocoles de facturation UEMOA et habilitations médicales.
        </p>
</div>
<div className="flex items-center gap-space-xs self-start md:self-auto bg-surface-container-high px-space-md py-space-xs rounded-xl shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
<span className="font-data-mono text-label-sm text-on-surface font-semibold tracking-tight">RÉSEAU SANITAIRE BÉNIN : CONNECTÉ</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<nav className="lg:col-span-4 xl:col-span-3 bg-surface-container-lowest rounded-xl shadow-sm p-space-sm space-y-space-xxs">

<a className="flex items-center justify-between px-space-md py-space-sm rounded-lg bg-surface-container-low text-primary shadow-sm font-label-lg text-label-lg transition-all" href="#profil">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>domain</span>
<span>Profil de la clinique</span>
</div>
<span className="w-1.5 h-4 rounded-full bg-primary"></span>
</a>

<a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md transition-colors group" href="#utilisateurs">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-on-surface transition-colors">badge</span>
<span>Utilisateurs &amp; Rôles</span>
</div>
<span className="font-data-mono text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container-high text-secondary">12 membres</span>
</a>

<a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md transition-colors group" href="#tarification">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-on-surface transition-colors">receipt_long</span>
<span>Tarification &amp; Actes</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-medium">UEMOA</span>
</a>

<a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md transition-colors group" href="#assurances">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-on-surface transition-colors">verified_user</span>
<span>Assurances &amp; Conventions</span>
</div>
<span className="font-data-mono text-label-sm px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed">4 tiers</span>
</a>

<a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md transition-colors group" href="#notifications">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-on-surface transition-colors">forum</span>
<span>SMS &amp; WhatsApp</span>
</div>
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
</a>

<a className="flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-md text-body-md transition-colors group" href="#securite">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-on-surface transition-colors">shield</span>
<span>Sécurité &amp; Audit</span>
</div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-tight">HDS-BJ</span>
</a>

<div className="pt-space-md mt-space-md px-space-sm">
<div className="bg-surface-container-low rounded-lg p-space-sm space-y-space-xs">
<div className="flex justify-between items-center text-label-sm font-label-sm">
<span className="text-secondary font-medium">Stockage Dossiers IPU</span>
<span className="font-data-mono text-primary font-bold">64.2%</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full transition-all duration-500" style={{width: "64.2%"}}></div>
</div>
<div className="text-[11px] leading-tight text-secondary">
              128 Go / 200 Go sécurisés localement
            </div>
</div>
</div>
</nav>

<div className="lg:col-span-8 xl:col-span-9 space-y-space-lg">

<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md md:p-space-lg">

<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Profil de la clinique</h2>
<p className="font-body-md text-body-md text-secondary mt-0.5">
                Informations certifiées figurant sur les ordonnances, reçus de caisse et bordereaux d'assurance.
              </p>
</div>
<div className="flex items-center gap-space-xs self-end sm:self-auto shrink-0">
<button className="px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface-variant font-label-lg text-label-lg transition-colors" type="button">
                Annuler
              </button>
<button className={'flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary px-space-md py-2 rounded-lg font-label-lg text-label-lg shadow-sm transition-all transform active:scale-95' + (saveState === 'saving' ? ' opacity-80 pointer-events-none' : '') + (saveState === 'saved' ? ' bg-tertiary' : '')} id="btn-save-profile" type="button" onClick={onSave}>{saveState === 'saving' ? (
  <>
    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
    <span>Sauvegarde en cours...</span>
  </>
) : saveState === 'saved' ? (
  <>
    <span className="material-symbols-outlined text-[18px]">check_circle</span>
    <span>Données enregistrées !</span>
  </>
) : (
  <>
    <span className="material-symbols-outlined text-[18px]">check</span>
    <span>Enregistrer</span>
  </>
)}</button>
</div>
</div>

<form className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-sm" id="clinic-profile-form" onSubmit={(e) => e.preventDefault()}>

<div className="space-y-space-xxs">
<label className="block font-label-md text-label-md uppercase tracking-wider text-secondary" htmlFor="clinic-name">
                Nom officiel de l'établissement <span className="text-error">*</span>
</label>
<div className="relative">
<input className="w-full h-11 px-space-md rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-colors" id="clinic-name" type="text" defaultValue="Clinique Sainte-Marie"/>
<span className="material-symbols-outlined absolute right-space-sm top-1/2 -translate-y-1/2 text-primary text-[18px]">verified</span>
</div>
</div>

<div className="space-y-space-xxs">
<label className="block font-label-md text-label-md uppercase tracking-wider text-secondary" htmlFor="legal-form">
                Forme Juridique <span className="text-error">*</span>
</label>
<input className="w-full h-11 px-space-md rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-colors" id="legal-form" type="text" defaultValue="SA à conseil d'administration"/>
</div>

<div className="space-y-space-xxs">
<label className="block font-label-md text-label-md uppercase tracking-wider text-secondary" htmlFor="physical-address">
                Adresse physique &amp; Quartier <span className="text-error">*</span>
</label>
<div className="relative">
<input className="w-full h-11 pl-10 pr-space-md rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-colors" id="physical-address" type="text" defaultValue="Lot 1201, Avenue 12e Arrondissement, Cotonou"/>
<span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-secondary text-[20px]">pin_drop</span>
</div>
</div>

<div className="space-y-space-xxs">
<label className="block font-label-md text-label-md uppercase tracking-wider text-secondary" htmlFor="clinic-phone">
                Ligne Directe / Standard <span className="text-error">*</span>
</label>
<div className="relative">
<input className="w-full h-11 pl-10 pr-space-md rounded-lg bg-surface-container-low font-data-mono text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-colors" id="clinic-phone" type="tel" defaultValue="+229 21 30 45 67"/>
<span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-secondary text-[20px]">call</span>
</div>
</div>

<div className="space-y-space-xxs">
<label className="block font-label-md text-label-md uppercase tracking-wider text-secondary" htmlFor="clinic-email">
                Courriel Institutionnel <span className="text-error">*</span>
</label>
<div className="relative">
<input className="w-full h-11 pl-10 pr-space-md rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-colors" id="clinic-email" type="email" defaultValue="contact@clinique-sainte-marie.bj"/>
<span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-secondary text-[20px]">mail</span>
</div>
</div>

<div className="space-y-space-xxs">
<div className="flex items-center justify-between">
<label className="block font-label-md text-label-md uppercase tracking-wider text-secondary" htmlFor="clinic-nif">
                  Identifiant Fiscal (NIF / IFU) <span className="text-error">*</span>
</label>
<span className="font-data-mono text-[11px] text-tertiary bg-surface-container px-space-xs py-0.5 rounded">DGI VALIDÉ</span>
</div>
<input className="w-full h-11 px-space-md rounded-lg bg-surface-container-low font-data-mono text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-colors" id="clinic-nif" type="text" defaultValue="2024123456789"/>
</div>

<div className="space-y-space-xxs">
<label className="block font-label-md text-label-md uppercase tracking-wider text-secondary" htmlFor="clinic-license">
                Agrément Ministériel Officiel <span className="text-error">*</span>
</label>
<div className="relative">
<input className="w-full h-11 pl-10 pr-space-md rounded-lg bg-surface-container-low font-data-mono text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-colors" id="clinic-license" type="text" defaultValue="N° 0452/MS/DDS/Cotonou"/>
<span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-tertiary text-[20px]">verified</span>
</div>
</div>

<div className="space-y-space-xxs">
<label className="block font-label-md text-label-md uppercase tracking-wider text-secondary" htmlFor="director-name">
                Médecin Chef / Directeur Médical <span className="text-error">*</span>
</label>
<div className="relative">
<input className="w-full h-11 pl-10 pr-space-md rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-colors" id="director-name" type="text" defaultValue="Dr. Mensah K."/>
<span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-secondary text-[20px]">medical_services</span>
</div>
</div>
</form>

<div className="mt-space-lg pt-space-lg bg-surface-container-low/40 -mx-space-md -mb-space-md md:-mx-space-lg md:-mb-space-lg p-space-md md:p-space-lg rounded-b-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">

<div className="w-16 h-16 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center justify-center shrink-0 text-primary relative overflow-hidden group">
<div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-primary text-[20px]">edit</span>
</div>
<span className="material-symbols-outlined text-[28px] text-primary">local_hospital</span>
<span className="font-data-mono font-bold text-[10px] tracking-tight text-primary-container -mt-1">CSM</span>
</div>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm text-on-surface">Armoiries &amp; Sceau Numérique</span>
<span className="font-body-sm text-body-sm text-secondary mt-0.5">Format PNG, WEBP ou SVG vectoriel (min. 512×512 px) pour ordonnanciers A4 sécurisés.</span>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0 self-end md:self-auto">
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">upload</span>
<span>Remplacer l'insigne</span>
</button>
<button className="px-space-sm py-2 rounded-lg hover:bg-error-container text-error font-label-md text-label-md transition-colors" type="button">
                Supprimer
              </button>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md md:p-space-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-sm">
<div>
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Horaires d'accueil &amp; Permanence de Garde</h2>
<span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm px-space-xs py-0.5 rounded-full uppercase">Pôle Cotonou</span>
</div>
<p className="font-body-md text-body-md text-secondary mt-0.5">
                Synchronisé automatiquement avec la prise de rendez-vous en ligne et le régulateur des admissions.
              </p>
</div>
<button className="self-start sm:self-auto flex items-center gap-space-xs text-primary font-label-md text-label-md hover:underline" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
<span>Historique des gardes</span>
</button>
</div>

<div className="space-y-space-xs pt-space-xs">

<div className="flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-colors gap-space-sm">
<div className="flex items-center gap-space-md min-w-[200px]">
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
<div>
<span className="font-title-sm text-title-sm text-on-surface block">Lundi au Vendredi</span>
<span className="font-body-sm text-body-sm text-secondary">Semaine ouvrable standard</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary">DE</span>
<input aria-label="Heure de début – Lundi au Vendredi" className="bg-transparent font-data-mono text-body-md text-on-surface font-semibold focus:outline-none focus:ring-2 focus:ring-primary" type="time" defaultValue="08:00"/>
</div>
<span className="text-secondary font-label-md text-label-md">À</span>
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary">À</span>
<input aria-label="Heure de fin – Lundi au Vendredi" className="bg-transparent font-data-mono text-body-md text-on-surface font-semibold focus:outline-none focus:ring-2 focus:ring-primary" type="time" defaultValue="18:00"/>
</div>
</div>
<div className="flex items-center gap-space-xs self-start md:self-auto bg-surface-container-highest/60 px-space-sm py-1 rounded-md text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">clinical_notes</span>
<span className="font-body-sm text-body-sm">Journée continue &amp; Triage général</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-colors gap-space-sm">
<div className="flex items-center gap-space-md min-w-[200px]">
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
<div>
<span className="font-title-sm text-title-sm text-on-surface block">Samedi</span>
<span className="font-body-sm text-body-sm text-secondary">Permanence de fin de semaine</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary">DE</span>
<input aria-label="Heure de début – Samedi" className="bg-transparent font-data-mono text-body-md text-on-surface font-semibold focus:outline-none focus:ring-2 focus:ring-primary" type="time" defaultValue="08:00"/>
</div>
<span className="text-secondary font-label-md text-label-md">À</span>
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-secondary">À</span>
<input aria-label="Heure de fin – Samedi" className="bg-transparent font-data-mono text-body-md text-on-surface font-semibold focus:outline-none focus:ring-2 focus:ring-primary" type="time" defaultValue="13:00"/>
</div>
</div>
<div className="flex items-center gap-space-xs self-start md:self-auto bg-surface-container-highest/60 px-space-sm py-1 rounded-md text-secondary">
<span className="material-symbols-outlined text-[16px] text-tertiary">health_and_safety</span>
<span className="font-body-sm text-body-sm">Consultations matin &amp; Urgences</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-surface-container/30 transition-colors gap-space-sm">
<div className="flex items-center gap-space-md min-w-[200px]">
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
<div>
<span className="font-title-sm text-title-sm text-on-surface/70 block">Dimanche &amp; Fériés</span>
<span className="font-body-sm text-body-sm text-outline">Fermé aux consultations externes</span>
</div>
</div>
<div className="flex items-center gap-space-xs opacity-50">
<span className="font-data-mono text-body-sm text-secondary">-- : --</span>
<span className="text-secondary font-label-md text-label-md">À</span>
<span className="font-data-mono text-body-sm text-secondary">-- : --</span>
</div>
<div className="flex items-center gap-space-xs self-start md:self-auto bg-error-container/60 px-space-sm py-1 rounded-md text-on-error-container">
<span className="material-symbols-outlined text-[16px] text-error">emergency</span>
<span className="font-label-sm text-label-sm font-semibold uppercase">Service des Urgences ouvert 24h/24</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-space-lg mt-space-md">
<span className="font-body-sm text-body-sm text-secondary">Les modifications de créneaux prennent effet sur le portail sous 5 minutes.</span>
<button className="px-space-md py-2 bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-colors" type="button">
              Mettre à jour la grille
            </button>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md md:p-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">point_of_sale</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<h3 className="font-title-sm text-title-sm text-on-surface">Paiements Mobile Money &amp; Assurances UEMOA</h3>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-data-mono text-[10px] px-space-xs py-0.5 rounded font-bold">ACTIF</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">
                Passerelles MTN MoMo, Moov Money Bénin et télétransmission directe NSIA / Sanlam synchronisées.
              </p>
</div>
</div>
<button className="shrink-0 px-space-md py-2 bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg transition-colors" type="button">
            Configurer les clés API
          </button>
</section>

<footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs text-secondary px-space-xs pt-space-xxs">
<div className="flex items-center gap-space-xs font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-primary">history</span>
<span>Dernière modification le <span className="font-data-mono text-on-surface font-medium">20/11/2026 à 16:42</span> par <strong className="text-on-surface">Dr. Mensah K. (Médecin Chef)</strong></span>
</div>
<div className="flex items-center gap-space-sm font-data-mono text-[11px] text-outline">
<span>TERMINAL CLINIQUE #CTN-01</span>
<span>•</span>
<span className="text-tertiary">TLS 1.3 CHIFFRÉ</span>
</div>
</footer>
</div>
</div>
</div>

</div>
    </>
  );
}

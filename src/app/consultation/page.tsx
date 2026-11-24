'use client';

import { useEffect, useState } from 'react';

function pad2(n: number) {
  return String(n).padStart(2, '0');
}

function formatTime(total: number) {
  return pad2(Math.floor(total / 3600)) + ':' + pad2(Math.floor((total % 3600) / 60)) + ':' + pad2(total % 60);
}

export default function ConsultationPage() {
  const [seconds, setSeconds] = useState(14 * 60 + 28);

  useEffect(() => {
    const id = setInterval(() => setSeconds((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
<div className="flex flex-col w-full">

<div className="w-full px-space-lg py-space-sm bg-surface-container-low flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<a className="flex items-center gap-space-xxs text-secondary hover:text-primary transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
        Salle d'attente
      </a>
<span className="text-outline text-[12px]">•</span>
<span className="font-label-md text-label-md text-on-surface-variant">Cabinet de Consultation 1</span>
<span className="text-outline text-[12px]">•</span>
<span className="font-label-md text-label-md text-primary flex items-center gap-space-xxs">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        Séance clinique active
      </span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs font-data-mono text-data-mono text-on-surface-variant bg-surface-container px-space-sm py-1 rounded-lg">
<span className="material-symbols-outlined text-[16px] text-tertiary">timer</span>
<span>Durée active : <strong className="text-on-surface" id="session-timer">{formatTime(seconds)}</strong></span>
</div>
<div className="flex items-center gap-space-xs">
<button className="h-8 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-space-xxs font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined text-[16px]">pause_circle</span>
          Mettre en pause
        </button>
<button className="h-8 px-space-sm rounded-lg bg-error-container text-on-error-container hover:bg-error/20 transition-all flex items-center gap-space-xxs font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">lock_clock</span>
          Clôturer la séance
        </button>
</div>
</div>
</div>

<section className="w-full px-space-lg py-space-md bg-surface-container-lowest shadow-sm">
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">

<div className="flex flex-wrap items-center gap-space-md">

<div className="relative flex-shrink-0">
<div className="w-14 h-14 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline-md text-headline-md font-bold shadow-inner">
            MD
          </div>
<span className="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary text-on-tertiary rounded-full flex items-center justify-center ring-2 ring-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-[12px]">check</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Mireille Dossou</h1>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-space-xs py-0.5 rounded-full">
              34 ans • Féminin
            </span>
<span className="font-data-mono text-data-mono text-outline bg-surface-container-low px-space-xs py-0.5 rounded">
              IPU: #SM-2024-8842
            </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
              En cours
            </span>
</div>

<div className="flex flex-wrap items-center gap-space-xs mt-space-xs">

<div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container/60 text-error font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">water_drop</span>
              Groupe Sanguin : <strong className="font-bold">O+</strong>
</div>

<div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm shadow-sm animate-pulse">
<span className="material-symbols-outlined text-[15px]">warning</span>
<span>Allergie majeure : <strong>Pénicilline</strong></span>
</div>

<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px] text-primary">verified_user</span>
<span>Sanlam Bénin (Prise en charge 80%)</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="text-tertiary font-semibold">Tiers-payant validé</span>
</div>

<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">stethoscope</span>
              Dr. Mensah (Cabinet 1)
            </div>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs flex-wrap">
<button className="h-9 px-space-md bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all rounded-lg font-label-md text-label-md flex items-center gap-space-xxs shadow-sm">
<span className="material-symbols-outlined text-[18px]">folder_shared</span>
          Voir dossier complet
        </button>
<button className="h-9 px-space-md bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all rounded-lg font-label-md text-label-md flex items-center gap-space-xxs shadow-sm">
<span className="material-symbols-outlined text-[18px]">biotech</span>
          Historique biologique
        </button>
<button className="h-9 px-space-md bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-all rounded-lg font-label-md text-label-md flex items-center gap-space-xxs shadow-sm">
<span className="material-symbols-outlined text-[18px]">task_alt</span>
          Terminer &amp; Facturer
        </button>
</div>
</div>
</section>

<div className="w-full px-space-lg py-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-lg">



<div className="lg:col-span-5 flex flex-col gap-space-lg">

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low px-space-sm py-2 rounded-lg">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">monitor_heart</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Constantes vitales</h2>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-xs">Triage 09:12</span>
</div>
<button className="text-primary hover:text-on-primary-fixed-variant font-label-sm text-label-sm flex items-center gap-1 px-2 py-1 rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[14px]">edit_note</span>
            Actualiser
          </button>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs">

<div className="flex flex-col p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Tension</span>
<span className="w-2 h-2 rounded-full bg-tertiary" title="Normale"></span>
</div>
<div className="font-data-mono text-[17px] font-semibold text-on-surface">125/82</div>
<span className="font-label-sm text-[11px] text-tertiary mt-0.5">mmHg • Idéale</span>
</div>

<div className="flex flex-col p-space-sm rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Temp.</span>
<span className="w-2 h-2 rounded-full bg-error" title="Légère fébricule"></span>
</div>
<div className="font-data-mono text-[17px] font-semibold text-error">37.4 °C</div>
<span className="font-label-sm text-[11px] text-error mt-0.5">Légère fébricule</span>
</div>

<div className="flex flex-col p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Pouls / SpO2</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<div className="font-data-mono text-[17px] font-semibold text-on-surface">78 <span className="text-xs font-normal text-secondary">bpm</span></div>
<span className="font-label-sm text-[11px] text-tertiary mt-0.5">SpO2: 98%</span>
</div>

<div className="flex flex-col p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Poids / IMC</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<div className="font-data-mono text-[17px] font-semibold text-on-surface">64.5 <span className="text-xs font-normal text-secondary">kg</span></div>
<span className="font-label-sm text-[11px] text-on-surface-variant mt-0.5">IMC 22.9 (1.68m)</span>
</div>
</div>

<div className="mt-space-sm pt-space-xs flex items-center justify-between bg-surface px-space-sm py-1.5 rounded-lg text-secondary">
<div className="flex items-center gap-1 font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary">show_chart</span>
<span>Tendance tensionnelle stable sur les 3 dernières consultations</span>
</div>

<svg className="w-24 h-5 text-primary opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 100 20">
<path d="M0 12 L20 14 L40 10 L60 11 L80 9 L100 10"></path>
<circle cx="100" cy="10" fill="currentColor" r="2.5"></circle>
</svg>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">clinical_notes</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Observation &amp; Diagnostic</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary">Saisie Dr. Mensah</span>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface flex items-center gap-1">
            Motif de consultation &amp; Anamnèse
            <span className="text-error">*</span>
</label>
<div className="w-full bg-surface-container-low rounded-lg p-space-sm focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary/20 transition-all">
<textarea className="w-full bg-transparent border-0 text-on-surface font-body-md text-body-md focus:outline-none resize-none" placeholder="Détaillez les plaintes exprimées..." rows={2} defaultValue={"Douleurs épigastriques récurrentes post-prandiales, pyrosis ascendant marqué depuis 5 jours. Aggravation nocturne sans irradiation dorsale."}/>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface flex items-center gap-1">
              Hypothèse diagnostique / Examen physique
              <span className="text-error">*</span>
</label>
<span className="font-data-mono text-[11px] text-primary bg-primary/10 px-1.5 py-0.5 rounded">CIM-10: K29.0</span>
</div>
<div className="w-full bg-surface-container-low rounded-lg p-space-sm focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary/20 transition-all">
<textarea className="w-full bg-transparent border-0 text-on-surface font-body-md text-body-md focus:outline-none resize-none" placeholder="Constatations à la palpation, auscultation..." rows={3} defaultValue={"Gastrite aiguë suspectée sur terrain de stress professionnel intense. Abdomen souple, sensibilité épigastrique nette sans défense ni contracture. Absence de signe péritonéal, bruits hydro-aériques normaux. Pas d'hématémèse ni de méléna rapporté."}/>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-xxs pt-1">
<span className="font-label-sm text-label-sm text-secondary mr-1">Tags cliniques:</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
            Pyrosis <span className="material-symbols-outlined text-[12px] cursor-pointer hover:text-error">close</span>
</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
            Épigastralgie <span className="material-symbols-outlined text-[12px] cursor-pointer hover:text-error">close</span>
</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
            Dyspepsie <span className="material-symbols-outlined text-[12px] cursor-pointer hover:text-error">close</span>
</span>
<button className="px-2 py-0.5 rounded-md bg-surface-container-high hover:bg-surface-variant text-primary font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">add</span> Ajouter
          </button>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">history_edu</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Antécédents &amp; Chronologie</h2>
</div>
<button className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">history</span>
            Tout déplier
          </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">family_restroom</span>
              Antécédents Familiaux
            </span>
<span className="font-body-sm text-body-sm text-on-surface mt-1">
              • Mère : Diabète type 2<br/>
              • Père : Hypertension artérielle (HTA)
            </span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-tertiary">medication</span>
              Traitement habituel
            </span>
<span className="font-body-sm text-body-sm text-on-surface mt-1">
              • Aucun traitement au long cours.<br/>
              • Contraception orale bien tolérée.
            </span>
</div>
</div>

<div className="relative pl-6 space-y-space-md before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-high">

<div className="relative flex flex-col group">
<div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
<div className="flex items-baseline justify-between">
<span className="font-title-sm text-title-sm text-on-surface">Bilan gynécologique de routine</span>
<span className="font-data-mono text-[12px] text-secondary">14 Août 2024</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Frottis cervico-utérin standard normal. Échographie pelvienne sans anomalie. Dr. Mensah.
            </p>
</div>

<div className="relative flex flex-col group">
<div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-tertiary ring-4 ring-surface-container-lowest"></div>
<div className="flex items-baseline justify-between">
<span className="font-title-sm text-title-sm text-on-surface">Accès palustre simple</span>
<span className="font-data-mono text-[12px] text-secondary">22 Janv 2024</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Goutte épaisse positive (Plasmodium falciparum 12 000/µL). Traité avec succès par Artéméther-Luméfantrine (ACT 3 jours). Guérison confirmée.
            </p>
</div>
</div>
</div>
</div>



<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">prescriptions</span>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Créateur d'Ordonnance Médicale</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Vérification automatique des contre-indications &amp; allergies</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-[12px] font-label-md px-2.5 py-1 rounded-md bg-error/10 text-error">
<span className="material-symbols-outlined text-[14px]">shield</span>
              Alerte Pénicilline activée
            </span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-space-xs">
<div className="relative flex-1 w-full">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[20px]">search</span>
<input className="w-full h-11 pl-10 pr-space-md bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Rechercher par DCI, spécialité (ex: Oméprazole, Paracétamol, Dompéridone...)" type="text"/>
</div>
<button className="w-full sm:w-auto h-11 px-space-md bg-primary text-on-primary hover:bg-on-primary-fixed-variant rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-sm transition-all flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">add</span>
            Ajouter un médicament
          </button>
</div>

<div className="flex flex-col gap-space-xs" id="prescribed-list">

<div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm group">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm mt-0.5">
                1
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title-sm text-title-sm text-on-surface">Oméprazole 20 mg</span>
<span className="font-label-sm text-[11px] px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">Gélule gastro-résistante</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 flex flex-wrap items-center gap-x-3">
<span><strong>Posologie:</strong> 1 gélule le matin à jeun</span>
<span><strong>Fréquence:</strong> 1 fois / jour</span>
<span><strong>Durée:</strong> 28 jours (Renouvelable 1 fois)</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end sm:self-center">
<span className="font-data-mono text-[12px] text-tertiary bg-surface-container-lowest px-2 py-1 rounded shadow-2xs">Pris en charge 80%</span>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-secondary hover:text-on-surface flex items-center justify-center transition-colors" title="Modifier">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="w-8 h-8 rounded-lg hover:bg-error-container text-secondary hover:text-error flex items-center justify-center transition-colors" title="Supprimer">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm group">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm mt-0.5">
                2
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title-sm text-title-sm text-on-surface">Gaviscon Suspension Buvable</span>
<span className="font-label-sm text-[11px] px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">Sachet-dose 10 ml</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 flex flex-wrap items-center gap-x-3">
<span><strong>Posologie:</strong> 1 sachet après les 3 repas principaux &amp; au coucher si brûlures</span>
<span><strong>Durée:</strong> 10 jours</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end sm:self-center">
<span className="font-data-mono text-[12px] text-tertiary bg-surface-container-lowest px-2 py-1 rounded shadow-2xs">Pris en charge 80%</span>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-secondary hover:text-on-surface flex items-center justify-center transition-colors" title="Modifier">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="w-8 h-8 rounded-lg hover:bg-error-container text-secondary hover:text-error flex items-center justify-center transition-colors" title="Supprimer">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm group">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm mt-0.5">
                3
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title-sm text-title-sm text-on-surface">Paracétamol 1g</span>
<span className="font-label-sm text-[11px] px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">Comprimé sécable</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 flex flex-wrap items-center gap-x-3">
<span><strong>Posologie:</strong> 1 comprimé en cas de céphalées ou fébricule (max 3g / 24h, espacer de 6h)</span>
<span><strong>Durée:</strong> 5 jours si besoin</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs self-end sm:self-center">
<span className="font-data-mono text-[12px] text-tertiary bg-surface-container-lowest px-2 py-1 rounded shadow-2xs">Pris en charge 80%</span>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-secondary hover:text-on-surface flex items-center justify-center transition-colors" title="Modifier">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="w-8 h-8 rounded-lg hover:bg-error-container text-secondary hover:text-error flex items-center justify-center transition-colors" title="Supprimer">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-1 mt-space-xs">
<label className="font-label-md text-label-md text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-primary text-[18px]">restaurant</span>
            Conseils hygiéno-diététiques &amp; Recommandations
          </label>
<div className="w-full bg-surface-container-low rounded-lg p-space-sm focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary/20 transition-all">
<textarea className="w-full bg-transparent border-0 text-on-surface font-body-sm text-body-sm focus:outline-none resize-none" rows={2} defaultValue={"Éviter les repas excessivement gras, les piments/épices fortes et le café noir à jeun. Fractionner l'alimentation (4 à 5 petits repas). Ne pas se coucher immédiatement après le repas du soir (attendre au moins 2 heures)."}/>
</div>
</div>
</div>

<div className="w-full flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">picture_as_pdf</span>
<span className="font-headline-md text-headline-md text-on-surface">Aperçu en direct (Ordonnance Sécurisée)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-2 py-1 rounded">
            Format A4 • Génération temps réel
          </span>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-md relative overflow-hidden text-on-surface">

<div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
<span className="material-symbols-outlined text-[320px] select-none text-primary">local_hospital</span>
</div>

<div className="flex items-start justify-between pb-space-md bg-gradient-to-r from-surface-container-low via-surface-container-lowest to-surface-container-low p-space-md rounded-xl">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center font-display-lg text-[22px] shadow-sm">
                ✚
              </div>
<div className="flex flex-col">
<span className="font-headline-md text-[17px] font-bold text-primary tracking-wide">CLINIQUE SAINTE-MARIE</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Pôle Médical Spécialisé • Quartier Haie Vive, Cotonou</span>
<span className="font-data-mono text-[11px] text-secondary">Tél: +229 21 30 11 00 • Urgences: 24h/7j</span>
</div>
</div>

<div className="flex flex-col text-right">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">Dr. Mensah K.</span>
<span className="font-label-sm text-[11px] text-secondary">Médecin Chef &amp; Praticien Hospitalier</span>
<span className="font-data-mono text-[10px] text-outline">N° ONMB: 1420/ONMB</span>
</div>
</div>

<div className="mt-space-md flex flex-wrap items-center justify-between text-body-sm py-2 px-space-sm bg-surface-container-low rounded-lg">
<div>
<span className="text-secondary font-medium">Bénéficiaire : </span>
<strong className="text-on-surface">Mme Mireille DOSSOU</strong> (34 ans)
            </div>
<div>
<span className="text-secondary font-medium">Date d'émission : </span>
<strong className="font-data-mono text-on-surface">24 Octobre 2024</strong>
</div>
<div>
<span className="text-secondary font-medium">Réf. Ordonnance : </span>
<strong className="font-data-mono text-primary">ORD-2024-10-8842</strong>
</div>
</div>

<div className="mt-space-lg space-y-space-md pl-space-sm">

<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-title-sm text-title-sm text-on-surface font-bold">1. OMÉPRAZOLE 20 mg, gélule gastro-résistante</span>
<span className="font-data-mono text-xs text-secondary">1 boîte (28 gélules)</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant italic pl-4 mt-0.5">
                Prendre 1 gélule le matin à jeun avec un demi-verre d'eau pendant 28 jours.<br/>
<span className="text-xs text-primary font-medium">↳ Renouvelable une fois si persistance modérée des symptômes.</span>
</p>
</div>

<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-title-sm text-title-sm text-on-surface font-bold">2. GAVISCON Suspension Buvable (Sachet-dose 10 ml)</span>
<span className="font-data-mono text-xs text-secondary">2 boîtes</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant italic pl-4 mt-0.5">
                Prendre 1 sachet après chacun des 3 repas principaux et au moment du coucher en cas de brûlures d'estomac. Durée: 10 jours.
              </p>
</div>

<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-title-sm text-title-sm text-on-surface font-bold">3. PARACÉTAMOL 1g, comprimé sécable</span>
<span className="font-data-mono text-xs text-secondary">1 boîte (8 comprimés)</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant italic pl-4 mt-0.5">
                1 comprimé en cas de céphalées ou douleur. Maximum 3 comprimés par 24 heures en respectant 6 heures minimum entre chaque prise. Traitement d'appoint (5 jours maximum).
              </p>
</div>

<div className="mt-space-md p-space-sm rounded-lg bg-surface-container-low text-xs text-on-surface-variant">
<strong>Conseils hygiéno-diététiques :</strong> Alimentation fractionnée, proscription des aliments très épicés et du café noir à jeun. Surélévation légère de la tête de lit conseillée la nuit.
            </div>
</div>

<div className="mt-space-xl pt-space-md flex items-end justify-between">

<div className="flex items-center gap-space-sm">

<div className="w-16 h-16 bg-surface-container p-1 rounded-lg flex items-center justify-center shadow-xs">
<svg className="w-full h-full text-on-surface" fill="currentColor" viewBox="0 0 24 24">
<path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm-4 0h2v4h-2v-4zm2 2h2v4h-2v-4zm2 2h2v2h-2v-2zm-6 2h2v2h-2v-2zm6-8h4v2h-4v-2zm-4 2h2v2h-2v-2z"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] font-bold text-on-surface">Vérification Officielle Pharmacie</span>
<span className="font-data-mono text-[10px] text-secondary">Scanner pour certifier la signature numérique</span>
<span className="font-data-mono text-[9px] text-outline">Code Hash: SHA256-8842-CSM-BJ</span>
</div>
</div>

<div className="flex flex-col items-center relative">

<div className="w-24 h-24 rounded-full bg-secondary-container/40 p-1 flex flex-col items-center justify-center text-center rotate-[-8deg] pointer-events-none select-none">
<span className="font-label-sm text-[8px] font-bold uppercase text-primary tracking-tighter">CLINIQUE STE-MARIE</span>
<span className="font-label-sm text-[9px] font-bold text-on-secondary-fixed">DR. MENSAH</span>
<span className="font-data-mono text-[7px] text-primary">COT-BENIN</span>
<span className="font-label-sm text-[7px] text-secondary">24 OCT 2024</span>
</div>
<div className="absolute bottom-1 font-body-sm text-[13px] font-semibold text-primary font-serif italic select-none">
                Dr. Mensah K.
              </div>
<span className="font-label-sm text-[10px] text-outline mt-1">Signature certifiée eIDAS</span>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">

<button className="h-10 px-space-md rounded-lg bg-[#25D366] text-white hover:bg-[#20ba59] transition-all font-label-lg text-label-lg flex items-center gap-space-xs shadow-sm" title="Délivrer une copie conforme sur le smartphone de la patiente">
<span className="material-symbols-outlined text-[18px]">chat</span>
              Envoyer sur WhatsApp (+229)
            </button>

<button className="h-10 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all font-label-lg text-label-lg flex items-center gap-space-xs shadow-sm">
<span className="material-symbols-outlined text-[18px]">download</span>
              Télécharger PDF
            </button>
</div>

<div className="flex items-center gap-space-xs">
<button className="h-10 px-space-lg rounded-lg bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-all font-label-lg text-label-lg flex items-center gap-space-xs shadow-md">
<span className="material-symbols-outlined text-[18px]">print</span>
<span>Enregistrer &amp; Imprimer PDF</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}

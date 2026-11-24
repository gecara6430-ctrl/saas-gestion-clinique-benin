'use client';

import { useState } from 'react';

const TAB_ACTIVE = "px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-sm transition-all whitespace-nowrap";
const TAB_INACTIVE = "px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm transition-colors whitespace-nowrap";

export default function DashboardPage() {
  const [filter, setFilter] = useState('all');

  return (
    <>
<div className="flex flex-col w-full p-space-lg lg:p-space-xl gap-space-xl">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Unité de Soins Ambulatoires</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-data-mono text-data-mono text-primary font-semibold">Poste Triage 01</span>
</div>
<div className="flex items-baseline gap-space-sm mt-0.5">
<h1 className="font-display-lg text-display-lg text-on-surface">Activité Clinique &amp; File Active</h1>
<span className="font-body-md text-body-md text-secondary">Aujourd'hui, 24 Octobre 2024</span>
</div>
</div>

<div className="flex items-center flex-wrap gap-space-sm">
<div className="flex items-center gap-space-xs px-space-md py-1.5 bg-surface-container rounded-full text-on-surface-variant text-label-md font-label-md">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Passerelle Tiers-Payant Active</span>
</div>
<button className="flex items-center gap-space-xs px-space-md py-2 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">sync</span>
<span>Actualiser (08:52)</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2 bg-primary hover:bg-on-primary-fixed-variant text-on-primary rounded-lg font-label-md text-label-md shadow-sm transition-all">
<span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
<span>Clôture Matinale</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-lg">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-9 h-9 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">groups</span>
</div>
<span className="font-label-md text-label-md text-secondary">Patients du jour</span>
</div>
<span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
          +15% vs hier
        </span>
</div>
<div className="my-space-md">
<span className="font-display-lg text-display-lg text-on-surface">24</span>
</div>
<div className="flex items-center justify-between text-secondary pt-space-xs font-body-sm text-body-sm">
<span>Prévus : 32 au total</span>
<span className="font-data-mono text-data-mono text-primary font-medium">75% flux</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-surface-container-high/40 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-9 h-9 rounded-lg bg-secondary-container/60 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">timelapse</span>
</div>
<span className="font-label-md text-label-md text-secondary">En salle d'attente</span>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Temps moyen : 18 min
        </span>
</div>
<div className="my-space-md flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-on-surface">5</span>
<span className="font-label-md text-label-md text-secondary">patients actifs</span>
</div>
<div className="flex items-center justify-between text-secondary pt-space-xs font-body-sm text-body-sm">
<span>Capacité assise : 25%</span>
<span className="font-label-sm text-label-sm text-tertiary">Fluide</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-fixed/30 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-9 h-9 rounded-lg bg-surface-container-low text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">payments</span>
</div>
<span className="font-label-md text-label-md text-secondary">Recettes Caisse</span>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface font-medium">
          Cotonou Guichet
        </span>
</div>
<div className="my-space-md">
<span className="font-display-lg text-display-lg text-on-surface font-data-mono">385 000</span>
<span className="font-label-md text-label-md text-secondary font-medium ml-1">FCFA</span>
</div>
<div className="flex items-center justify-between text-secondary pt-space-xs font-body-sm text-body-sm">
<span className="truncate">Espèces &amp; Mobile Money (MTN/Moov)</span>
<span className="material-symbols-outlined text-[16px] text-tertiary">done_all</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-secondary-fixed/30 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-9 h-9 rounded-lg bg-secondary-container/60 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
<span className="font-label-md text-label-md text-secondary">Part Assurances</span>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-fixed font-semibold">
          PEC 68%
        </span>
</div>
<div className="my-space-md">
<span className="font-display-lg text-display-lg text-on-surface font-data-mono">210 000</span>
<span className="font-label-md text-label-md text-secondary font-medium ml-1">FCFA</span>
</div>
<div className="flex items-center justify-between text-secondary pt-space-xs font-body-sm text-body-sm">
<span className="truncate">Tiers-Payant (NSIA, Sanlam, AAA)</span>
<span className="font-label-sm text-label-sm text-primary font-medium">Bordereau #89</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-3 h-3 rounded-full bg-tertiary relative flex items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface leading-tight">Salle d'attente en temps réel</h2>
<p className="font-body-sm text-body-sm text-secondary">Flux d'admission et ordre de passage prioritaire</p>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant font-medium">
              5 patients présents
            </span>
</div>
</div>

<div className="flex items-center gap-space-xs pt-space-xs overflow-x-auto">
<button className={filter === 'all' ? TAB_ACTIVE : TAB_INACTIVE} onClick={() => setFilter('all')} id="filter-all">
            Tous (5)
          </button>
<button className={filter === 'consultation' ? TAB_ACTIVE : TAB_INACTIVE} onClick={() => setFilter('consultation')} id="filter-active">
            En consultation (1)
          </button>
<button className={filter === 'waiting' ? TAB_ACTIVE : TAB_INACTIVE} onClick={() => setFilter('waiting')} id="filter-waiting">
            En attente (4)
          </button>
<div className="ml-auto text-secondary flex items-center gap-1 text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[16px]">sort</span>
            Triage Standard
          </div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all relative overflow-hidden" + (filter === 'all' || filter === 'consultation' ? '' : ' hidden')} data-queue-status="consultation">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pl-space-xs">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary font-headline-md">
                KA
              </div>
<div className="flex flex-col">
<div className="flex items-center flex-wrap gap-space-xs">
<span className="font-title-sm text-title-sm text-on-surface">Koffi Agossou</span>
<span className="font-body-sm text-body-sm text-secondary">(42 ans, M)</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-fixed">
                    NSIA Assurances • 80%
                  </span>
</div>
<div className="flex items-center flex-wrap gap-space-sm mt-1 text-secondary font-body-sm text-body-sm">
<span className="flex items-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-primary">stethoscope</span>
                    Consultation Cardiologie
                  </span>
<span>•</span>
<span className="font-data-mono text-data-mono">Arrivée 08:45</span>
<span>•</span>
<span className="text-primary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">meeting_room</span>
                    Dr. Mensah - Cabinet 1
                  </span>
</div>
</div>
</div>

<div className="flex items-center justify-between md:justify-end gap-space-sm mt-space-xs md:mt-0 pt-space-xs md:pt-0">
<div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container rounded-full">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span className="font-label-sm text-label-sm text-primary font-semibold">En consultation</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm transition-colors">
                  Dossier
                </button>
<button className="px-3 py-1.5 bg-primary text-on-primary hover:bg-on-primary-fixed-variant rounded-lg font-label-sm text-label-sm transition-colors shadow-sm">
                  Ordonnance
                </button>
</div>
</div>
</div>

<div className="mt-space-sm pt-space-xs flex items-center flex-wrap gap-space-md text-secondary font-data-mono text-data-mono bg-surface-container-low px-space-md py-1.5 rounded-lg">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">monitor_heart</span>
              TA : 138/85 mmHg
            </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">favorite</span>
              Pouls : 76 bpm
            </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">device_thermostat</span>
              T° : 37.1 °C
            </span>
<span className="ml-auto font-label-sm text-label-sm text-tertiary">Trié par Infirmier Dossou</span>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all relative overflow-hidden" + (filter === 'all' || filter === 'waiting' ? '' : ' hidden')} data-queue-status="waiting">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-container-high"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pl-space-xs">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 text-secondary font-headline-md">
                AB
              </div>
<div className="flex flex-col">
<div className="flex items-center flex-wrap gap-space-xs">
<span className="font-title-sm text-title-sm text-on-surface">Aïcha Bello</span>
<span className="font-body-sm text-body-sm text-secondary">(29 ans, F)</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface font-medium">
                    Sanlam Bénin • 70%
                  </span>
</div>
<div className="flex items-center flex-wrap gap-space-sm mt-1 text-secondary font-body-sm text-body-sm">
<span className="flex items-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-secondary">pregnant_woman</span>
                    Contrôle prénatal (T2)
                  </span>
<span>•</span>
<span className="font-data-mono text-data-mono">Arrivée 09:10</span>
<span>•</span>
<span className="text-secondary">Dr. Mensah</span>
</div>
</div>
</div>

<div className="flex items-center justify-between md:justify-end gap-space-sm mt-space-xs md:mt-0 pt-space-xs md:pt-0">
<div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-high/60 rounded-full">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Attente ~12 min</span>
</div>
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">notifications_active</span>
<span>Appeler</span>
</button>
</div>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all relative overflow-hidden" + (filter === 'all' || filter === 'waiting' ? '' : ' hidden')} data-queue-status="waiting">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-variant"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pl-space-xs">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 text-secondary font-headline-md">
                SD
              </div>
<div className="flex flex-col">
<div className="flex items-center flex-wrap gap-space-xs">
<span className="font-title-sm text-title-sm text-on-surface">Sèdami Dossou</span>
<span className="font-body-sm text-body-sm text-secondary">(35 ans, F)</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface font-medium">
                    Privé (Paiement direct)
                  </span>
</div>
<div className="flex items-center flex-wrap gap-space-sm mt-1 text-secondary font-body-sm text-body-sm">
<span className="flex items-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-error">coronavirus</span>
                    Fièvre &amp; Bilan Paludisme
                  </span>
<span>•</span>
<span className="font-data-mono text-data-mono">Arrivée 09:25</span>
<span>•</span>
<span className="text-error font-data-mono text-data-mono font-medium">T° 38.8 °C</span>
</div>
</div>
</div>

<div className="flex items-center justify-between md:justify-end gap-space-sm mt-space-xs md:mt-0 pt-space-xs md:pt-0">
<div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container rounded-full">
<span className="w-2 h-2 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Attente ~20 min</span>
</div>
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">notifications_active</span>
<span>Appeler</span>
</button>
</div>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all relative overflow-hidden" + (filter === 'all' || filter === 'waiting' ? '' : ' hidden')} data-queue-status="waiting">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-container-high"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pl-space-xs">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 text-secondary font-headline-md">
                BG
              </div>
<div className="flex flex-col">
<div className="flex items-center flex-wrap gap-space-xs">
<span className="font-title-sm text-title-sm text-on-surface">Bio Gounou</span>
<span className="font-body-sm text-body-sm text-secondary">(58 ans, M)</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-fixed">
                    NSIA Assurances • 80%
                  </span>
</div>
<div className="flex items-center flex-wrap gap-space-sm mt-1 text-secondary font-body-sm text-body-sm">
<span className="flex items-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-secondary">medication</span>
                    Renouvellement ordonnance HTA
                  </span>
<span>•</span>
<span className="font-data-mono text-data-mono">Arrivée 09:40</span>
</div>
</div>
</div>

<div className="flex items-center justify-between md:justify-end gap-space-sm mt-space-xs md:mt-0 pt-space-xs md:pt-0">
<div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-high/60 rounded-full">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Attente ~35 min</span>
</div>
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">notifications_active</span>
<span>Appeler</span>
</button>
</div>
</div>
</div>
<div className={"bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all relative overflow-hidden" + (filter === 'all' || filter === 'waiting' ? '' : ' hidden')} data-queue-status="waiting">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-container-high"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pl-space-xs">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 text-secondary font-headline-md">
                MH
              </div>
<div className="flex flex-col">
<div className="flex items-center flex-wrap gap-space-xs">
<span className="font-title-sm text-title-sm text-on-surface">Marie-Claire Houngbo</span>
<span className="font-body-sm text-body-sm text-secondary">(19 ans, F)</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface font-medium">
                    Privé
                  </span>
</div>
<div className="flex items-center flex-wrap gap-space-sm mt-1 text-secondary font-body-sm text-body-sm">
<span className="flex items-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-secondary">clinical_notes</span>
                    Consultation générale
                  </span>
<span>•</span>
<span className="font-data-mono text-data-mono">Arrivée 09:50</span>
</div>
</div>
</div>

<div className="flex items-center justify-between md:justify-end gap-space-sm mt-space-xs md:mt-0 pt-space-xs md:pt-0">
<div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-high/60 rounded-full">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Attente ~45 min</span>
</div>
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">notifications_active</span>
<span>Appeler</span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary">5 sur 5 dossiers affichés</span>
<button className="flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant transition-colors">
<span>Voir toute la file d'attente complète</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface">Planning du jour</h2>
<span className="font-body-sm text-body-sm text-secondary">Aujourd'hui, 24 Octobre 2024</span>
</div>
<button className="flex items-center gap-space-xs px-space-md py-2 bg-primary hover:bg-on-primary-fixed-variant text-on-primary rounded-lg font-label-sm text-label-sm shadow-sm transition-all">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Ajouter RDV</span>
</button>
</div>

<div className="mt-space-xs p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">event_available</span>
</div>
<div className="flex flex-col">
<span className="font-title-sm text-title-sm text-on-surface leading-tight">3 créneaux restants</span>
<span className="font-body-sm text-body-sm text-secondary">Disponibilités cet après-midi (15h30, 16h15, 17h00)</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md relative">
<div className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Programme consultations • Dr. Mensah</div>

<div className="relative pl-6 space-y-space-md">

<div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-surface-container"></div>

<div className="relative group">
<div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
<div className="bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="font-data-mono text-data-mono text-primary font-semibold">08:30 - 09:00</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-primary text-on-primary font-semibold">En cours</span>
</div>
<div className="font-title-sm text-title-sm text-on-surface">Koffi Agossou</div>
<div className="font-body-sm text-body-sm text-secondary">Consultation cardiologique d'orientation</div>
<div className="mt-1 flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
<span className="material-symbols-outlined text-[14px]">local_hospital</span> Cabinet 1 (Dr. Mensah)
              </div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-tertiary ring-4 ring-surface-container-lowest"></div>
<div className="bg-surface-container-lowest hover:bg-surface-container-low p-space-md rounded-xl transition-colors shadow-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-data-mono text-data-mono text-secondary font-semibold">09:15 - 09:45</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-tertiary font-semibold">Confirmé</span>
</div>
<div className="font-title-sm text-title-sm text-on-surface">Aïcha Bello</div>
<div className="font-body-sm text-body-sm text-secondary">Suivi gynécologique (Échographie T2)</div>
<div className="mt-1 flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
<span className="material-symbols-outlined text-[14px]">health_and_safety</span> Sanlam Bénin
              </div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-tertiary ring-4 ring-surface-container-lowest"></div>
<div className="bg-surface-container-lowest hover:bg-surface-container-low p-space-md rounded-xl transition-colors shadow-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-data-mono text-data-mono text-secondary font-semibold">10:00 - 10:30</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-tertiary font-semibold">Confirmé</span>
</div>
<div className="font-title-sm text-title-sm text-on-surface">Emmanuel Soglo</div>
<div className="font-body-sm text-body-sm text-secondary">Bilan de santé annuel d'entreprise</div>
<div className="mt-1 flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
<span className="material-symbols-outlined text-[14px]">shield</span> Assurances Africaines (AAA)
              </div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-tertiary ring-4 ring-surface-container-lowest"></div>
<div className="bg-surface-container-lowest hover:bg-surface-container-low p-space-md rounded-xl transition-colors shadow-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-data-mono text-data-mono text-secondary font-semibold">10:30 - 11:00</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-tertiary font-semibold">Confirmé</span>
</div>
<div className="font-title-sm text-title-sm text-on-surface">Félicité Zinsou</div>
<div className="font-body-sm text-body-sm text-secondary">Pédiatrie (Vaccination Pentavalent rappel)</div>
<div className="mt-1 flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
<span className="material-symbols-outlined text-[14px]">health_and_safety</span> Sanlam Assurance
              </div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></div>
<div className="bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="font-data-mono text-data-mono text-secondary font-semibold">11:15 - 11:45</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-fixed font-semibold">Staff Interne</span>
</div>
<div className="font-title-sm text-title-sm text-on-surface">Dr. Mensah &amp; Infirmiers</div>
<div className="font-body-sm text-body-sm text-secondary">Réunion staff médical &amp; revue de cas complexes</div>
<div className="mt-1 flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
<span className="material-symbols-outlined text-[14px]">groups</span> Salle polyvalente Sainte-Marie
              </div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-surface-variant ring-4 ring-surface-container-lowest"></div>
<div className="bg-surface-container-lowest hover:bg-surface-container-low p-space-md rounded-xl transition-colors shadow-sm">
<div className="flex items-center justify-between mb-1">
<span className="font-data-mono text-data-mono text-secondary font-semibold">14:00 - 14:30</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-secondary font-semibold">En attente confirmation</span>
</div>
<div className="font-title-sm text-title-sm text-on-surface">Marcel Codjia</div>
<div className="font-body-sm text-body-sm text-secondary">Diabétologie suivi &amp; lecture glycémie</div>
<div className="mt-1 flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
<span className="material-symbols-outlined text-[14px]">credit_card</span> Paiement Mobile Moov / Espèces
              </div>
</div>
</div>
</div>

<div className="pt-space-sm flex items-center justify-between border-t-0 text-secondary">
<button className="flex items-center gap-1 font-label-sm text-label-sm hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[16px]">print</span>
            Imprimer l'ordre du jour
          </button>
<button className="flex items-center gap-1 font-label-sm text-label-sm hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[16px]">download</span>
            Exporter PDF
          </button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-title-sm text-title-sm text-on-surface">Enregistrement Rapide Triage</span>
<span className="material-symbols-outlined text-primary text-[20px]">assignment_add</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Assignation directe au poste d'accueil infirmier sans interruption du flux.</p>
<div className="flex items-center gap-space-sm mt-space-xs">
<input className="w-full h-10 px-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container" placeholder="N° IPU ou Nom du patient..." type="text"/>
<button className="px-4 h-10 bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:bg-on-primary-fixed-variant transition-colors flex-shrink-0">
            Admettre
          </button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}

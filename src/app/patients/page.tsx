export default function PatientsPage() {
  return (
    <>
<div className="flex flex-col w-full">



<div className="p-space-lg flex flex-col gap-space-lg max-w-[1600px] mx-auto w-full">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xxs">
<div className="flex items-center gap-space-xs text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary">folder_shared</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Patientèle • Dossier Médical Partagé</span>
<span className="text-outline">•</span>
<span className="font-data-mono text-label-sm text-tertiary font-semibold">Clinique Sainte-Marie Cotonou</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Répertoire des Patients &amp; Suivi Patientèle</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Gestion centralisée des dossiers médicaux, télé-relances préventives et suivi des prises en charge partenaires (NSIA, Sanlam, Atlantique, Ascoma).
        </p>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="flex items-center gap-space-xs h-10 px-space-md bg-surface-container text-on-surface rounded-lg font-label-lg text-label-lg hover:bg-surface-container-high transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">file_download</span>
<span>Exporter (CSV/Excel)</span>
</button>
<button className="flex items-center gap-space-xs h-10 px-space-md bg-tertiary text-on-tertiary rounded-lg font-label-lg text-label-lg hover:bg-tertiary-container transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px]">chat</span>
<span>Campagne WhatsApp</span>
</button>
<button className="flex items-center gap-space-xs h-10 px-space-lg bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-on-primary-fixed-variant transition-all shadow-md">
<span className="material-symbols-outlined text-[20px]">person_add</span>
<span>+ Nouveau Dossier</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Total Dossiers Actifs</span>
<span className="inline-flex items-center gap-space-xxs px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
            +18 ce mois
          </span>
</div>
<div className="my-space-xs flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">1 428</span>
<span className="font-label-md text-label-md text-outline">patients</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
<span className="flex items-center gap-space-xxs">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            1 290 suivis réguliers
          </span>
<span className="font-data-mono text-label-sm text-tertiary">Actifs 100%</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute right-0 top-0 w-24 h-24 bg-secondary-container/30 rounded-full -mr-8 -mt-8 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Patients Assurés</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
            62.4% Tiers-Payant
          </span>
</div>
<div className="my-space-xs flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">892</span>
<span className="font-label-md text-label-md text-outline">assurés</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
<span className="truncate">NSIA • Sanlam • Atlantique • Ascoma</span>
<span className="font-data-mono text-label-sm text-primary">Tiers direct</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute right-0 top-0 w-24 h-24 bg-tertiary/5 rounded-full -mr-8 -mt-8 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Relances WhatsApp</span>
<span className="inline-flex items-center gap-space-xxs px-2 py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">verified</span>
            94% confirment
          </span>
</div>
<div className="my-space-xs flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg font-bold text-tertiary tracking-tight">34</span>
<span className="font-label-md text-label-md text-on-surface-variant">cette semaine</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
<span className="flex items-center gap-space-xxs">
<span className="material-symbols-outlined text-[15px] text-tertiary">check_circle</span>
            32 consultations honorées
          </span>
<span className="font-data-mono text-label-sm text-outline">+229 API</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute right-0 top-0 w-24 h-24 bg-primary-fixed/20 rounded-full -mr-8 -mt-8 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">RDV Cette Semaine</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
            Agenda plein à 88%
          </span>
</div>
<div className="my-space-xs flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">46</span>
<span className="font-label-md text-label-md text-outline">programmés</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
<span className="flex items-center gap-space-xxs text-primary font-medium">
<span className="material-symbols-outlined text-[15px]">calendar_today</span>
            11 aujourd'hui
          </span>
<span className="font-data-mono text-label-sm text-error">4 en attente</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">

<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">

<div className="relative flex-1 flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px]">search</span>
<input className="w-full h-11 pl-11 pr-24 bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" id="patientFilterInput" placeholder="Rechercher par nom, prénom, N° IPU (#SM-...), téléphone (+229)..." type="text"/>
<div className="absolute right-2.5 flex items-center gap-space-xxs">
<kbd className="hidden sm:inline-block px-2 py-0.5 bg-surface-container text-on-surface-variant font-data-mono text-label-sm rounded shadow-sm">⌘K</kbd>
</div>
</div>

<div className="flex flex-wrap sm:flex-nowrap items-center gap-space-sm shrink-0">

<div className="relative flex items-center min-w-[200px]">
<span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">verified_user</span>
<select className="w-full h-11 pl-9 pr-8 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-lowest appearance-none cursor-pointer">
<option value="all">Toutes les assurances</option>
<option value="nsia">NSIA Assurances Bénin</option>
<option value="sanlam">Sanlam Bénin</option>
<option value="atlantique">Atlantique Assurances</option>
<option value="ascoma">Ascoma Bénin</option>
<option value="direct">Privé / Comptant Direct</option>
</select>
<span className="material-symbols-outlined absolute right-3 pointer-events-none text-outline text-[18px]">expand_more</span>
</div>

<div className="relative flex items-center min-w-[180px]">
<span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">stethoscope</span>
<select className="w-full h-11 pl-9 pr-8 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-lowest appearance-none cursor-pointer">
<option value="all">Toutes spécialités</option>
<option value="cardio">Cardiologie</option>
<option value="gyn">Gynécologie-Obstétrique</option>
<option value="general">Médecine Générale</option>
<option value="pediatrie">Pédiatrie</option>
<option value="diabete">Diabétologie</option>
</select>
<span className="material-symbols-outlined absolute right-3 pointer-events-none text-outline text-[18px]">expand_more</span>
</div>

<button className="h-11 px-space-md bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md rounded-lg flex items-center gap-space-xs transition-colors">
<span className="material-symbols-outlined text-[18px]">sort</span>
<span className="hidden md:inline">Trier par :</span>
<span className="font-semibold text-on-surface">Dernière visite</span>
</button>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 text-on-surface">
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-primary text-on-primary shadow-sm shrink-0 flex items-center gap-space-xs">
<span>Tous les patients</span>
<span className="bg-primary-fixed-dim/30 text-on-primary px-1.5 py-0.2 rounded-full font-data-mono text-[11px]">1 428</span>
</button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface shrink-0 flex items-center gap-space-xs transition-colors">
<span>Assurés (Tiers-Payant)</span>
<span className="bg-surface-container text-on-surface-variant px-1.5 py-0.2 rounded-full font-data-mono text-[11px]">892</span>
</button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface shrink-0 flex items-center gap-space-xs transition-colors">
<span>Privés / Direct</span>
<span className="bg-surface-container text-on-surface-variant px-1.5 py-0.2 rounded-full font-data-mono text-[11px]">536</span>
</button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface shrink-0 flex items-center gap-space-xs transition-colors">
<span>RDV cette semaine</span>
<span className="bg-tertiary/10 text-tertiary px-1.5 py-0.2 rounded-full font-data-mono text-[11px] font-bold">46</span>
</button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface shrink-0 flex items-center gap-space-xs transition-colors">
<span>Maladies Chroniques (HTA / Diabète)</span>
<span className="bg-error-container text-on-error-container px-1.5 py-0.2 rounded-full font-data-mono text-[11px] font-bold">184</span>
</button>
<button className="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface shrink-0 flex items-center gap-space-xs transition-colors">
<span>Relances requises</span>
<span className="bg-secondary-container text-on-secondary-container px-1.5 py-0.2 rounded-full font-data-mono text-[11px]">27</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-outline font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-sm pl-space-md pr-space-sm" scope="col">Patient / Identifiant IPU</th>
<th className="py-space-sm px-space-sm" scope="col">Contact (Bénin +229)</th>
<th className="py-space-sm px-space-sm" scope="col">Groupe &amp; Alertes</th>
<th className="py-space-sm px-space-sm" scope="col">Couverture Assurance</th>
<th className="py-space-sm px-space-sm" scope="col">Dernière Consultation</th>
<th className="py-space-sm px-space-sm" scope="col">Prochain RDV</th>
<th className="py-space-sm px-space-sm" scope="col">Suivi &amp; Fidélisation</th>
<th className="py-space-sm pr-space-md pl-space-sm text-right" scope="col">Actions Cliniques</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface">

<tr className="hover:bg-surface-container-low/70 transition-colors group">
<td className="py-space-sm pl-space-md pr-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-title-sm text-title-sm flex items-center justify-center font-bold">
                    RH
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors flex items-center gap-space-xxs">
                      Rodrigue Hounkpatin
                    </span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="font-data-mono text-[12px] font-semibold text-primary">#SM-2024-9102</span>
<span>•</span>
<span>42 ans (H)</span>
</div>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono text-on-surface font-semibold flex items-center gap-space-xxs">
                    +229 97 12 34 56
                  </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    WhatsApp Vérifié
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-xxs">
<span className="inline-flex items-center px-2 py-0.5 rounded font-data-mono text-[11px] font-bold bg-error-container text-on-error-container">
                    O+
                  </span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">
                    RAS
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-blue-50 text-blue-800 font-semibold w-max">
<span className="material-symbols-outlined text-[14px]">shield</span>
                    NSIA Assurances 80%
                  </span>
<span className="font-label-sm text-[11px] text-outline pl-1">Matricule: NS-8921-BEN</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">18 Oct 2024</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">cardiology</span>
                    Cardiologie (Dr. Mensah)
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-semibold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">event_available</span>
                    26 Oct • 10:00
                  </span>
<span className="font-label-sm text-[11px] text-tertiary">Confirmé par SMS</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Protocole à jour
                </span>
</td>
<td className="py-space-sm pr-space-md pl-space-sm text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm bg-tertiary/10 text-tertiary hover:bg-tertiary hover:text-on-tertiary rounded-lg font-label-md text-label-md flex items-center gap-1 transition-all" title="Envoyer un rappel WhatsApp">
<span className="material-symbols-outlined text-[16px]">chat</span>
<span>Relancer</span>
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors" title="Ouvrir le dossier médical">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-outline transition-colors" title="Options complémentaires">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="bg-surface-container-low/20 hover:bg-surface-container-low/70 transition-colors group">
<td className="py-space-sm pl-space-md pr-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-title-sm text-title-sm flex items-center justify-center font-bold">
                    NZ
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors">
                      Nadège Zinsou
                    </span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="font-data-mono text-[12px] font-semibold text-primary">#SM-2024-8840</span>
<span>•</span>
<span>29 ans (F)</span>
</div>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono text-on-surface font-semibold">
                    +229 95 44 82 10
                  </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    WhatsApp Vérifié
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-xxs">
<span className="inline-flex items-center px-2 py-0.5 rounded font-data-mono text-[11px] font-bold bg-error-container text-on-error-container">
                    A+
                  </span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">
                    Grossesse T2
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-sky-50 text-sky-800 font-semibold w-max">
<span className="material-symbols-outlined text-[14px]">shield</span>
                    Sanlam Bénin 80%
                  </span>
<span className="font-label-sm text-[11px] text-outline pl-1">Matricule: SNL-3104-COT</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">12 Oct 2024</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">pregnant_woman</span>
                    Gynécologie (Dr. Alapini)
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-semibold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">event_available</span>
                    28 Oct • 14:30
                  </span>
<span className="font-label-sm text-[11px] text-outline">Échographie T2</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px]">notification_important</span>
                  Rappel prénatal J-4
                </span>
</td>
<td className="py-space-sm pr-space-md pl-space-sm text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm bg-tertiary/10 text-tertiary hover:bg-tertiary hover:text-on-tertiary rounded-lg font-label-md text-label-md flex items-center gap-1 transition-all" title="Envoyer un rappel WhatsApp">
<span className="material-symbols-outlined text-[16px]">chat</span>
<span>Relancer</span>
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors" title="Ouvrir le dossier médical">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-outline transition-colors" title="Options complémentaires">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/70 transition-colors group">
<td className="py-space-sm pl-space-md pr-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-title-sm text-title-sm flex items-center justify-center font-bold">
                    JH
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors">
                      Jean-Baptiste Houngbédji
                    </span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="font-data-mono text-[12px] font-semibold text-primary">#SM-2024-7105</span>
<span>•</span>
<span>48 ans (H)</span>
</div>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono text-on-surface font-semibold">
                    +229 97 42 18 90
                  </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    WhatsApp Vérifié
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-xxs">
<span className="inline-flex items-center px-2 py-0.5 rounded font-data-mono text-[11px] font-bold bg-error-container text-on-error-container">
                    B+
                  </span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error/10 text-error font-label-sm text-[11px] font-semibold">
                    HTA Sévère
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-indigo-50 text-indigo-800 font-semibold w-max">
<span className="material-symbols-outlined text-[14px]">shield</span>
                    Atlantique Assur. 80%
                  </span>
<span className="font-label-sm text-[11px] text-outline pl-1">Matricule: AT-1092-DIR</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">24 Oct 2024</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">cardiology</span>
                    Cardiologie (Dr. Mensah)
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-medium text-error flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">event_busy</span>
                    Non programmé
                  </span>
<span className="font-label-sm text-[11px] text-error font-medium">ECG contrôle requis</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold animate-pulse">
<span className="material-symbols-outlined text-[12px]">schedule_send</span>
                  Relance prioritaire
                </span>
</td>
<td className="py-space-sm pr-space-md pl-space-sm text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm bg-error text-on-error hover:bg-on-error-container rounded-lg font-label-md text-label-md flex items-center gap-1 transition-all shadow-sm" title="Envoyer un rappel WhatsApp d'urgence">
<span className="material-symbols-outlined text-[16px]">send</span>
<span>Relancer RDV</span>
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors" title="Ouvrir le dossier médical">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-outline transition-colors" title="Options complémentaires">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="bg-surface-container-low/20 hover:bg-surface-container-low/70 transition-colors group">
<td className="py-space-sm pl-space-md pr-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container text-primary font-title-sm text-title-sm flex items-center justify-center font-bold">
                    MD
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors">
                      Mireille Dossou
                    </span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="font-data-mono text-[12px] font-semibold text-primary">#SM-2024-8842</span>
<span>•</span>
<span>34 ans (F)</span>
</div>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono text-on-surface font-semibold">
                    +229 96 31 09 88
                  </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    WhatsApp Vérifié
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-xxs">
<span className="inline-flex items-center px-2 py-0.5 rounded font-data-mono text-[11px] font-bold bg-error-container text-on-error-container">
                    O+
                  </span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-semibold">
                    Alerte Pénicilline
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-sky-50 text-sky-800 font-semibold w-max">
<span className="material-symbols-outlined text-[14px]">shield</span>
                    Sanlam Bénin 80%
                  </span>
<span className="font-label-sm text-[11px] text-outline pl-1">Matricule: SNL-8842-P</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">23 Oct 2024</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">medical_services</span>
                    Médecine Générale (Dr. Mensah)
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-semibold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">event_available</span>
                    02 Nov • 09:15
                  </span>
<span className="font-label-sm text-[11px] text-outline">Bilan de contrôle</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-medium">
<span className="material-symbols-outlined text-[12px] text-tertiary">check</span>
                  Relance programmée J-2
                </span>
</td>
<td className="py-space-sm pr-space-md pl-space-sm text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm bg-tertiary/10 text-tertiary hover:bg-tertiary hover:text-on-tertiary rounded-lg font-label-md text-label-md flex items-center gap-1 transition-all" title="Envoyer un rappel WhatsApp">
<span className="material-symbols-outlined text-[16px]">chat</span>
<span>Relancer</span>
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors" title="Ouvrir le dossier médical">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-outline transition-colors" title="Options complémentaires">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/70 transition-colors group">
<td className="py-space-sm pl-space-md pr-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-title-sm text-title-sm flex items-center justify-center font-bold">
                    KA
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors">
                      Koffi Agossou
                    </span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="font-data-mono text-[12px] font-semibold text-primary">#SM-2024-1025</span>
<span>•</span>
<span>42 ans (H)</span>
</div>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono text-on-surface font-semibold">
                    +229 94 15 27 63
                  </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    WhatsApp Vérifié
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-xxs">
<span className="inline-flex items-center px-2 py-0.5 rounded font-data-mono text-[11px] font-bold bg-error-container text-on-error-container">
                    AB+
                  </span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">
                    Asthme léger
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-blue-50 text-blue-800 font-semibold w-max">
<span className="material-symbols-outlined text-[14px]">shield</span>
                    NSIA Assurances 80%
                  </span>
<span className="font-label-sm text-[11px] text-outline pl-1">Matricule: NS-4410-POL</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">22 Oct 2024</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">biotech</span>
                    Bilan Biologique (Laboratoire)
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-semibold text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">event_available</span>
                    25 Oct • 08:30
                  </span>
<span className="font-label-sm text-[11px] text-tertiary font-bold">Demain matin</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[12px]">done_all</span>
                  Relancé hier (Confirmé)
                </span>
</td>
<td className="py-space-sm pr-space-md pl-space-sm text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm bg-tertiary/10 text-tertiary hover:bg-tertiary hover:text-on-tertiary rounded-lg font-label-md text-label-md flex items-center gap-1 transition-all" title="Envoyer un rappel WhatsApp">
<span className="material-symbols-outlined text-[16px]">chat</span>
<span>Relancer</span>
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors" title="Ouvrir le dossier médical">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-outline transition-colors" title="Options complémentaires">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="bg-surface-container-low/20 hover:bg-surface-container-low/70 transition-colors group">
<td className="py-space-sm pl-space-md pr-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-title-sm text-title-sm flex items-center justify-center font-bold">
                    AB
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors">
                      Aïcha Bello
                    </span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="font-data-mono text-[12px] font-semibold text-primary">#SM-2024-3318</span>
<span>•</span>
<span>29 ans (F)</span>
</div>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono text-on-surface font-semibold">
                    +229 97 88 51 04
                  </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    WhatsApp Vérifié
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-xxs">
<span className="inline-flex items-center px-2 py-0.5 rounded font-data-mono text-[11px] font-bold bg-error-container text-on-error-container">
                    O+
                  </span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">
                    Nourrisson suivi
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-sky-50 text-sky-800 font-semibold w-max">
<span className="material-symbols-outlined text-[14px]">shield</span>
                    Sanlam Bénin 70%
                  </span>
<span className="font-label-sm text-[11px] text-outline pl-1">Matricule: SNL-3318-K</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">20 Oct 2024</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">child_care</span>
                    Pédiatrie (Dr. Akpovi)
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-semibold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">event_available</span>
                    05 Nov • 11:00
                  </span>
<span className="font-label-sm text-[11px] text-outline">Vaccination 9 mois</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[12px]">vaccines</span>
                  Rappel vaccinal dû
                </span>
</td>
<td className="py-space-sm pr-space-md pl-space-sm text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm bg-tertiary/10 text-tertiary hover:bg-tertiary hover:text-on-tertiary rounded-lg font-label-md text-label-md flex items-center gap-1 transition-all" title="Envoyer un rappel WhatsApp">
<span className="material-symbols-outlined text-[16px]">chat</span>
<span>Relancer</span>
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors" title="Ouvrir le dossier médical">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-outline transition-colors" title="Options complémentaires">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/70 transition-colors group">
<td className="py-space-sm pl-space-md pr-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface font-title-sm text-title-sm flex items-center justify-center font-bold">
                    MC
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors">
                      Marcel Codjia
                    </span>
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="font-data-mono text-[12px] font-semibold text-primary">#SM-2024-4211</span>
<span>•</span>
<span>54 ans (H)</span>
</div>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono text-on-surface font-semibold">
                    +229 95 60 11 22
                  </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    WhatsApp Vérifié
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-xxs">
<span className="inline-flex items-center px-2 py-0.5 rounded font-data-mono text-[11px] font-bold bg-error-container text-on-error-container">
                    B-
                  </span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error/10 text-error font-label-sm text-[11px] font-semibold">
                    Diabète Type 2
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface font-semibold w-max">
<span className="material-symbols-outlined text-[14px] text-outline">payments</span>
                    Privé (Direct 100%)
                  </span>
<span className="font-label-sm text-[11px] text-outline pl-1">Règlement Mobile Money / Espèces</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-medium">05 Oct 2024</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">bloodtype</span>
                    Diabétologie (Dr. Mensah)
                  </span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-medium text-error flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span>
                    Non programmé
                  </span>
<span className="font-label-sm text-[11px] text-error font-medium">Retard HbA1c (19j)</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[12px]">notification_important</span>
                  Bilan trimestriel dû
                </span>
</td>
<td className="py-space-sm pr-space-md pl-space-sm text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm bg-tertiary text-on-tertiary hover:bg-tertiary-container rounded-lg font-label-md text-label-md flex items-center gap-1 transition-all shadow-sm" title="Envoyer un rappel de bilan par WhatsApp">
<span className="material-symbols-outlined text-[16px]">chat</span>
<span>Relancer Bilan</span>
</button>
<button className="h-8 w-8 rounded-lg bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors" title="Ouvrir le dossier médical">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-outline transition-colors" title="Options complémentaires">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant">
          Affichage de <span className="font-semibold text-on-surface">1 - 7</span> sur <span className="font-semibold text-on-surface">1 428</span> dossiers répertoriés
        </span>
<div className="flex items-center gap-space-xs">
<button className="h-8 px-space-sm bg-surface-container-lowest text-on-surface font-label-sm text-label-sm rounded-lg hover:bg-surface-container transition-colors disabled:opacity-40" disabled>
            Précédent
          </button>
<button className="h-8 w-8 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold flex items-center justify-center shadow-sm">
            1
          </button>
<button className="h-8 w-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center transition-colors">
            2
          </button>
<button className="h-8 w-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center transition-colors">
            3
          </button>
<span className="text-outline px-1">...</span>
<button className="h-8 w-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center transition-colors">
            204
          </button>
<button className="h-8 px-space-sm bg-surface-container-lowest text-on-surface font-label-sm text-label-sm rounded-lg hover:bg-surface-container transition-colors">
            Suivant
          </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col lg:flex-row gap-space-xl items-stretch">

<div className="flex-1 flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-xxs">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">chat</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">Programme de Prévention &amp; Télé-Relances WhatsApp</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            Automatisation des rappels de rendez-vous, convocations pour bilans chroniques (diabète, HTA) et confirmations instantanées via l'API officielle WhatsApp Business Bénin.
          </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Délivrabilité WhatsApp</span>
<span className="font-display-lg text-[22px] font-bold text-tertiary">99.2%</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Réseaux MTN / Moov Bénin</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Réduction Absences (No-Show)</span>
<span className="font-display-lg text-[22px] font-bold text-primary">-41.5%</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Observé depuis 3 mois</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Délai Moyen Réponse</span>
<span className="font-display-lg text-[22px] font-bold text-on-surface">14 min</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Confirmation en un clic</span>
</div>
</div>
<div className="flex items-center gap-space-sm pt-space-xxs">
<div className="flex items-center gap-space-xxs text-tertiary font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span>Connecteur API Bénin Opérationnel (+229 21 30 11 00)</span>
</div>
<span className="text-outline">•</span>
<a className="text-primary hover:underline font-label-md text-label-md" href="#">Configurer les modèles d'envoi →</a>
</div>
</div>

<div className="w-full lg:w-[460px] bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[18px]">forum</span>
            Modèle de Relance Actif • Rappel RDV
          </span>
<span className="bg-tertiary/10 text-tertiary font-label-sm text-[11px] px-2 py-0.5 rounded-full font-bold">Standard</span>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm text-on-surface font-body-sm text-body-sm flex flex-col gap-space-xs relative">
<div className="flex items-center justify-between border-b pb-1 text-on-surface-variant">
<span className="font-semibold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">local_hospital</span>
              Clinique Sainte-Marie Cotonou
            </span>
<span className="font-data-mono text-[11px]">Aujourd'hui 09:12</span>
</div>
<p className="leading-relaxed">
            Bonjour <strong>M. Rodrigue Hounkpatin</strong>, nous vous rappelons votre consultation de suivi en <strong>Cardiologie</strong> avec le <strong>Dr. Mensah</strong> prévue le :
          </p>
<div className="bg-surface-container-low p-2 rounded-lg font-data-mono text-body-sm font-semibold text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">calendar_clock</span>
            Samedi 26 Octobre 2024 à 10:00
          </div>
<p className="text-on-surface-variant text-[12px]">
            Pour confirmer votre venue, veuillez répondre <strong>1</strong>. Pour reporter ou annuler, répondez <strong>2</strong> ou contactez le +229 21 30 11 00.
          </p>
<div className="flex items-center justify-end gap-1 text-[11px] text-tertiary pt-1">
<span>Délivré</span>
<span className="material-symbols-outlined text-[14px]">done_all</span>
</div>
</div>

<div className="flex items-center gap-space-xs pt-space-xxs">
<button className="flex-1 h-9 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[16px]">send</span>
<span>Tester l'envoi WhatsApp</span>
</button>
<button className="h-9 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">tune</span>
<span>Personnaliser</span>
</button>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}

export default function AgendaPage() {
  return (
    <>
<div className="px-space-lg">
<div className="flex flex-col w-full pb-space-2xl gap-y-space-lg">

<header className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-data-mono text-label-sm uppercase tracking-wider text-primary font-bold">PLANIFICATION CLINIQUE • GESTION DU TEMPS MÉDICAL</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-data-mono text-label-sm">S47 • 2026</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Agenda Médical</h1>
<p className="font-body-md text-body-md text-secondary">
        Planification des consultations et rendez-vous — Semaine du 18 au 24 novembre 2026
      </p>
</div>

<div className="flex flex-wrap items-center gap-space-sm">

<div className="flex items-center bg-surface-container-low rounded-lg p-1">
<button aria-label="Semaine précédente" className="h-9 px-2.5 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
<span className="hidden xl:inline font-label-md text-label-md ml-1">Précédente</span>
</button>
<button className="h-9 px-3 rounded-lg bg-surface-container-lowest shadow-sm font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5 mx-1" type="button">
<span className="material-symbols-outlined text-[16px] text-primary">today</span>
<span>Aujourd'hui</span>
</button>
<button aria-label="Semaine suivante" className="h-9 px-2.5 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" type="button">
<span className="hidden xl:inline font-label-md text-label-md mr-1">Suivante</span>
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>

<div className="flex items-center bg-surface-container-low p-1 rounded-lg">
<button className="h-9 px-3.5 rounded-lg font-label-md text-label-md transition-colors bg-primary text-on-primary font-semibold shadow-sm" type="button">
          Semaine
        </button>
<button className="h-9 px-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button">
          Mois
        </button>
<button className="h-9 px-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button">
          Jour
        </button>
</div>

<button className="h-10 px-3 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-label-md text-label-md rounded-lg flex items-center gap-1.5 transition-colors shadow-sm" title="Exporter le planning" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">ios_share</span>
<span className="hidden md:inline">Exporter</span>
</button>

<button className="h-10 px-4 bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-lg text-label-lg rounded-lg flex items-center gap-2 transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>+ Nouveau Rendez-vous</span>
</button>
</div>
</header>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Rendez-vous aujourd'hui</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
</div>
</div>
<div className="flex items-baseline gap-2 my-2">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">24</span>
<span className="font-title-sm text-title-sm text-secondary">consultations</span>
</div>
<div className="flex items-center justify-between pt-2">
<span className="font-body-sm text-body-sm text-secondary">18 honorés ou en cours</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>+3 urgences
        </span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Taux d'occupation</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary-container">
<span className="material-symbols-outlined text-[18px]">trending_up</span>
</div>
</div>
<div className="flex items-baseline gap-2 my-2">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">87 %</span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold flex items-center">
<span className="material-symbols-outlined text-[16px]">arrow_upward</span>+5% vs sem. passée
        </span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full" style={{width: "87%"}}></div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Créneaux libres</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">schedule</span>
</div>
</div>
<div className="flex items-baseline gap-2 my-2">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">6</span>
<span className="font-title-sm text-title-sm text-secondary">disponibilités</span>
</div>
<div className="flex items-center gap-2 pt-2">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary-container"></span>
<span className="font-body-sm text-body-sm text-secondary">2 créneaux d'après-midi dès 15h30</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Annulations &amp; Reports</span>
<div className="w-8 h-8 rounded-lg bg-error-container/40 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[18px]">event_busy</span>
</div>
</div>
<div className="flex items-baseline gap-2 my-2">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">2</span>
<span className="font-title-sm text-title-sm text-error">dossiers</span>
</div>
<div className="flex items-center justify-between pt-2">
<span className="font-body-sm text-body-sm text-secondary">Prévenus via WhatsApp</span>
<span className="font-data-mono text-label-sm text-on-surface-variant font-medium">Réassignés</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<section className="lg:col-span-8 xl:col-span-9 flex flex-col gap-space-md bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-sm">
<div className="flex flex-wrap items-center gap-space-sm">

<div className="relative inline-flex items-center">
<span className="material-symbols-outlined absolute left-2.5 text-[18px] text-primary">stethoscope</span>
<select aria-label="Filtrer par praticien" className="pl-8 pr-8 py-2 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer appearance-none">
<option>Dr. Mensah — Médecin Chef (Tous cabinets)</option>
<option>Dr. Lawson — Cardiologie (Cabinet 2)</option>
<option>Dr. Akplogan — Pédiatrie (Cabinet 3)</option>
<option>Cabinet 1 — Médecine générale polyvalente</option>
</select>
<span className="material-symbols-outlined absolute right-2 pointer-events-none text-[16px] text-secondary">expand_more</span>
</div>

<div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Zone :</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface px-1.5 py-0.5 rounded bg-surface-container-lowest shadow-xs">Cotonou Plateau</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-3">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span>Confirmé</span>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-container"></span>
<span>Arrivé / En cours</span>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span>En attente</span>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2.5 h-2.5 rounded-full bg-error"></span>
<span>Urgence / Annulé</span>
</div>
</div>
</div>

<div className="w-full overflow-x-auto">
<div className="min-w-[840px] flex flex-col">

<div className="grid grid-cols-7 gap-2 pb-space-sm">

<div className="p-2 text-center rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">LUN</span>
<div className="font-title-sm text-title-sm font-bold text-on-surface">18 Nov</div>
<span className="font-data-mono text-label-sm text-secondary">21 RDV</span>
</div>

<div className="p-2 text-center rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">MAR</span>
<div className="font-title-sm text-title-sm font-bold text-on-surface">19 Nov</div>
<span className="font-data-mono text-label-sm text-secondary">26 RDV</span>
</div>

<div className="p-2 text-center rounded-lg bg-primary-container text-on-primary-container relative shadow-sm">
<span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-[10px] tracking-wide uppercase font-bold shadow-xs">Aujourd'hui</span>
<span className="font-label-sm text-label-sm text-on-primary-container/80 uppercase font-semibold mt-1 inline-block">MER</span>
<div className="font-title-sm text-title-sm font-bold text-on-primary-container">20 Nov</div>
<span className="font-data-mono text-label-sm text-on-primary-container font-semibold">24 RDV</span>
</div>

<div className="p-2 text-center rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">JEU</span>
<div className="font-title-sm text-title-sm font-bold text-on-surface">21 Nov</div>
<span className="font-data-mono text-label-sm text-secondary">19 RDV</span>
</div>

<div className="p-2 text-center rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">VEN</span>
<div className="font-title-sm text-title-sm font-bold text-on-surface">22 Nov</div>
<span className="font-data-mono text-label-sm text-secondary">22 RDV</span>
</div>

<div className="p-2 text-center rounded-lg bg-surface-container-low/70">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">SAM</span>
<div className="font-title-sm text-title-sm font-bold text-on-surface">23 Nov</div>
<span className="font-data-mono text-label-sm text-secondary">Matinée</span>
</div>

<div className="p-2 text-center rounded-lg bg-surface-container-low/50">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">DIM</span>
<div className="font-title-sm text-title-sm font-bold text-on-surface">24 Nov</div>
<span className="font-label-sm text-label-sm text-error font-medium">Garde 24/7</span>
</div>
</div>

<div className="flex flex-col gap-2 mt-2">

<div className="grid grid-cols-7 gap-2 items-stretch min-h-[96px]">

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">08:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">clinical_notes</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Rodrigue Hounkpatin</div>
<span className="font-label-sm text-label-sm text-secondary">Générale • Checkup</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Passé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">08:30</span>
<span className="material-symbols-outlined text-[14px] text-tertiary-container">cardiology</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Nadège Zinsou</div>
<span className="font-label-sm text-label-sm text-secondary">Cardio • NSIA 80%</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Honoré</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-md flex flex-col justify-between relative pl-3.5 ring-2 ring-tertiary-container/30">
<span className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-container rounded-l-lg"></span>
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm font-bold text-tertiary-container">08:30 - 09:15</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse"></span>En cours
                    </span>
</div>
<div className="font-title-sm text-title-sm font-bold text-on-surface mt-1 truncate">Koffi Agossou</div>
<div className="font-label-sm text-label-sm text-secondary flex items-center gap-1 truncate">
<span className="material-symbols-outlined text-[14px] text-primary">cardiology</span>
<span>Cabinet 1 • Bilan contrôle</span>
</div>
</div>
<div className="flex items-center justify-between mt-1 pt-1 bg-surface-container-low px-1.5 py-0.5 rounded">
<span className="font-label-sm text-[11px] font-semibold text-primary">NSIA Assurances</span>
<span className="font-data-mono text-label-sm text-secondary">80% TP</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">08:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">stethoscope</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Emmanuel Soglo</div>
<span className="font-label-sm text-label-sm text-secondary">Contrôle tensionnel</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-secondary-container text-on-secondary-fixed">Sanlam 80%</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">08:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">medication</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Bio Gounou</div>
<span className="font-label-sm text-label-sm text-secondary">Bilan hépatique</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container-high text-on-surface-variant">Confirmé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/70 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">08:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">child_care</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Aïcha Bello (Bébé)</div>
<span className="font-label-sm text-label-sm text-secondary">Vaccination 9 mois</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Privé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/40 flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-secondary text-[20px]">emergency</span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Urgences SM</span>
</div>
</div>

<div className="grid grid-cols-7 gap-2 items-stretch min-h-[96px]">

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">09:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">ecg_heart</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Marie-Claire Houngbo</div>
<span className="font-label-sm text-label-sm text-secondary">Électrocardiogramme</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Passé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">09:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">stethoscope</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Sèdami Dossou</div>
<span className="font-label-sm text-label-sm text-secondary">Consultation générale</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Honoré</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between relative pl-3.5">
<span className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-lg"></span>
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm font-semibold text-primary">09:30 - 10:15</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-[10px]">
                      Salle attente
                    </span>
</div>
<div className="font-title-sm text-title-sm font-bold text-on-surface mt-1 truncate">Mireille Dossou</div>
<div className="font-label-sm text-label-sm text-secondary flex items-center gap-1 truncate">
<span className="material-symbols-outlined text-[14px] text-primary">prescriptions</span>
<span>Ordonnance &amp; Suivi bio</span>
</div>
</div>
<div className="flex items-center justify-between mt-1 pt-1 bg-surface-container-low px-1.5 py-0.5 rounded">
<span className="font-label-sm text-[11px] font-semibold text-secondary">Sanlam Bénin</span>
<span className="font-data-mono text-label-sm text-secondary">80% TP</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">09:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">ecg</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Félicité Zinsou</div>
<span className="font-label-sm text-label-sm text-secondary">HTA chronique</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-secondary-container text-on-secondary-fixed">Atlantique Assur.</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">09:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">stethoscope</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Koffi Danhouan</div>
<span className="font-label-sm text-label-sm text-secondary">Pneumologie</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container-high text-on-surface-variant">Confirmé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/70 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">09:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">medical_services</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Armel Kpadé</div>
<span className="font-label-sm text-label-sm text-secondary">Contrôle post-op</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">NSIA 100%</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/40 flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-secondary text-[20px]">medical_services</span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Équipe garde</span>
</div>
</div>

<div className="grid grid-cols-7 gap-2 items-stretch min-h-[96px]">

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">10:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">water_drop</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Bertin Agbota</div>
<span className="font-label-sm text-label-sm text-secondary">Diabétologie</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Passé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">10:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">stethoscope</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Prudence Houénou</div>
<span className="font-label-sm text-label-sm text-secondary">Bilan annuel</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Honoré</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between relative pl-3.5">
<span className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-lg"></span>
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm font-semibold text-primary">10:30 - 11:15</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] font-semibold">
                      Confirmé
                    </span>
</div>
<div className="font-title-sm text-title-sm font-bold text-on-surface mt-1 truncate">J-B. Houngbédji</div>
<div className="font-label-sm text-label-sm text-secondary flex items-center gap-1 truncate">
<span className="material-symbols-outlined text-[14px] text-primary">monitor_heart</span>
<span>Suivi HTA &amp; Écho Doppler</span>
</div>
</div>
<div className="flex items-center justify-between mt-1 pt-1 bg-surface-container-low px-1.5 py-0.5 rounded">
<span className="font-label-sm text-[11px] font-semibold text-primary">Atlantique Assur.</span>
<span className="font-data-mono text-label-sm text-secondary">80% TP</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">10:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">vaccines</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Sonia Tokpo</div>
<span className="font-label-sm text-label-sm text-secondary">Vaccin Fièvre Jaune</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container-high text-on-surface-variant">Confirmé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">10:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">stethoscope</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Gérard Alapini</div>
<span className="font-label-sm text-label-sm text-secondary">Consultation senior</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-secondary-container text-on-secondary-fixed">Sanlam 90%</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/70 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">10:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">ecg_heart</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Théophile Boko</div>
<span className="font-label-sm text-label-sm text-secondary">Bilan cardiaque</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Privé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/40 flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-secondary text-[20px]">local_pharmacy</span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Pharmacie H24</span>
</div>
</div>

<div className="grid grid-cols-7 gap-2 items-stretch min-h-[96px]">

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">11:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">stethoscope</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Bernadette Tossou</div>
<span className="font-label-sm text-label-sm text-secondary">Médecine générale</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Passé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">11:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">child_care</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Enfant Zossou (3 ans)</div>
<span className="font-label-sm text-label-sm text-secondary">Pédiatrie clinique</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Honoré</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between relative pl-3.5">
<span className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-lg"></span>
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm font-semibold text-primary">11:30 - 12:15</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] font-semibold">
                      Confirmé
                    </span>
</div>
<div className="font-title-sm text-title-sm font-bold text-on-surface mt-1 truncate">Aïcha Bello</div>
<div className="font-label-sm text-label-sm text-secondary flex items-center gap-1 truncate">
<span className="material-symbols-outlined text-[14px] text-primary">child_care</span>
<span>Pédiatrie • Visite 9 mois</span>
</div>
</div>
<div className="flex items-center justify-between mt-1 pt-1 bg-surface-container-low px-1.5 py-0.5 rounded">
<span className="font-label-sm text-[11px] font-semibold text-secondary">Sanlam Bénin</span>
<span className="font-data-mono text-label-sm text-secondary">70% TP</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">11:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">stethoscope</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Lucette Ahoyo</div>
<span className="font-label-sm text-label-sm text-secondary">Consultation bilan</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container-high text-on-surface-variant">Confirmé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">11:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">bloodtype</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Faustin Dah-Gbéto</div>
<span className="font-label-sm text-label-sm text-secondary">Glycémie &amp; Rein</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-secondary-container text-on-secondary-fixed">NSIA 80%</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/70 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">11:30</span>
<span className="material-symbols-outlined text-[14px] text-primary">stethoscope</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Clémentine Gbaguidi</div>
<span className="font-label-sm text-label-sm text-secondary">Fin de garde matin</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Privé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/40 flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-secondary text-[20px]">bedroom_parent</span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Hospitalisations</span>
</div>
</div>

<div className="grid grid-cols-7 gap-2 items-stretch py-1">
<div className="col-span-7 bg-surface-container-low/90 rounded-lg p-2.5 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">group_work</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">12:30 — 13:30 • Pause méridienne &amp; Staff clinique collégial (Dr. Mensah, Dr. Lawson, Infirmiers majors)</span>
</div>
<span className="font-data-mono text-label-sm text-secondary">Salle polyvalente B</span>
</div>
</div>

<div className="grid grid-cols-7 gap-2 items-stretch min-h-[96px]">

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">14:00</span>
<span className="material-symbols-outlined text-[14px] text-primary">cardiology</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Paulin Allabi</div>
<span className="font-label-sm text-label-sm text-secondary">Suivi stent</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Passé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">14:00</span>
<span className="material-symbols-outlined text-[14px] text-primary">stethoscope</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Yvette Houénou</div>
<span className="font-label-sm text-label-sm text-secondary">Bilan lipidique</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Honoré</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between relative pl-3.5">
<span className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-lg"></span>
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm font-semibold text-primary">14:00 - 14:45</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] font-semibold">
                      Confirmé
                    </span>
</div>
<div className="font-title-sm text-title-sm font-bold text-on-surface mt-1 truncate">Marcel Codjia</div>
<div className="font-label-sm text-label-sm text-secondary flex items-center gap-1 truncate">
<span className="material-symbols-outlined text-[14px] text-primary">water_drop</span>
<span>Diabétologie &amp; Profil glycémique</span>
</div>
</div>
<div className="flex items-center justify-between mt-1 pt-1 bg-surface-container-low px-1.5 py-0.5 rounded">
<span className="font-label-sm text-[11px] font-semibold text-secondary">Règlement Direct</span>
<span className="font-data-mono text-label-sm text-secondary">Privé (Caisse)</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">14:00</span>
<span className="material-symbols-outlined text-[14px] text-primary">stethoscope</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Serge Danvivi</div>
<span className="font-label-sm text-label-sm text-secondary">Consultation générale</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container-high text-on-surface-variant">Confirmé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">14:00</span>
<span className="material-symbols-outlined text-[14px] text-primary">dermatology</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Edith Gbaguidi</div>
<span className="font-label-sm text-label-sm text-secondary">Bilan cutané</span>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-secondary-container text-on-secondary-fixed">Sanlam 80%</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/40 flex flex-col justify-center items-center text-center">
<span className="font-label-sm text-label-sm text-secondary">Fermé après-midi</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/40 flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-secondary text-[20px]">medical_services</span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Urgences 24/7</span>
</div>
</div>

<div className="grid grid-cols-7 gap-2 items-stretch min-h-[90px]">

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">15:30</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Chantal Zounon</div>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Passé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">15:30</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Justin Tognon</div>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Honoré</span>
</div>

<div className="p-2.5 rounded-lg bg-tertiary-fixed-dim/20 hover:bg-tertiary-fixed-dim/30 transition-all flex flex-col justify-between group cursor-pointer">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm font-bold text-tertiary">15:30 - 16:15</span>
<span className="material-symbols-outlined text-[16px] text-tertiary group-hover:scale-110 transition-transform">add</span>
</div>
<div className="font-title-sm text-title-sm font-semibold text-tertiary mt-1">Créneau Disponible</div>
<span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant">Cabinet 1 • Dr. Mensah</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-tertiary font-bold">+ Réserver consultation</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">15:30</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Gisèle Akpo</div>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-secondary-container text-on-secondary-fixed">Atlantique 80%</span>
</div>

<div className="p-2.5 rounded-lg bg-tertiary-fixed-dim/20 hover:bg-tertiary-fixed-dim/30 transition-all flex flex-col justify-between group cursor-pointer">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm font-bold text-tertiary">15:30</span>
<span className="material-symbols-outlined text-[16px] text-tertiary">add</span>
</div>
<span className="font-title-sm text-title-sm font-semibold text-tertiary">Libre</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-bold">+ Réserver</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/40 flex flex-col justify-center items-center text-center">
<span className="font-label-sm text-label-sm text-secondary">Fermé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/40 flex flex-col justify-center items-center text-center">
<span className="font-label-sm text-label-sm text-secondary">Garde</span>
</div>
</div>

<div className="grid grid-cols-7 gap-2 items-stretch min-h-[96px]">

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">16:30</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Romain Agbo</div>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Passé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/60 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">16:30</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Désiré Boko</div>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container text-secondary">Honoré</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between relative pl-3.5">
<span className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary rounded-l-lg"></span>
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm font-semibold text-secondary">16:30 - 17:15</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-[10px] font-semibold">
<span className="material-symbols-outlined text-[12px] text-tertiary">chat</span>WhatsApp
                    </span>
</div>
<div className="font-title-sm text-title-sm font-bold text-on-surface mt-1 truncate">Félicité Zinsou</div>
<div className="font-label-sm text-label-sm text-secondary flex items-center gap-1 truncate">
<span className="material-symbols-outlined text-[14px] text-secondary">refresh</span>
<span>Renouvellement ordonnance</span>
</div>
</div>
<div className="flex items-center justify-between mt-1 pt-1 bg-surface-container-low px-1.5 py-0.5 rounded">
<span className="font-label-sm text-[11px] font-semibold text-secondary">En attente confirm.</span>
<span className="font-data-mono text-label-sm text-secondary">Relancée</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">16:30</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Honorine Dossou</div>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-surface-container-high text-on-surface-variant">Confirmé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-data-mono text-label-sm text-secondary">16:30</span>
</div>
<div className="font-label-md text-label-md font-semibold text-on-surface truncate">Abdoulaye Traoré</div>
</div>
<span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-label-sm bg-secondary-container text-on-secondary-fixed">Sanlam 80%</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/40 flex flex-col justify-center items-center text-center">
<span className="font-label-sm text-label-sm text-secondary">Fermé</span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low/40 flex flex-col justify-center items-center text-center">
<span className="font-label-sm text-label-sm text-secondary">Garde 24/7</span>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase font-bold text-secondary">Flux en direct</span>
<h2 className="font-title-sm text-title-sm text-on-surface font-bold">Rendez-vous du jour</h2>
<span className="font-body-sm text-body-sm text-secondary">Mercredi 20 Novembre 2026</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container font-data-mono text-label-sm font-bold shadow-xs">
            24 RDV
          </span>
</div>

<div className="flex flex-col gap-2">

<div className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<span className="font-data-mono text-label-sm font-bold text-primary">08:30</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Koffi Agossou (42 ans)</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Cardiologie • Cabinet 1</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold shrink-0">
              En consultation
            </span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<span className="font-data-mono text-label-sm font-bold text-secondary">09:15</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Aïcha Bello (29 ans)</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Pédiatrie • 9 mois</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-[11px] font-bold shrink-0">
              En salle d'attente
            </span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<span className="font-data-mono text-label-sm font-bold text-secondary">10:00</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Emmanuel Soglo (51 ans)</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Bilan de santé • Routine</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold shrink-0">
              Confirmé
            </span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<span className="font-data-mono text-label-sm font-bold text-secondary">10:30</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Mireille Dossou (34 ans)</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Médecine générale</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold shrink-0">
              Confirmé
            </span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<span className="font-data-mono text-label-sm font-bold text-secondary">11:15</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Dr. Mensah &amp; Infirmiers</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Staff de coordination</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold shrink-0">
              Interne
            </span>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<span className="font-data-mono text-label-sm font-bold text-secondary">14:00</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Marcel Codjia (54 ans)</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Diabétologie • Suivi bilan</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container/60 text-on-error-container font-label-sm text-[11px] font-bold shrink-0">
              À confirmer
            </span>
</div>
</div>

<a className="mt-2 w-full py-2.5 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-colors" href="#">
<span>Voir la file en Salle d'attente (7 patients)</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-[20px]">sms</span>
</div>
<div className="flex flex-col">
<h3 className="font-title-sm text-title-sm text-on-surface font-bold">Passerelle WhatsApp &amp; SMS</h3>
<span className="font-body-sm text-body-sm text-secondary">Rappels automatisés Cotonou</span>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Envoyés pour demain (Jeu 21)</span>
<span className="font-data-mono text-label-sm font-bold text-tertiary">22 notifications</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Taux de présence confirmé</span>
<span className="font-data-mono text-label-sm font-bold text-on-surface">96 %</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-tertiary h-full rounded-full" style={{width: "96%"}}></div>
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Les relances automatiques incluent le lien de géolocalisation de la Clinique Sainte-Marie (Plateau Haie Vive).
        </p>

<button className="w-full py-2.5 px-3 bg-tertiary hover:bg-tertiary-container text-on-tertiary font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">chat</span>
<span>Envoyer relance groupée WhatsApp</span>
</button>
</div>
</aside>
</div>
</div>
</div>
    </>
  );
}

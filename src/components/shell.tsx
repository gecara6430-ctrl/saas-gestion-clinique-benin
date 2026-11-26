'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const INACTIVE = "flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all";
const ACTIVE_DASHBOARD = "flex items-center justify-between px-space-md py-space-sm transition-all bg-primary-container text-on-primary-container font-label-lg rounded-lg";
const ACTIVE_PATIENTS = "flex items-center justify-between px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container font-label-lg shadow-sm transition-all";
const ACTIVE_CAISSE = "flex items-center justify-between px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container transition-all";

type NavItem = { path: string; label: string; icon: string | null; badge: string | null };

const NAV_STANDARD: NavItem[] = [
  {
    "path": "tableau-de-bord",
    "label": "Tableau de bord",
    "icon": "grid_view",
    "badge": null
  },
  {
    "path": "salle-d-attente",
    "label": "Salle d'attente",
    "icon": "meeting_room",
    "badge": "7"
  },
  {
    "path": "patients",
    "label": "Patients",
    "icon": "folder_shared",
    "badge": null
  },
  {
    "path": "agenda",
    "label": "Agenda",
    "icon": "calendar_month",
    "badge": null
  },
  {
    "path": "caisse-et-assurances",
    "label": "Caisse & Assurances",
    "icon": "payments",
    "badge": null
  },
  {
    "path": "rapports",
    "label": "Rapports",
    "icon": "monitoring",
    "badge": null
  },
  {
    "path": "parametres",
    "label": "Paramètres",
    "icon": "tune",
    "badge": null
  }
];
const NAV_ASSURANCES: NavItem[] = [
  {
    "path": "tableau-de-bord",
    "label": "Tableau de bord",
    "icon": null,
    "badge": null
  },
  {
    "path": "salle-d-attente",
    "label": "Salle d'attente",
    "icon": null,
    "badge": null
  },
  {
    "path": "patients",
    "label": "Patients",
    "icon": null,
    "badge": null
  },
  {
    "path": "agenda",
    "label": "Agenda",
    "icon": null,
    "badge": null
  },
  {
    "path": "caisse-et-facturation",
    "label": "Caisse & Facturation",
    "icon": null,
    "badge": null
  },
  {
    "path": "bordereaux-assurances-et-tiers-payant",
    "label": "Bordereaux & Tiers-Payant",
    "icon": null,
    "badge": null
  },
  {
    "path": "rapports",
    "label": "Rapports",
    "icon": null,
    "badge": null
  },
  {
    "path": "parametres",
    "label": "Paramètres",
    "icon": null,
    "badge": null
  }
];

const HREFS: Record<string, string> = {
  "tableau-de-bord": "/",
  "salle-d-attente": "/consultation",
  "patients": "/patients",
  "agenda": "/agenda",
  "caisse-et-assurances": "/facturation",
  "caisse-et-facturation": "/facturation",
  "bordereaux-assurances-et-tiers-payant": "/assurances",
  "rapports": "/rapports",
  "parametres": "/parametres"
};

export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const ROUTES: Record<string, string> = {
    '/': 'tableau-de-bord',
    '/patients': 'patients',
    '/facturation': 'caisse-et-assurances',
    '/agenda': 'agenda',
    '/rapports': 'rapports',
    '/parametres': 'parametres',
  };
  const activePath: string | null = ROUTES[pathname] ?? null;
  const activeClasses =
    pathname === '/' ? ACTIVE_DASHBOARD
    : pathname === '/facturation' ? ACTIVE_CAISSE
    : activePath ? ACTIVE_PATIENTS
    : INACTIVE;
  const isAssurances = pathname === '/assurances';

  return (
    <>
<aside className={'fixed left-0 top-0 h-full w-64 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex-col justify-between ' + (menuOpen ? 'flex' : 'hidden') + ' lg:flex'}><div className="flex flex-col"><div className="px-space-md py-space-lg flex items-center gap-space-sm bg-surface-container-low"><img alt="Logo Clinique Sainte-Marie" className="h-8 w-auto object-contain" src="/logo-clinique.png"/><div className="flex flex-col min-w-0"><span className="font-title-sm text-title-sm text-on-surface truncate">Clinique Sainte-Marie</span><span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xxs"><span className="material-symbols-outlined text-[12px] text-primary">location_on</span>Cotonou, Bénin</span></div></div><div className="px-space-md py-space-sm"><span className="font-label-sm text-label-sm text-outline tracking-wider uppercase px-space-xs">Navigation Clinique</span></div>
      {isAssurances ? (
<nav className="flex flex-col gap-space-xxs px-space-md" data-active-classes="bg-primary-container text-on-primary-container font-label-lg rounded-lg">
<a className={activePath === 'tableau-de-bord' ? activeClasses : INACTIVE} data-path="tableau-de-bord" href="/" onClick={() => setMenuOpen(false)}><span className="font-label-lg text-label-lg">Tableau de bord</span></a>
<a className={activePath === 'salle-d-attente' ? activeClasses : INACTIVE} data-path="salle-d-attente" href="/consultation" onClick={() => setMenuOpen(false)}><span className="font-label-lg text-label-lg">Salle d'attente</span></a>
<a className={activePath === 'patients' ? activeClasses : INACTIVE} data-path="patients" href="/patients" onClick={() => setMenuOpen(false)}><span className="font-label-lg text-label-lg">Patients</span></a>
<a className={activePath === 'agenda' ? activeClasses : INACTIVE} data-path="agenda" href="/agenda" onClick={() => setMenuOpen(false)}><span className="font-label-lg text-label-lg">Agenda</span></a>
<a className={activePath === 'caisse-et-facturation' ? activeClasses : INACTIVE} data-path="caisse-et-facturation" href="/facturation" onClick={() => setMenuOpen(false)}><span className="font-label-lg text-label-lg">Caisse & Facturation</span></a>
<a className={activePath === 'bordereaux-assurances-et-tiers-payant' ? activeClasses : INACTIVE} data-path="bordereaux-assurances-et-tiers-payant" href="/assurances" onClick={() => setMenuOpen(false)}><span className="font-label-lg text-label-lg">Bordereaux & Tiers-Payant</span></a>
<a className={activePath === 'rapports' ? activeClasses : INACTIVE} data-path="rapports" href="/rapports" onClick={() => setMenuOpen(false)}><span className="font-label-lg text-label-lg">Rapports</span></a>
<a className={activePath === 'parametres' ? activeClasses : INACTIVE} data-path="parametres" href="/parametres" onClick={() => setMenuOpen(false)}><span className="font-label-lg text-label-lg">Paramètres</span></a>
</nav>
      ) : (
<nav className="flex flex-col gap-space-xxs px-space-md" data-active-classes="bg-primary-container text-on-primary-container font-label-lg rounded-lg">
<a aria-current={activePath === 'tableau-de-bord' ? 'page' : undefined} className={activePath === 'tableau-de-bord' ? activeClasses : INACTIVE} data-path="tableau-de-bord" href="/" onClick={() => setMenuOpen(false)}><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">grid_view</span><span className="font-label-lg text-label-lg">Tableau de bord</span></div></a>
<a aria-current={activePath === 'salle-d-attente' ? 'page' : undefined} className={activePath === 'salle-d-attente' ? activeClasses : INACTIVE} data-path="salle-d-attente" href="/consultation" onClick={() => setMenuOpen(false)}><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">meeting_room</span><span className="font-label-lg text-label-lg">Salle d'attente</span></div><span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-space-xs py-0.5 rounded-full">7</span></a>
<a aria-current={activePath === 'patients' ? 'page' : undefined} className={activePath === 'patients' ? activeClasses : INACTIVE} data-path="patients" href="/patients" onClick={() => setMenuOpen(false)}><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">folder_shared</span><span className="font-label-lg text-label-lg">Patients</span></div></a>
<a aria-current={activePath === 'agenda' ? 'page' : undefined} className={activePath === 'agenda' ? activeClasses : INACTIVE} data-path="agenda" href="/agenda" onClick={() => setMenuOpen(false)}><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">calendar_month</span><span className="font-label-lg text-label-lg">Agenda</span></div></a>
<a aria-current={activePath === 'caisse-et-assurances' ? 'page' : undefined} className={activePath === 'caisse-et-assurances' ? activeClasses : INACTIVE} data-path="caisse-et-assurances" href="/facturation" onClick={() => setMenuOpen(false)}><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">payments</span><span className="font-label-lg text-label-lg">Caisse & Assurances</span></div></a>
<a aria-current={activePath === 'rapports' ? 'page' : undefined} className={activePath === 'rapports' ? activeClasses : INACTIVE} data-path="rapports" href="/rapports" onClick={() => setMenuOpen(false)}><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">monitoring</span><span className="font-label-lg text-label-lg">Rapports</span></div></a>
<a aria-current={activePath === 'parametres' ? 'page' : undefined} className={activePath === 'parametres' ? activeClasses : INACTIVE} data-path="parametres" href="/parametres" onClick={() => setMenuOpen(false)}><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">tune</span><span className="font-label-lg text-label-lg">Paramètres</span></div></a>
</nav>
      )}
</div><div className="p-space-md m-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs"><div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-primary text-[18px]">emergency</span><span className="font-label-md text-label-md text-on-surface">Urgences SM</span></div><span className="font-data-mono text-data-mono text-on-surface-variant">+229 21 30 11 00</span><span className="font-label-sm text-label-sm text-tertiary flex items-center gap-space-xxs"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Garde 24h/7j</span></div></aside>
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-[45] lg:hidden" aria-hidden="true" onClick={() => setMenuOpen(false)} />
      )}
      <div className="lg:pl-64">
        {isAssurances ? (
<header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg"><button className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-surface-container transition-colors" onClick={() => setMenuOpen((v) => !v)} aria-label="Ouvrir le menu de navigation"><span className="material-symbols-outlined text-[24px] text-on-surface-variant">menu</span></button><div className="flex items-center gap-space-md"><img alt="Logo Clinique Sainte-Marie" className="h-8 w-auto object-contain" src="/logo-clinique.png"/><div className="flex flex-col"><span className="font-headline-md text-headline-md text-on-surface flex items-center gap-space-xs"><span className="material-symbols-outlined text-primary text-[20px]">local_hospital</span>Clinique Sainte-Marie</span><span className="font-label-sm text-label-sm text-on-surface-variant">Pôle Médical Spécialisé • Cotonou</span></div><div className="hidden lg:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span></span><span className="font-label-sm text-label-sm text-tertiary">En ligne</span></div></div><div className="flex items-center gap-space-md"><div className="relative hidden lg:flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span><input className="w-72 h-10 pl-9 pr-space-md bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm rounded-lg focus:outline-none focus:bg-surface-container-lowest" placeholder="Rechercher un dossier, N° IPU, bordereau..." type="text"/></div><button className="hidden sm:flex items-center gap-space-xs h-10 px-space-md bg-primary text-on-primary rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-on-primary-fixed-variant transition-colors"><span className="material-symbols-outlined text-[18px]">post_add</span><span>Nouveau Bordereau</span></button><div className="relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-surface-container transition-colors cursor-pointer"><span className="material-symbols-outlined text-on-surface-variant text-[22px]">notifications</span><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error"></span></div><div className="hidden md:flex items-center gap-space-sm pl-space-sm"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface leading-tight">Dr. Mensah</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Médecin Chef / Gestionnaire</span></div></div></div></header>
        ) : (
<header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg"><button className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-surface-container transition-colors" onClick={() => setMenuOpen((v) => !v)} aria-label="Ouvrir le menu de navigation"><span className="material-symbols-outlined text-[24px] text-on-surface-variant">menu</span></button><div className="flex items-center gap-space-md"><img alt="Logo Clinique Sainte-Marie" className="h-8 w-auto object-contain" src="/logo-clinique.png"/><div className="flex flex-col"><span className="font-headline-md text-headline-md text-on-surface flex items-center gap-space-xs"><span className="material-symbols-outlined text-primary text-[20px]">local_hospital</span>Clinique Sainte-Marie</span><span className="font-label-sm text-label-sm text-on-surface-variant">Pôle Médical Spécialisé • Cotonou</span></div><div className="hidden lg:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span></span><span className="font-label-sm text-label-sm text-tertiary">En ligne</span></div></div><div className="flex items-center gap-space-md"><div className="relative hidden lg:flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span><input className="w-72 h-10 pl-9 pr-space-md bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm rounded-lg focus:outline-none focus:bg-surface-container-lowest" placeholder="Rechercher un dossier, N° IPU, nom..." type="text"/></div><button className="hidden sm:flex items-center gap-space-xs h-10 px-space-md bg-primary text-on-primary rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-on-primary-fixed-variant transition-colors"><span className="material-symbols-outlined text-[18px]">person_add</span><span>Nouveau Patient</span></button><div className="relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-surface-container transition-colors cursor-pointer"><span className="material-symbols-outlined text-on-surface-variant text-[22px]">notifications</span><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error"></span></div><div className="hidden md:flex items-center gap-space-sm pl-space-sm"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col"><span className="font-label-lg text-label-lg text-on-surface leading-tight">Dr. Mensah</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Médecin Chef / Généraliste</span></div></div></div></header>
        )}
        <main className="w-full pt-16 bg-surface min-h-screen">{children}</main>
      </div>
    </>
  );
}

export default function RapportsPage() {
  return (
    <>
<div className="px-space-lg">
<div className="flex flex-col w-full pb-space-2xl">

<section className="flex flex-col md:flex-row md:items-center md:justify-between gap-space-md mb-space-xl">
<div className="flex flex-col">
<h1 className="font-display-lg text-display-lg text-on-surface font-bold tracking-tight">Rapports &amp; Statistiques</h1>
<p className="font-body-md text-body-md text-secondary mt-0.5">Analyse de l'activité clinique et financière — Novembre 2026</p>
</div>
<div className="flex items-center gap-space-sm flex-wrap">

<div className="inline-flex p-1 bg-surface-container-high rounded-lg shadow-sm">
<button className="px-space-md py-1.5 text-label-md font-label-md text-secondary hover:text-on-surface rounded-md transition-colors" type="button">
          7 jours
        </button>
<button className="px-space-md py-1.5 text-label-md font-label-md bg-primary text-on-primary rounded-md shadow-sm font-semibold transition-all" type="button">
          30 jours
        </button>
<button className="px-space-md py-1.5 text-label-md font-label-md text-secondary hover:text-on-surface rounded-md transition-colors" type="button">
          Trimestre
        </button>
</div>

<button className="h-10 px-space-md bg-surface-container-lowest text-on-surface hover:bg-surface-container-low font-label-lg text-label-lg rounded-lg shadow-sm flex items-center gap-2 transition-colors" type="button">
<span className="material-symbols-outlined text-[19px] text-primary">download</span>
<span>Exporter PDF</span>
</button>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary uppercase font-semibold">Recettes du mois</span>
<div className="w-9 h-9 rounded-lg bg-surface-container text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">payments</span>
</div>
</div>
<div>
<div className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight font-data-mono">
          4 850 000 <span className="font-label-sm text-label-sm font-bold text-secondary">FCFA</span>
</div>
<div className="flex items-center gap-1.5 mt-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-label-sm font-label-sm font-bold bg-tertiary-container/15 text-tertiary">
<span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>+12 %
          </span>
<span className="font-body-sm text-body-sm text-secondary">vs mois précédent</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary uppercase font-semibold">Patients reçus</span>
<div className="w-9 h-9 rounded-lg bg-secondary-container/50 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">groups</span>
</div>
</div>
<div>
<div className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight font-data-mono">
          412
        </div>
<div className="flex items-center gap-1.5 mt-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-label-sm font-label-sm font-bold bg-tertiary-container/15 text-tertiary">
<span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>+8 %
          </span>
<span className="font-body-sm text-body-sm text-secondary">vs mois précédent</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary uppercase font-semibold">Consultations</span>
<div className="w-9 h-9 rounded-lg bg-surface-container text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">stethoscope</span>
</div>
</div>
<div>
<div className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight font-data-mono">
          368
        </div>
<div className="flex items-center gap-1.5 mt-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-label-sm font-label-sm font-bold bg-tertiary-container/15 text-tertiary">
<span className="material-symbols-outlined text-[14px] mr-0.5">arrow_upward</span>+5 %
          </span>
<span className="font-body-sm text-body-sm text-secondary">d'occupation box</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-secondary uppercase font-semibold">Recouvrement Tiers-Payant</span>
<div className="w-9 h-9 rounded-lg bg-error-container/40 text-error flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
</div>
<div>
<div className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight font-data-mono">
          92 <span className="font-label-sm text-label-sm font-bold text-secondary">%</span>
</div>
<div className="flex items-center gap-1.5 mt-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-label-sm font-label-sm font-bold bg-error-container text-error font-data-mono">
<span className="material-symbols-outlined text-[14px] mr-0.5">trending_down</span>−2 %
          </span>
<span className="font-body-sm text-body-sm text-secondary truncate">vs N-1 (rejets à traiter)</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl items-stretch">

<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-sm mb-space-md">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Évolution des recettes</h2>
<p className="font-body-sm text-body-sm text-secondary">Flux hebdomadaires consolidés en FCFA • Cotonou</p>
</div>

<div className="inline-flex bg-surface-container-low p-1 rounded-lg">
<button className="px-space-sm py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded font-bold shadow-sm" type="button">Recettes</button>
<button className="px-space-sm py-1 text-secondary hover:text-on-surface font-label-sm text-label-sm font-semibold transition-colors" type="button">Patients</button>
<button className="px-space-sm py-1 text-secondary hover:text-on-surface font-label-sm text-label-sm font-semibold transition-colors" type="button">Consultations</button>
</div>
</div>

<div className="relative pt-6 pb-2">

<div className="absolute inset-x-0 top-6 bottom-8 flex flex-col justify-between pointer-events-none opacity-40">
<div className="w-full flex items-center gap-2">
<span className="font-data-mono text-label-sm text-secondary w-14 text-right">1.5 M</span>
<div className="h-px bg-outline-variant flex-1"></div>
</div>
<div className="w-full flex items-center gap-2">
<span className="font-data-mono text-label-sm text-secondary w-14 text-right">1.0 M</span>
<div className="h-px bg-outline-variant flex-1"></div>
</div>
<div className="w-full flex items-center gap-2">
<span className="font-data-mono text-label-sm text-secondary w-14 text-right">500 k</span>
<div className="h-px bg-outline-variant flex-1"></div>
</div>
<div className="w-full flex items-center gap-2">
<span className="font-data-mono text-label-sm text-secondary w-14 text-right">0</span>
<div className="h-px bg-outline-variant flex-1"></div>
</div>
</div>

<div className="pl-16 pr-4 h-64 flex items-end justify-between gap-3 relative z-10">

<div className="flex-1 flex flex-col items-center h-full justify-end group">
<span className="font-data-mono text-label-sm text-secondary group-hover:text-primary font-bold mb-1.5 transition-colors">920 k</span>
<div className="w-full max-w-[54px] bg-primary/75 group-hover:bg-primary rounded-t-lg transition-all" style={{height: "61%"}}></div>
<div className="mt-2 text-center">
<span className="font-label-md text-label-md font-bold text-on-surface block">S1</span>
<span className="font-label-sm text-label-sm text-secondary block">01-07 Nov</span>
</div>
</div>

<div className="flex-1 flex flex-col items-center h-full justify-end group">
<span className="font-data-mono text-label-sm text-secondary group-hover:text-primary font-bold mb-1.5 transition-colors">1.15 M</span>
<div className="w-full max-w-[54px] bg-primary/75 group-hover:bg-primary rounded-t-lg transition-all" style={{height: "76%"}}></div>
<div className="mt-2 text-center">
<span className="font-label-md text-label-md font-bold text-on-surface block">S2</span>
<span className="font-label-sm text-label-sm text-secondary block">08-14 Nov</span>
</div>
</div>

<div className="flex-1 flex flex-col items-center h-full justify-end group relative">
<span className="absolute -top-1 px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm font-bold rounded-full shadow-sm whitespace-nowrap -translate-y-full">Pic d'affluence</span>
<span className="font-data-mono text-label-sm text-primary font-bold mb-1.5">1.38 M</span>
<div className="w-full max-w-[54px] bg-primary rounded-t-lg shadow-sm transition-all" style={{height: "92%"}}></div>
<div className="mt-2 text-center">
<span className="font-label-md text-label-md font-bold text-primary block">S3</span>
<span className="font-label-sm text-label-sm text-primary/80 font-bold block">15-21 Nov</span>
</div>
</div>

<div className="flex-1 flex flex-col items-center h-full justify-end group">
<span className="font-data-mono text-label-sm text-secondary group-hover:text-primary font-bold mb-1.5 transition-colors">890 k</span>
<div className="w-full max-w-[54px] bg-primary/75 group-hover:bg-primary rounded-t-lg transition-all" style={{height: "59%"}}></div>
<div className="mt-2 text-center">
<span className="font-label-md text-label-md font-bold text-on-surface block">S4</span>
<span className="font-label-sm text-label-sm text-secondary block">22-28 Nov</span>
</div>
</div>

<div className="flex-1 flex flex-col items-center h-full justify-end group">
<span className="font-data-mono text-label-sm text-secondary group-hover:text-primary font-bold mb-1.5 transition-colors">510 k</span>
<div className="w-full max-w-[54px] bg-primary/50 group-hover:bg-primary/80 rounded-t-lg transition-all" style={{height: "34%"}}></div>
<div className="mt-2 text-center">
<span className="font-label-md text-label-md font-bold text-on-surface block">S5</span>
<span className="font-label-sm text-label-sm text-secondary block">29-30 Nov</span>
</div>
</div>
</div>
</div>
</div>

<div className="pt-space-md mt-space-md bg-surface-container-low/60 rounded-lg p-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="font-body-sm text-body-sm text-secondary">Moyenne hebdo constatée :</span>
<span className="font-data-mono font-bold text-body-sm text-on-surface">970 000 FCFA</span>
</div>
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Projection clôture :</span>
<span className="font-data-mono font-bold text-body-sm text-primary">5 120 000 FCFA</span>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="mb-space-md">
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Répartition par pôle</h2>
<p className="font-body-sm text-body-sm text-secondary">Part du chiffre d'affaires clinique global</p>
</div>
<div className="flex flex-col gap-space-md">

<div>
<div className="flex items-center justify-between text-body-sm font-body-sm mb-1">
<span className="flex items-center gap-2 font-semibold text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                Consultations &amp; Spécialités
              </span>
<span className="font-label-sm font-bold text-primary px-1.5 py-0.2 rounded bg-surface-container">42%</span>
</div>
<div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "42%"}}></div>
</div>
<div className="text-right mt-1 font-data-mono text-label-sm text-secondary">2 037 000 FCFA</div>
</div>

<div>
<div className="flex items-center justify-between text-body-sm font-body-sm mb-1">
<span className="flex items-center gap-2 font-semibold text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                Laboratoire &amp; Analyses
              </span>
<span className="font-label-sm font-bold text-on-surface px-1.5 py-0.2 rounded bg-surface-container-high">23%</span>
</div>
<div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{width: "23%"}}></div>
</div>
<div className="text-right mt-1 font-data-mono text-label-sm text-secondary">1 115 500 FCFA</div>
</div>

<div>
<div className="flex items-center justify-between text-body-sm font-body-sm mb-1">
<span className="flex items-center gap-2 font-semibold text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                Imagerie Médicale (Écho/Radio)
              </span>
<span className="font-label-sm font-bold text-on-surface px-1.5 py-0.2 rounded bg-surface-container-high">18%</span>
</div>
<div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{width: "18%"}}></div>
</div>
<div className="text-right mt-1 font-data-mono text-label-sm text-secondary">873 000 FCFA</div>
</div>

<div>
<div className="flex items-center justify-between text-body-sm font-body-sm mb-1">
<span className="flex items-center gap-2 font-semibold text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                Pharmacie &amp; Dispensaire
              </span>
<span className="font-label-sm font-bold text-on-surface px-1.5 py-0.2 rounded bg-surface-container-high">12%</span>
</div>
<div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" style={{width: "12%"}}></div>
</div>
<div className="text-right mt-1 font-data-mono text-label-sm text-secondary">582 000 FCFA</div>
</div>

<div>
<div className="flex items-center justify-between text-body-sm font-body-sm mb-1">
<span className="flex items-center gap-2 font-semibold text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-outline"></span>
                Hospitalisation jour &amp; Soins
              </span>
<span className="font-label-sm font-bold text-on-surface px-1.5 py-0.2 rounded bg-surface-container-high">5%</span>
</div>
<div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
<div className="bg-outline h-full rounded-full" style={{width: "5%"}}></div>
</div>
<div className="text-right mt-1 font-data-mono text-label-sm text-secondary">242 500 FCFA</div>
</div>
</div>
</div>

<div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary">Activité ambulatoire</span>
<span className="font-label-sm text-label-sm font-bold text-tertiary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>Ratio nominal 80/20
        </span>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">

<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Performance des Praticiens</h2>
<p className="font-body-sm text-body-sm text-secondary">Activité clinique, volume d'actes et prise en charge conventionnée</p>
</div>
<span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-bold">
            5 Actifs ce mois
          </span>
</div>
<div className="overflow-x-auto -mx-space-lg px-space-lg">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-space-sm rounded-l-lg font-bold">Praticien</th>
<th className="py-2.5 px-space-sm font-bold text-center">Consultations</th>
<th className="py-2.5 px-space-sm font-bold text-right">Recettes (FCFA)</th>
<th className="py-2.5 px-space-sm font-bold text-center">Taux Tiers-Payant</th>
<th className="py-2.5 px-space-sm rounded-r-lg font-bold text-right">Satisfaction</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface font-body-md text-body-md">

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-label-md flex items-center justify-center shrink-0">
                      MK
                    </div>
<div>
<div className="font-title-sm text-title-sm font-bold text-on-surface leading-tight">Dr. Mensah K.</div>
<div className="font-body-sm text-body-sm text-secondary">Chef Clinique • Médecine G.</div>
</div>
</div>
</td>
<td className="py-3 px-space-sm text-center font-data-mono font-bold">112</td>
<td className="py-3 px-space-sm text-right font-data-mono font-semibold">1 680 000</td>
<td className="py-3 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface">
                    78% NSIA/Sanlam
                  </span>
</td>
<td className="py-3 px-space-sm text-right">
<span className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-tertiary bg-tertiary-container/10 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[15px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>98%
                  </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-fixed font-bold text-label-md flex items-center justify-center shrink-0">
                      AS
                    </div>
<div>
<div className="font-title-sm text-title-sm font-bold text-on-surface leading-tight">Dr. Adjovi S.</div>
<div className="font-body-sm text-body-sm text-secondary">Pédiatrie &amp; Néonatalogie</div>
</div>
</div>
</td>
<td className="py-3 px-space-sm text-center font-data-mono font-bold">84</td>
<td className="py-3 px-space-sm text-right font-data-mono font-semibold">1 050 000</td>
<td className="py-3 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface">
                    82% Assurances
                  </span>
</td>
<td className="py-3 px-space-sm text-right">
<span className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-tertiary bg-tertiary-container/10 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[15px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>96%
                  </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary-container/15 text-primary-container font-bold text-label-md flex items-center justify-center shrink-0">
                      ZC
                    </div>
<div>
<div className="font-title-sm text-title-sm font-bold text-on-surface leading-tight">Dr. Zinsou C.</div>
<div className="font-body-sm text-body-sm text-secondary">Cardiologie Spécialisée</div>
</div>
</div>
</td>
<td className="py-3 px-space-sm text-center font-data-mono font-bold">68</td>
<td className="py-3 px-space-sm text-right font-data-mono font-semibold">1 120 000</td>
<td className="py-3 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface">
                    85% Prise en charge
                  </span>
</td>
<td className="py-3 px-space-sm text-right">
<span className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-tertiary bg-tertiary-container/10 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[15px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>99%
                  </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-surface-container text-secondary font-bold text-label-md flex items-center justify-center shrink-0">
                      HP
                    </div>
<div>
<div className="font-title-sm text-title-sm font-bold text-on-surface leading-tight">Dr. Houngbédji P.</div>
<div className="font-body-sm text-body-sm text-secondary">Gynécologie-Obstétrique</div>
</div>
</div>
</td>
<td className="py-3 px-space-sm text-center font-data-mono font-bold">58</td>
<td className="py-3 px-space-sm text-right font-data-mono font-semibold">720 000</td>
<td className="py-3 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface">
                    75% Assurances
                  </span>
</td>
<td className="py-3 px-space-sm text-right">
<span className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-tertiary bg-tertiary-container/10 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[15px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>95%
                  </span>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-tertiary-container/15 text-tertiary font-bold text-label-md flex items-center justify-center shrink-0">
                      AM
                    </div>
<div>
<div className="font-title-sm text-title-sm font-bold text-on-surface leading-tight">Dr. Akplogan M.</div>
<div className="font-body-sm text-body-sm text-secondary">Échographie &amp; Radiologie</div>
</div>
</div>
</td>
<td className="py-3 px-space-sm text-center font-data-mono font-bold">46</td>
<td className="py-3 px-space-sm text-right font-data-mono font-semibold">280 000</td>
<td className="py-3 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface">
                    90% Tiers-payant
                  </span>
</td>
<td className="py-3 px-space-sm text-right">
<span className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-tertiary bg-tertiary-container/10 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[15px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>97%
                  </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-body-sm font-body-sm text-secondary">
<span>Rémunérations sur vacations validées par la direction administrative.</span>
<button className="text-primary hover:underline font-label-md font-bold flex items-center gap-1" type="button">
          Détail des honoraires <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>

<div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="mb-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Diagnostics fréquents</h2>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold">CIM-10</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Profil épidémiologique • Pôle Cotonou</p>
</div>
<div className="flex flex-col gap-space-md">

<div className="p-space-sm bg-surface-container-low/50 rounded-lg">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 bg-primary/15 text-primary rounded font-data-mono font-bold text-label-sm">B50.9</span>
<span className="font-title-sm text-title-sm font-bold text-on-surface">Paludisme</span>
</div>
<span className="font-data-mono font-bold text-on-surface text-body-md">142 cas</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-1.5">
<div className="bg-primary h-full rounded-full" style={{width: "38%"}}></div>
</div>
<span className="font-body-sm text-body-sm text-secondary block mt-1">38% des motifs d'admission</span>
</div>

<div className="p-space-sm bg-surface-container-low/50 rounded-lg">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 bg-secondary-container text-on-secondary-fixed rounded font-data-mono font-bold text-label-sm">I10</span>
<span className="font-title-sm text-title-sm font-bold text-on-surface">Hypertension (HTA)</span>
</div>
<span className="font-data-mono font-bold text-on-surface text-body-md">86 cas</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-1.5">
<div className="bg-secondary h-full rounded-full" style={{width: "23%"}}></div>
</div>
<span className="font-body-sm text-body-sm text-secondary block mt-1">23% • Suivis chroniques &amp; bilans</span>
</div>

<div className="p-space-sm bg-surface-container-low/50 rounded-lg">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 bg-surface-container-high text-on-surface-variant rounded font-data-mono font-bold text-label-sm">E11</span>
<span className="font-title-sm text-title-sm font-bold text-on-surface">Diabète de type 2</span>
</div>
<span className="font-data-mono font-bold text-on-surface text-body-md">54 cas</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-1.5">
<div className="bg-primary-container h-full rounded-full" style={{width: "15%"}}></div>
</div>
<span className="font-body-sm text-body-sm text-secondary block mt-1">15% • Suivi endocrinologique</span>
</div>

<div className="p-space-sm bg-surface-container-low/50 rounded-lg">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 bg-surface-container-high text-on-surface-variant rounded font-data-mono font-bold text-label-sm">K29</span>
<span className="font-title-sm text-title-sm font-bold text-on-surface">Troubles digestifs</span>
</div>
<span className="font-data-mono font-bold text-on-surface text-body-md">48 cas</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-1.5">
<div className="bg-outline h-full rounded-full" style={{width: "13%"}}></div>
</div>
<span className="font-body-sm text-body-sm text-secondary block mt-1">13% • Gastrites et gastro-entérites</span>
</div>

<div className="p-space-sm bg-surface-container-low/50 rounded-lg">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 bg-surface-container-high text-on-surface-variant rounded font-data-mono font-bold text-label-sm">J06</span>
<span className="font-title-sm text-title-sm font-bold text-on-surface">Infections resp. (IRA)</span>
</div>
<span className="font-data-mono font-bold text-on-surface text-body-md">38 cas</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-1.5">
<div className="bg-tertiary h-full rounded-full" style={{width: "11%"}}></div>
</div>
<span className="font-body-sm text-body-sm text-secondary block mt-1">11% • Rhino-pharyngites &amp; broncho.</span>
</div>
</div>
</div>
<div className="mt-space-md pt-space-xs text-center">
<span className="font-label-sm text-label-sm text-secondary">Données déclaratives transmises à la Direction Départementale de la Santé (DDS Littoral)</span>
</div>
</div>
</section>
</div>
</div>
    </>
  );
}

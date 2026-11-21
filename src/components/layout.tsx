import Link from 'next/link'

export function Sidebar() {
  const navItems = [
    { name: 'Tableau de bord', href: '/' },
    { name: 'Consultation médicale', href: '/consultation' },
    { name: 'Caisse & Facturation', href: '/facturation' },
    { name: 'Assurances & Tiers-payant', href: '/assurances' },
    { name: 'Répertoire Patients', href: '/patients' },
  ]

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-border bg-surface shrink-0 z-20">
      <div className="p-6 border-b border-border">
        <h1 className="headline-lg text-on-surface tracking-tight">Sainte-Marie</h1>
        <p className="label-sm text-on-surface-variant mt-1 uppercase">Clinique — Bénin</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = typeof window !== 'undefined' && window.location.pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-surface-container-low text-primary border-l-4 border-primary pl-2.5'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors'
              }`}
            >
              <span className="mr-3 w-5 text-on-surface-variant">▸</span>
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <p className="label-xs text-on-surface-variant uppercase">FCFA • NSIA • Sanlam</p>
      </div>
    </aside>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-surface/95 backdrop-blur px-6">
      <button className="md:hidden rounded-sm p-2 text-on-surface-variant hover:bg-surface-container-low transition-colors">
        ☰
      </button>
      <h2 className="flex-1 title-sm text-on-surface">Tableau de bord</h2>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex flex-col items-end">
          <p className="label-md text-on-surface">Dr. A. Koffi</p>
          <p className="label-sm text-on-surface-variant">Médecin coordinateur</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-fg">
          AK
        </div>
      </div>
    </header>
  )
}

export function MobileSidebarTrigger() {
  return (
    <button className="md:hidden rounded-sm p-2 text-on-surface-variant hover:bg-surface-container-low transition-colors">
      ☰
    </button>
  )
}

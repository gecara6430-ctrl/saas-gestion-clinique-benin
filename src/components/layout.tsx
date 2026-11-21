import Link from 'next/link'

export function Sidebar() {
  const navItems = [
    { name: 'Tableau de bord', href: '/', icon: '▸' },
    { name: 'Consultation médicale', href: '/consultation', icon: '▸' },
    { name: 'Caisse & Facturation', href: '/facturation', icon: '▸' },
    { name: 'Assurances & Tiers-payant', href: '/assurances', icon: '▸' },
    { name: 'Répertoire Patients', href: '/patients', icon: '▸' },
  ]

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-border bg-surface shrink-0">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">Sainte-Marie</h1>
        <p className="text-xs text-slate-500 mt-1">Clinique — Bénin</p>
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
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span className="mr-3 w-5 text-slate-400">{item.icon}</span>
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <p className="text-xs text-slate-500">FCFA • NSIA • Sanlam</p>
      </div>
    </aside>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur px-6">
      <button className="md:hidden rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors">
        ☰
      </button>
      <h2 className="flex-1 text-sm font-semibold text-slate-900">Tableau de bord</h2>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex flex-col items-end">
          <p className="text-xs font-medium text-slate-900">Dr. A. Koffi</p>
          <p className="text-xs text-slate-500">Médecin coordinateur</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-xs font-bold text-white">
          AK
        </div>
      </div>
    </header>
  )
}

export function MobileSidebarTrigger() {
  return (
    <button className="md:hidden rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors">
      ☰
    </button>
  )
}

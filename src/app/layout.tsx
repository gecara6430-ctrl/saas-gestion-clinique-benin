import type { Metadata } from 'next'
import { Sidebar, Header } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Clinique Sainte-Marie — SaaS de Gestion',
  description: 'Tableau de bord, consultation, facturation, assurances et répertoire des patients — Clinique Sainte-Marie, Bénin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="bg-background">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

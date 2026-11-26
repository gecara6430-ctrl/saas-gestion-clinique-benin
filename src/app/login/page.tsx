'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/browser';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      router.push('/');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <div className="w-full max-w-md p-space-lg">
        <div className="flex flex-col items-center gap-space-md">
          <img alt="Logo Clinique Sainte-Marie" className="h-10 w-auto object-contain" src="/logo-clinique.png" />
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Connexion — Clinique Sainte-Marie</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-space-xl flex flex-col gap-space-md">
          <div>
            <label className="block text-sm font-medium text-on-surface-variant mb-space-xs">E-mail</label>
            <input
              className="w-full h-11 pl-10 pr-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
              type="email"
              placeholder="vous@clinique-sainte-marie.bj"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface-variant mb-space-xs">Mot de passe</label>
            <input
              className="w-full h-11 pl-10 pr-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="text-sm text-error rounded-lg bg-error-container p-space-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm disabled:opacity-50 disabled:pointer-events-none transition-all"
          >
            {loading ? 'Connexion en cours…' : 'Se connecter'}
          </button>
        </form>

        <p className="mt-space-lg text-center text-sm text-on-surface-variant">
          Clinique Sainte-Marie — Cotonou, Bénin • <a href="#" className="text-primary hover:underline">Mot de passe oublié ?</a>
        </p>
      </div>
    </div>
  );
}

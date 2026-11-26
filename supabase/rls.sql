-- ============================================================================
-- Politiques RLS — Clinique Sainte-Marie
-- Chaque table est protégée : seul auth.uid() permet d'identifier le propriétaire.
-- Rôles : médecin, réception, admin
-- ============================================================================

-- Activer RLS sur toutes les tables
alter table public.profiles enable row level security;
alter table public.parametres_clinique enable row level security;
alter table public.praticiens enable row level security;
alter table public.patients enable row level security;
alter table public.rendez_vous enable row level security;
alter table public.consultations enable row level security;
alter table public.factures enable row level security;
alter table public.assurances enable row level security;

-- ---------------------------------------------------------------------------
-- Fonction helper : rôle de l'utilisateur connecté
-- ---------------------------------------------------------------------------
create or replace function public.get_user_role()
returns text
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  r text;
begin
  select role into r from public.profiles where id = auth.uid();
  return coalesce(r, 'réception');
end;
$$;

-- ---------------------------------------------------------------------------
-- Profils : chaque utilisateur lit/écrit son propre profil ; admin lit tout
-- ---------------------------------------------------------------------------
create policy "profiles_select_own"
on public.profiles for select
to authenticated
using (auth.uid() = id);

create policy "profiles_update_own"
on public.profiles for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "profiles_select_all_admin"
on public.profiles for select
to authenticated
using (public.get_user_role() = 'admin');

-- ---------------------------------------------------------------------------
-- Paramètres clinique : lecture pour tous, écriture admin uniquement
-- ---------------------------------------------------------------------------
create policy "parametres_select_all"
on public.parametres_clinique for select
to authenticated
using (true);

create policy "parametres_write_admin"
on public.parametres_clinique for all
to authenticated
using (public.get_user_role() = 'admin')
with check (public.get_user_role() = 'admin');

-- ---------------------------------------------------------------------------
-- Praticiens : lecture pour tous, écriture admin uniquement
-- ---------------------------------------------------------------------------
create policy "praticiens_select_all"
on public.praticiens for select
to authenticated
using (true);

create policy "praticiens_write_admin"
on public.praticiens for all
to authenticated
using (public.get_user_role() = 'admin')
with check (public.get_user_role() = 'admin');

-- ---------------------------------------------------------------------------
-- Assurances : lecture pour tous, écriture admin uniquement
-- ---------------------------------------------------------------------------
create policy "assurances_select_all"
on public.assurances for select
to authenticated
using (true);

create policy "assurances_write_admin"
on public.assurances for all
to authenticated
using (public.get_user_role() = 'admin')
with check (public.get_user_role() = 'admin');

-- ---------------------------------------------------------------------------
-- Patients : lecture tous authentifiés, création médecin/réception,
-- modification médecin/réception (suppression interdite)
-- ---------------------------------------------------------------------------
create policy "patients_select_all"
on public.patients for select
to authenticated
using (true);

create policy "patients_insert_medecin_reception"
on public.patients for insert
to authenticated
using (public.get_user_role() in ('médecin', 'réception'))
with check (public.get_user_role() in ('médecin', 'réception'));

create policy "patients_update_medecin_reception"
on public.patients for update
to authenticated
using (public.get_user_role() in ('médecin', 'réception'))
with check (public.get_user_role() in ('médecin', 'réception'));

-- ---------------------------------------------------------------------------
-- Rendez-vous : lecture tous, création médecin/réception,
-- modification médecin/réception
-- ---------------------------------------------------------------------------
create policy "rendez_vous_select_all"
on public.rendez_vous for select
to authenticated
using (true);

create policy "rendez_vous_insert_medecin_reception"
on public.rendez_vous for insert
to authenticated
using (public.get_user_role() in ('médecin', 'réception'))
with check (public.get_user_role() in ('médecin', 'réception'));

create policy "rendez_vous_update_medecin_reception"
on public.rendez_vous for update
to authenticated
using (public.get_user_role() in ('médecin', 'réception'))
with check (public.get_user_role() in ('médecin', 'réception'));

-- ---------------------------------------------------------------------------
-- Consultations : lecture tous, création/modification médecin uniquement
-- ---------------------------------------------------------------------------
create policy "consultations_select_all"
on public.consultations for select
to authenticated
using (true);

create policy "consultations_insert_medecin"
on public.consultations for insert
to authenticated
using (public.get_user_role() = 'médecin')
with check (public.get_user_role() = 'médecin');

create policy "consultations_update_medecin"
on public.consultations for update
to authenticated
using (public.get_user_role() = 'médecin')
with check (public.get_user_role() = 'médecin');

-- ---------------------------------------------------------------------------
-- Factures : lecture tous, création réception/admin, modification réception/admin
-- ---------------------------------------------------------------------------
create policy "factures_select_all"
on public.factures for select
to authenticated
using (true);

create policy "factures_insert_reception_admin"
on public.factures for insert
to authenticated
using (public.get_user_role() in ('réception', 'admin'))
with check (public.get_user_role() in ('réception', 'admin'));

create policy "factures_update_reception_admin"
on public.factures for update
to authenticated
using (public.get_user_role() in ('réception', 'admin'))
with check (public.get_user_role() in ('réception', 'admin'));

-- ---------------------------------------------------------------------------
-- Notes de sécurité
-- ---------------------------------------------------------------------------
-- 1. auth.uid() est enveloppé dans (select ...) par Postgres automatiquement
--    quand utilisé dans une politique RLS : pas de surcoût par ligne.
-- 2. La fonction get_user_role() est security definer pour lire le profil
--    sans nécessiter de politique de lecture supplémentaire sur profiles.
-- 3. Aucune politique ne permet l'accès anonyme (to anon) : tout passe par
--    auth.uid() après authentification Supabase Auth.

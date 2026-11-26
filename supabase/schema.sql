-- ============================================================================
-- Schéma de base de données — Clinique Sainte-Marie (Bénin)
-- Projet Supabase : tjdludzzgifwjkcmrfsp
-- ============================================================================

-- Activer l'extension uuid pour les identifiants publics
create extension if not exists "uuid-ossp";

-- ---------------------------------------------------------------------------
-- 1. Profils utilisateurs (étend auth.users)
-- Rôles : médecin, réception, admin
-- ---------------------------------------------------------------------------
create table public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  role text not null check (role in ('médecin', 'réception', 'admin')) default 'réception',
  clinic_id text default 'Sainte-Marie',
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- 2. Paramètres de la clinique (une seule ligne)
-- ---------------------------------------------------------------------------
create table public.parametres_clinique (
  id int primary key default 1 check (id = 1),
  nom_officiel text not null default 'Clinique Sainte-Marie',
  forme_juridique text default 'SA à conseil d\'administration',
  adresse text default 'Lot 1201, Avenue 12e Arrondissement, Cotonou',
  telephone text default '+229 21 30 45 67',
  email text default 'contact@clinique-sainte-marie.bj',
  nif text default '2024123456789',
  agrement_ministeriel text default 'N° 0452/MS/DDS/Cotonou',
  medecin_chef text default 'Dr. Mensah K.',
  devise text default 'FCFA',
  fuseau_horaire text default 'Africa/Porto-Novo',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- 3. Praticiens
-- ---------------------------------------------------------------------------
create table public.praticiens (
  id uuid primary key default uuid_generate_v4(),
  nom text not null,
  prenom text not null,
  specialite text not null,
  cabinet text,
  email text,
  telephone text,
  actif boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- 4. Patients (répertoire)
-- ---------------------------------------------------------------------------
create table public.patients (
  id uuid primary key default uuid_generate_v4(),
  nom text not null,
  prenom text not null,
  date_naissance date,
  sexe text check (sexe in ('M', 'F', 'Autre')),
  telephone text,
  email text,
  adresse text,
  niu text unique, -- Numéro d'identification unique patient
  assurances text[], -- Liste des assurances (NSIA, Sanlam, etc.)
  actif boolean default true,
  created_by uuid references public.profiles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- 5. Rendez-vous (agenda)
-- ---------------------------------------------------------------------------
create table public.rendez_vous (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid references public.patients(id) on delete cascade,
  praticien_id uuid references public.praticiens(id),
  date_rdv timestamptz not null,
  duree_min int default 30,
  motif text,
  statut text check (statut in ('programmé', 'en cours', 'terminé', 'annulé', 'passé')) default 'programmé',
  created_by uuid references public.profiles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- 6. Consultations (dossiers médicaux)
-- ---------------------------------------------------------------------------
create table public.consultations (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid references public.patients(id) on delete cascade,
  praticien_id uuid references public.praticiens(id),
  rendez_vous_id uuid references public.rendez_vous(id),
  date_consultation timestamptz default now(),
  motif text,
  observations text,
  diagnostic text,
  prescription text,
  statut text check (statut in ('en attente', 'terminée', 'annulée')) default 'en attente',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- 7. Factures (caisse)
-- ---------------------------------------------------------------------------
create table public.factures (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid references public.patients(id),
  numero text unique not null,
  montant numeric(12, 2) not null default 0,
  devise text default 'FCFA',
  statut text check (statut in ('brouillon', 'impayée', 'payée', 'annulée', 'remboursée')) default 'brouillon',
  mode_paiement text check (mode_paiement in ('espèces', 'mobile_money', 'virement', 'tiers_payant', 'mixte')),
  date_echeance date,
  created_by uuid references public.profiles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- 8. Assurances / Tiers-payant
-- ---------------------------------------------------------------------------
create table public.assurances (
  id uuid primary key default uuid_generate_v4(),
  nom text not null,
  code text unique,
  pourcentage_prise_en_charge numeric(5, 2) default 0,
  actif boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- Index pour les requêtes fréquentes
-- ---------------------------------------------------------------------------
create index idx_rendez_vous_date on public.rendez_vous(date_rdv);
create index idx_rendez_vous_patient on public.rendez_vous(patient_id);
create index idx_rendez_vous_praticien on public.rendez_vous(praticien_id);
create index idx_patients_niu on public.patients(niu);
create index idx_consultations_patient on public.consultations(patient_id);
create index idx_factures_patient on public.factures(patient_id);
create index idx_factures_statut on public.factures(statut);

-- ---------------------------------------------------------------------------
-- Données de démo (seed)
-- ---------------------------------------------------------------------------
insert into public.parametres_clinique (id, nom_officiel, forme_juridique, adresse, telephone, email, nif, agrement_ministeriel, medecin_chef, devise, fuseau_horaire)
values (
  1,
  'Clinique Sainte-Marie',
  'SA à conseil d\'administration',
  'Lot 1201, Avenue 12e Arrondissement, Cotonou',
  '+229 21 30 45 67',
  'contact@clinique-sainte-marie.bj',
  '2024123456789',
  'N° 0452/MS/DDS/Cotonou',
  'Dr. Mensah K.',
  'FCFA',
  'Africa/Porto-Novo'
) on conflict (id) do nothing;

insert into public.praticiens (nom, prenom, specialite, cabinet, email, telephone, actif)
values
  ('Mensah', 'K.', 'Médecine Générale', 'Cabinet 1', 'm.mensah@clinique-sainte-marie.bj', '+229 21 30 45 67', true),
  ('Lawson', 'Dr.', 'Cardiologie', 'Cabinet 2', 'l.lawson@clinique-sainte-marie.bj', '+229 21 30 45 68', true),
  ('Akplogan', 'M.', 'Pédiatrie', 'Cabinet 3', 'a.akplogan@clinique-sainte-marie.bj', '+229 21 30 45 69', true)
on conflict do nothing;

insert into public.assurances (nom, code, pourcentage_prise_en_charge, actif)
values
  ('NSIA Assurances', 'NSIA', 80.00, true),
  ('Sanlam', 'SANLAM', 90.00, true),
  ('AAA Assurances', 'AAA', 70.00, true)
on conflict (code) do nothing;

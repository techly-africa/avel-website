-- ============================================================
-- Avel Web — Tables
-- ============================================================

create extension if not exists "pgcrypto";

-- ------------------------------------------------------------
-- leads
-- ------------------------------------------------------------
create table if not exists leads (
    id          uuid primary key default gen_random_uuid(),
    type        text not null check (type in ('contact','booking','grc_assessment','demo_request','waitlist','partnership')),
    name        text not null,
    email       text not null,
    company     text,
    role        text,
    industry    text,
    message     text,
    data        jsonb,
    created_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
-- site_content
-- ------------------------------------------------------------
create table if not exists site_content (
    id          uuid primary key default gen_random_uuid(),
    key         text not null unique,
    data        jsonb not null default '{}',
    updated_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
-- case_studies
-- ------------------------------------------------------------
create table if not exists case_studies (
    id          uuid primary key default gen_random_uuid(),
    title       text not null,
    slug        text not null unique,
    company     text not null,
    challenge   text not null,
    result      text not null,
    image_url   text,
    published   boolean not null default false,
    created_at  timestamptz not null default now()
);

-- ------------------------------------------------------------
-- insights
-- ------------------------------------------------------------
create table if not exists insights (
    id          uuid primary key default gen_random_uuid(),
    title       text not null,
    slug        text not null unique,
    category    text not null,
    description text not null,
    content     text not null,
    date        text not null,
    published   boolean not null default false,
    created_at  timestamptz not null default now()
);

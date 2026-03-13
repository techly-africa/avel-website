-- ============================================================
-- Avel Web — Row Level Security
-- ============================================================

alter table leads        enable row level security;
alter table site_content enable row level security;
alter table case_studies enable row level security;
alter table insights     enable row level security;

-- Drop existing policies before recreating (idempotent)
drop policy if exists "public_read_site_content" on site_content;
drop policy if exists "public_read_case_studies"  on case_studies;
drop policy if exists "public_read_insights"      on insights;
drop policy if exists "public_insert_leads"       on leads;
drop policy if exists "admin_all_leads"           on leads;
drop policy if exists "admin_all_site_content"    on site_content;
drop policy if exists "admin_all_case_studies"    on case_studies;
drop policy if exists "admin_all_insights"        on insights;

-- Public read for published content
create policy "public_read_site_content" on site_content for select using (true);
create policy "public_read_case_studies" on case_studies for select using (published = true);
create policy "public_read_insights"     on insights     for select using (published = true);

-- Anyone can insert a lead (contact / booking forms)
create policy "public_insert_leads" on leads for insert with check (true);

-- Authenticated users (admin) have full access to everything
create policy "admin_all_leads"        on leads        for all using (auth.role() = 'authenticated');
create policy "admin_all_site_content" on site_content for all using (auth.role() = 'authenticated');
create policy "admin_all_case_studies" on case_studies for all using (auth.role() = 'authenticated');
create policy "admin_all_insights"     on insights     for all using (auth.role() = 'authenticated');

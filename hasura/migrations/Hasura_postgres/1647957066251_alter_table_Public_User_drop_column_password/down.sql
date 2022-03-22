comment on column "Public"."User"."password" is E'Users';
alter table "Public"."User" alter column "password" drop not null;
alter table "Public"."User" add column "password" text;

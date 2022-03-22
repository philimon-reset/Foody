alter table "Public"."Recipe"
  add constraint "Recipe_user_id_fkey"
  foreign key ("user_id")
  references "Public"."User"
  ("Id") on update restrict on delete restrict;

import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const constumersSchema = sqliteTable("constumers", {
  id: integer("id").primaryKey(),
  name: text("name"),
  tempatLahir: text("tempat_lahir"),
  tanggalLahir: text("tanggal_lahir"),
  alamat: text("alamat"),
  noTelp: text("no_telp"),
  email: text("email"),
});

export type ConstumerInsert = typeof constumersSchema.$inferInsert;

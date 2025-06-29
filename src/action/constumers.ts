"use server";

import { db } from "@/db/drizzle";
import { constumersSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
export const getDataConstumers = async () => {
  const data = await db.select().from(constumersSchema);
  return data;
};

export const postDataConstumer = async (
  name: string,
  tempatLahir: string,
  tanggalLahir: string,
  alamat: string,
  noTelp: string,
  email: string
) => {
  // Convert File to string (e.g., base64 or URL) or set to null

  const result = await db.insert(constumersSchema).values({
    name,
    tempatLahir,
    tanggalLahir,
    alamat,
    noTelp,
    email,
  });
  return result;
};

export const deleteDataCostumer = async (id: number) => {
  const result = await db
    .delete(constumersSchema)
    .where(eq(constumersSchema.id, id));
  return result;
};

export const getDataByIdConstumer = async (id: number) => {
  const result = await db
    .select()
    .from(constumersSchema)
    .where(eq(constumersSchema.id, id))
    .get();
  return result;
};

export const editDataCoustumers = async (
  id: number,
  name: string,
  tempatLahir: string,
  tanggalLahir: string,
  alamat: string,
  noTelp: string,
  email: string
) => {
  const result = await db
    .update(constumersSchema)
    .set({ name, tempatLahir, tanggalLahir, alamat, noTelp, email })
    .where(eq(constumersSchema.id, id));
  return result;
};

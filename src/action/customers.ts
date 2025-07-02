"use server";

import { db } from "@/db/drizzle";
import { CustomersSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
export const getDataCustomers = async () => {
  const data = await db.select().from(CustomersSchema);
  return data;
};

export const postDataCustomer = async (
  name: string,
  tempatLahir: string,
  tanggalLahir: string,
  alamat: string,
  noTelp: string,
  email: string
) => {
  // Convert File to string (e.g., base64 or URL) or set to null

  const result = await db.insert(CustomersSchema).values({
    name,
    tempatLahir,
    tanggalLahir,
    alamat,
    noTelp,
    email,
  });
  return result;
};

export const deleteDataCustomer = async (id: number) => {
  const result = await db
    .delete(CustomersSchema)
    .where(eq(CustomersSchema.id, id));
  return result;
};

export const getDataByIdCustomer = async (id: number) => {
  const result = await db
    .select()
    .from(CustomersSchema)
    .where(eq(CustomersSchema.id, id))
    .get();
  return result;
};

export const editDataCustomer = async (
  id: number,
  name: string,
  tempatLahir: string,
  tanggalLahir: string,
  alamat: string,
  noTelp: string,
  email: string
) => {
  const result = await db
    .update(CustomersSchema)
    .set({ name, tempatLahir, tanggalLahir, alamat, noTelp, email })
    .where(eq(CustomersSchema.id, id));
  return result;
};

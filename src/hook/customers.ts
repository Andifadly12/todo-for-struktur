// file: /hook/construmersQuerie.ts
import {
  deleteDataCustomer,
  editDataCustomer,
  getDataByIdCustomer,
  getDataCustomers,
  postDataCustomer,
} from "@/action/customers";
import { postCustomers } from "@/interfec/constumers";
import { useMutation, useQuery } from "@tanstack/react-query";
import { eq } from "drizzle-orm";
import { Mukta } from "next/font/google";

export const useGetDataCustomers = () =>
  useQuery({
    queryKey: ["getCustomers"],
    queryFn: async () => {
      const data = await getDataCustomers();
      return data;
    },
  });

export const usePostCustomer = () => {
  return useMutation({
    mutationKey: ["postCustomer"],
    mutationFn: async (data: {
      name: string;
      tempatLahir: string;
      tanggalLahir: string;
      alamat: string;
      noTelp: string;
      email: string;
    }) => {
      // Kirim data sebagai 6 argumen terpisah sesuai definisi postDataCustomer
      const result = await postDataCustomer(
        data.name,
        data.tempatLahir,
        data.tanggalLahir,
        data.alamat,
        data.noTelp,
        data.email
      );
      return result;
    },
  });
};

export const useDeleteCustomer = () => {
  return useMutation({
    mutationKey: ["deleteCustomer"],
    mutationFn: async ({ id }: { id: number }) => {
      const data = await deleteDataCustomer(id);
      return data;
    },
  });
};

export const useGetByIdCustomer = (id: number) => {
  return useQuery({
    queryKey: ["getByIdCustomer", id],
    queryFn: async () => {
      const data = await getDataByIdCustomer(id);
      return data;
    },
  });
};

export const useUpdateCustomer = () => {
  return useMutation({
    mutationKey: ["updateCustomer"],
    mutationFn: async (data: {
      id: number;
      name: string;
      tempatLahir: string;
      tanggalLahir: string;
      alamat: string;
      noTelp: string;
      email: string;
    }) => {
      const result = await editDataCustomer(
        data.id,
        data.name,
        data.tempatLahir,
        data.tanggalLahir,
        data.alamat,
        data.noTelp,
        data.email
      );
      return result;
    },
  });
};

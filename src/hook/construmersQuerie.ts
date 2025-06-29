// file: /hook/construmersQuerie.ts
import {
  deleteDataCostumer,
  editDataCoustumers,
  getDataByIdConstumer,
  getDataConstumers,
  postDataConstumer,
} from "@/action/constumers";
import { postConsumer } from "@/interfec/constumers";
import { useMutation, useQuery } from "@tanstack/react-query";
import { eq } from "drizzle-orm";
import { Mukta } from "next/font/google";

export const useGetDataConstumers = () =>
  useQuery({
    queryKey: ["getConstumers"],
    queryFn: async () => {
      const data = await getDataConstumers();
      return data;
    },
  });

export const usePostConstumers = () => {
  return useMutation({
    mutationKey: ["postCostumers"],
    mutationFn: async ({
      name,
      tempatLahir,
      tanggalLahir,
      alamat,
      noTelp,
      email,
    }: {
      name: string;
      tempatLahir: string;
      tanggalLahir: string;
      alamat: string;
      noTelp: string;
      email: string;
    }) => {
      const data = await postDataConstumer(
        name,
        tempatLahir,
        tanggalLahir,
        alamat,
        noTelp,
        email
      );
      return data;
    },
  });
};

export const useDeleteCostumer = () => {
  return useMutation({
    mutationKey: ["deleteCostumer"],
    mutationFn: async ({ id }: { id: number }) => {
      const data = await deleteDataCostumer(id);
      return data;
    },
  });
};

export const useGetByIdConstumrts = (id: number) => {
  return useQuery({
    queryKey: ["getByIdCostumers", id],
    queryFn: async () => {
      const data = await getDataByIdConstumer(id);
      return data;
    },
  });
};

export const useUpdateConstumers = () => {
  return useMutation({
    mutationKey: ["updateConstumers"],
    mutationFn: async ({
      id,
      name,
      tempatLahir,
      tanggalLahir,
      alamat,
      noTelp,
      email,
    }: {
      id: number;
      name: string;
      tempatLahir: string;
      tanggalLahir: string;
      alamat: string;
      noTelp: string;
      email: string;
    }) => {
      const data = await editDataCoustumers(
        id,
        name,
        tempatLahir,
        tanggalLahir,
        alamat,
        noTelp,
        email
      );
      return data;
    },
  });
};

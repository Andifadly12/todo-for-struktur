"use client";

import { usePostCustomer } from "@/hook/customers";
import { useRouter } from "next/navigation";
import React from "react";

export default function PostData() {
  const [name, setName] = React.useState("");
  const [tempatLahir, setTempatLahir] = React.useState("");
  const [tanggalLahir, setTanggalLahir] = React.useState("");
  const [alamat, setAlamat] = React.useState("");
  const [noTelp, setNoTelp] = React.useState("");
  const [email, setEmail] = React.useState("");
  const router = useRouter();
  const mutation = usePostCustomer();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({
      name,
      tempatLahir,
      tanggalLahir,
      alamat,
      noTelp,
      email,
    });

    setName("");
    setTempatLahir("");
    setTanggalLahir("");
    setAlamat("");
    setNoTelp("");
    setEmail("");
    router.back();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <p className="text-3xl font-bold text-center text-gray-800">
          Tambah Data User
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Input fields */}
          <label className="text-gray-600">Masukkan Nama</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Nama"
          />
          {/* Tempat Lahir */}
          <label className="text-gray-600">Masukkan Tempat Lahir</label>
          <input
            value={tempatLahir}
            onChange={(e) => setTempatLahir(e.target.value)}
            type="text"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Tempat Lahir"
          />
          {/* Tanggal Lahir */}
          <label className="text-gray-600">Masukkan Tanggal Lahir</label>
          <input
            value={tanggalLahir}
            onChange={(e) => setTanggalLahir(e.target.value)}
            type="date"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
          />
          {/* Alamat */}
          <label className="text-gray-600">Masukkan Alamat</label>
          <input
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            type="text"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Alamat"
          />
          {/* No Telp */}
          <label className="text-gray-600">Masukkan No Telp</label>
          <input
            value={noTelp}
            onChange={(e) => setNoTelp(e.target.value)}
            type="text"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="No Telp"
          />
          {/* Email */}
          <label className="text-gray-600">Masukkan Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Email"
          />

          <button
            type="submit"
            className="w-full p-2 mt-8 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

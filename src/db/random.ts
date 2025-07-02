import { faker } from "@faker-js/faker";
import { CustomerInsert, CustomersSchema } from "./schema";
import { db } from "./drizzle";

export function createRandomcustomer(): CustomerInsert {
  return {
    name: faker.person.fullName(),
    tempatLahir: faker.location.city(),
    tanggalLahir: faker.date
      .birthdate({ min: 18, max: 65, mode: "age" })
      .toISOString()
      .split("T")[0],
    alamat: faker.location.city(),
    noTelp: faker.phone.number().toString(),
    email: faker.internet.email(),
  };
}

for (let i = 0; i < 50; i++) {
  const data = createRandomcustomer();
  db.insert(CustomersSchema).values(data).run();
}

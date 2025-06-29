import { faker } from "@faker-js/faker";
import { ConstumerInsert, constumersSchema } from "./schema";
import { db } from "./drizzle";

export function createRandomConstumer(): ConstumerInsert {
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
  const data = createRandomConstumer();
  db.insert(constumersSchema).values(data).run();
}

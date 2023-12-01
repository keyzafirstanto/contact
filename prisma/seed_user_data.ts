import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const data = await prisma.user.findFirst({
    where: {
      OR: [
        {
          name: "FarmByte 001",
        },
        {
          name: "FarmByte 002",
        },
        {
          name: "FarmByte 003",
        },
        {
          name: "FarmByte 004",
        },
        {
          name: "FarmByte 005",
        },
      ],
    },
  });
  if (data) return console.info("Seeding already done");
  const result = await prisma.user.createMany({
    data: [
      {
        name: "FarmByte 001",
        phone: "08111",
        email: "farmbyte1@mail.com",
        password: "STRING",
        
      },
      {
        name: "FarmByte 002",
        phone: "08112",
        email: "farmbyte2@mail.com",
        password: "STRING",
      },
      {
        name: "FarmByte 003",
        phone: "08113",
        email: "farmbyte3@mail.com",
        password: "STRING",
      },
      {
        name: "FarmByte 004",
        phone: "08114",
        email: "farmbyte4@mail.com",
        password: "STRING",
      },
      {
        name: "FarmByte 005",
        phone: "08115",
        email: "farmbyte5@mail.com",
        password: "STRING",
      },
    ],
  });
  console.info("Seeding Success: ", result);
};

main();

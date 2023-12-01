import { Prisma, PrismaClient } from "@prisma/client";

const UserModel = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "stdout",
      level: "error",
    },
    {
      emit: "stdout",
      level: "info",
    },
    {
      emit: "stdout",
      level: "warn",
    },
  ],
});

UserModel.$on("query", (e) => {
  console.info("Query: " + e.query);
  console.info("Params: " + e.params);
  console.info("Duration: " + e.duration + "ms");
});

UserModel.$use(async (params, next) => {
  // callback before request
  const result = await next(params);
  // callback after request
  return result;
});

const Model = UserModel.$extends({
  model: {
    user: {
      async findOrCreate({ email, phone, data }: { email: string; phone: string; data: Prisma.AdminCreateInput }) {
        const user = await UserModel.user.findFirst({
          where: {
            OR: [
              {
                email: email,
              },
              {
                phone: phone,
              },
            ],
          },
        });
        if (user) return user;
        return await UserModel.user.create({ data: data });
      },
      async findByEmailOrPhone({ email, phone }: { email: string; phone: string }) {
        return await UserModel.user.findFirst({
          where: {
            OR: [
              {
                email: email,
              },
              {
                phone: phone,
              },
            ],
          },
        });
      },
    },
  },
});

export default Model;
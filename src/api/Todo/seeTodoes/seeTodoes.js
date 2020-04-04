import { prisma } from "../../../../generated/prisma-client";
export default {
  Query: {
    seeTodoes: async () => {
      return await prisma.todoes({ orderBy: "updatedAt_DESC" });
    },
  },
};

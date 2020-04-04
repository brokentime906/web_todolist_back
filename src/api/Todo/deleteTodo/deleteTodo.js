import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteTodo: async (_, args, __) => {
      const { id } = args;
      try {
        const isExists = await prisma.$exists.todo({ id });
        console.log(isExists);
        if (isExists) {
          await prisma.deleteTodo({ id });
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    toggleDone: async (_, args, __) => {
      const { id } = args;
      try {
        const todo = await prisma.todo({ id });
        await prisma.updateTodo({ where: { id }, data: { done: !todo.done } });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

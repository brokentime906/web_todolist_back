import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createTodo: async (_, args) => {
      const { contents, done } = args;
      try {
        const data = await prisma.createTodo({
          contents,
          done,
        });
        console.log("what", data);
        return data;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};

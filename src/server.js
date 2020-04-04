require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import path from "path";
import schema from "./schema";

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));
const PORT = process.env.PORT;
server.start({ port: PORT }, () => console.log(`Port on ${PORT}`));

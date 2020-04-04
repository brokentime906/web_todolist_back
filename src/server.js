require('dotenv').config();
import {GraphQLServer} from 'graphql-yoga';
import logger from 'morgan';
import path from 'path';
import schema from './schema';



const server = new GraphQLServer({schema});

server.express.use(logger('dev'));

server.start ({port : 4000}  , () =>console.log("Port 4000"));
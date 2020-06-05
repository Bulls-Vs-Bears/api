import postgres from 'fastify-postgres';
import { 
  PG_WRITER_CONNECTION_STRING, 
  PG_READER_CONNECTION_STRING,
  PG_REMOVER_CONNECTION_STRING 
} from 'config';

export async function setDatabaseConnections(server) {
  server.register(postgres, {
    name: 'pgWriter',
    connectionString: PG_WRITER_CONNECTION_STRING
  });
  
  server.register(postgres, {
    name: 'pgReader',
    connectionString: PG_READER_CONNECTION_STRING
  });

  server.register(postgres, {
    name: 'pgRemover',
    connectionString: PG_REMOVER_CONNECTION_STRING
  });
}
import postgres from 'fastify-postgres';

const pgWriterConnectionString = process.env.PG_WRITER_CONNECTION_STRING;
const pgReaderConnectionString = process.env.PG_READER_CONNECTION_STRING;
const pgRemoverConnectionString = process.env.PG_REMOVER_CONNECTION_STRING;

export async function setDatabaseConnections(server) {
  server.register(postgres, {
    name: 'pgWriter',
    connectionString: pgWriterConnectionString
  });
  
  server.register(postgres, {
    name: 'pgReader',
    connectionString: pgReaderConnectionString
  });

  server.register(postgres, {
    name: 'pgRemover',
    connectionString: pgRemoverConnectionString
  });
}
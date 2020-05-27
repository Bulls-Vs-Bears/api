import postgres from 'fastify-postgres';


const writerUser = process.env.WRITER_USER;
const writerPasswd = process.env.WRITER_PASSWORD;
const readerUser = process.env.READER_USER;
const readerPasswd = process.env.READER_PASSWORD;
const removerUser = process.env.REMOVER_USER;
const removerPasswd = process.env.REMOVER_PASSWORD;
const host = process.env.POSTGRES_HOST_NAME;
const port = process.env.POSTGRES_PORT;
const dbName = process.env.POSTGRES_DB;

export async function setDatabaseConnections(server) {
  server.register(postgres, {
    name: 'pgWriter',
    connectionString: `postgres://${writerUser}:${writerPasswd}@${host}:${port}/${dbName}`
  });
  
  server.register(postgres, {
    name: 'pgReader',
    connectionString: `postgres://${readerUser}:${readerPasswd}@${host}:${port}/${dbName}`
  });

  server.register(postgres, {
    name: 'pgRemover',
    connectionString: `postgres://${removerUser}:${removerPasswd}@${host}:${port}/${dbName}`
  });
}
import postgres from 'fastify-postgres';

const writerUser = process.env.WRITER_USER;
const writerPasswd = process.env.WRITER_PASSWORD;
const host = process.env.POSTGRES_HOST_NAME;
const port = process.env.POSTGRES_PORT;
const dbName = process.env.POSTGRES_DB;

export function writerConnection (server) {
  server.register(postgres, {
    connectionString: `postgres://${writerUser}:${writerPasswd}@${host}:${port}/${dbName}`
  });
}


import fastify from 'fastify';
import { config }from 'dotenv';

const server = fastify({ logger: true });
config();

server.get('/', async () => {
  const result = { hello: 'world'};
  return result;
})

const start = async () => {
  const port = process.env.PORT;

  try {
    await server.listen(port);
    server.log.info(`server listening on ${port}`);
  } catch (err) {
    server.log.error(err);
    // Reboot Server Connection
    server.close(
      setTimeout(
        server.listen(port, () => server.log.info('Successfully rebooted server')),
        1000
      )
    );
  }
}

start();

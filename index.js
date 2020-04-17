const fastify = require('fastify')({ logger: true });
import { config }from 'dotenv';

config();

fastify.get('/', async () => {
  const result = { hello: 'world'};
  return result;
})

const start = async () => {
  try {
    const port = process.env.PORT;
    await fastify.listen(port);
    fastify.log.info(`server listening on ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();

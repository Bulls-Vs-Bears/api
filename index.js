import 'dotenv/config';
import server from './src';
import { PORT, HOST } from 'config';

try {
  server.listen(PORT, HOST, (err) => {
    // TODO: Throw a better error
    if (err) throw new Error;
    server.log.info(`server listening on ${PORT}`);
  });
} catch (err) {
  server.log.error(err);

  // Reboot Server Connection
  server.close(
    setTimeout(
      server.listen(PORT, () => server.log.info('Successfully rebooted server')),
      1000
    )
  );
}

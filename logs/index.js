import fs from 'fs';
import pinoms from 'pino-multi-stream';

let streams = [];
if (process.env.NODE_ENV === 'dev') {
  // development streams
  streams = [
    {level: 'trace', stream: fs.createWriteStream('./logs/development.log')},
  ];
} else {
  // production streams
  streams = [
    {level: 'info', stream: fs.createWriteStream('./logs/info.log')},
    {level: 'error', stream: fs.createWriteStream('./logs/error.log')},
    {level: 'warn', stream: fs.createWriteStream('./logs/warn.log')},
  ];
}

export const logger = pinoms(pinoms.multistream(streams));

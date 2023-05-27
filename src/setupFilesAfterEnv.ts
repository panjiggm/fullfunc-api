import { cleint } from './db';

global.afterAll(async () => {
  await cleint.close();
});

import { uuidRegex } from '@terminus/ngx-tools/regex';

import { generateUUID } from './generate-uuid';

describe(`uuid`, function() {
  const testUUIDGenerator = function(generator: () => string, iterations = 1, done: jest.DoneCallback): Promise<void> {
    const uuidstore: Record<string, string> = {};
    let i;
    let newUuid;

    for (i = 0; i < iterations; i++) {
      newUuid = generator();

      // Test Validity
      if (!uuidRegex.test(newUuid)) {
        done.fail(new Error(`Not a valid UUID: ${newUuid}`));
      }

      // Test Collision
      if (uuidstore[newUuid]) {
        done.fail(new Error(`Collision on ${newUuid}`));
      }
      uuidstore[newUuid] = newUuid;
    }

    return Promise.resolve();
  };

  test(`should create UUIDs that do not collide`, function(done) {
    testUUIDGenerator(generateUUID, 100, done).then(() => {
      done();
    });
  });
});

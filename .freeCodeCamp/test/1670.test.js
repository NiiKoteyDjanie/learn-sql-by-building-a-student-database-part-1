const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select(\*|course)fromcourseswherecoursenotilike'%a%';/i;

    assert(query.test(lastLog) && /'%a%'/.test(lastLog) && !/ERROR/.test(lastLog));
  });
});

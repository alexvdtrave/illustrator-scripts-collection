const { describe, it, beforeEach, mock } = require('node:test');
const assert = require('node:assert/strict');
const { reload } = require('./test-utils');

describe('Find Smaller Paths', () => {

  const mocks = {
    app: {
      redraw: mock.fn()
    },
    alert: mock.fn(),
    localize: mock.fn(() => 'msg1')
  };

  Object.assign(global, mocks);

  beforeEach(() => {
    mocks.app.redraw.mock.resetCalls();
    mocks.alert.mock.resetCalls();
    mocks.localize.mock.resetCalls();
  });

  it('checks whether a document is open', () => {
    reload('../src/FindSmallerPaths');

    assert.equal(global.alert.mock.callCount(), 1);
    assert.equal(global.app.redraw.mock.callCount(), 0);
  });

});

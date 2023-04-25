const { assert } = require('chai');
const sinon = require('sinon');
const { reload } = require('./test-utils');

describe('Find Smaller Paths', () => {

  const appBase = { redraw: () => { } };
  global.app = sinon.mock(appBase);
  const redrawMock = global.app.expects('redraw');

  beforeEach(() => {
    global.alert = sinon.mock();
  });

  afterEach(() => {
    global.alert.verify();
  })

  it('checks whether a document is open', () => {
    global.localize = sinon.stub().returns('msg1');

    reload('../src/FindSmallerPaths');

    global.alert.withExactArgs().once();
    redrawMock.never();
  });

});